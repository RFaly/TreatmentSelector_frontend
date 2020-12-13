import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trans, useTranslation } from "react-i18next";

function HomePage() {
	let { t, i18n } = useTranslation();
	
	return(
		<div>

			
			<center>
			<img src="https://mtomady.mg/wp-content/uploads/2018/05/logo-mtomady-madagascar.png" alt="" width="50%"/>

			<h1 className="text-red-500">{t("homepage.title")}</h1>

			<div className="row">
				<div className="col-sm-6">
					<NavLink to="/patient" className="btn btn-primary" >{t("homepage.botton1")}</NavLink>
				</div>
				<div className="col-sm-6">
					<NavLink to="/doctor" className="btn btn-primary" >{t("homepage.botton2")}</NavLink>
				</div>
			</div>

			</center>
			
		</div>
	)
}

export default HomePage
