import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function HomePage(props) {
	let { t } = useTranslation();

	let { isAuthenticated } = props;
	
	return(
		<div>
			<center>
				<img src="https://mtomady.mg/wp-content/uploads/2018/05/logo-mtomady-madagascar.png" alt="" width="50%"/>
				<h1 className="text-red-500">{t("homepage.title")}</h1>

				<div role="toolbar" aria-label="Toolbar with button groups">
					<div className="btn-group mr-2" role="group" aria-label="First group">
						<NavLink to="/patient" className="btn btn-primary" >{t("homepage.botton1")}</NavLink>
					</div>
					<div className="btn-group" role="group" aria-label="Third group">
						{
							isAuthenticated ?
								<NavLink to="/doctor" className="btn btn-primary" >{t("homepage.botton2")}</NavLink>
							:
								<span data-toggle="modal" data-target="#exampleModalCenter" className="btn btn-primary" >{t("homepage.botton2")}</span>
						}
					</div>
				</div>
			</center>
		</div>
	)
}

export default HomePage
