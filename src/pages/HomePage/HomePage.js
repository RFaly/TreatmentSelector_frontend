import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import './HomePage.css';
import logo from './logo-mtomady-madagascar.png'

function HomePage(props) {
	let { t } = useTranslation();

	let { isAuthenticated } = props;
	
	return(
		<div>
			<center>
				<img src={logo} alt="" width="50%"/>
				<h3 className="title-main">
					<i> {t("homepage.title")} </i>
				</h3>

				<div className="d-flex flex-wrap justify-content-around align-items-center">
					<div className="main-button1" role="group" aria-label="First group">
						<NavLink to="/patient" className="main-button btn btn-primary" >{t("homepage.botton1")}</NavLink>
					</div>
					<div className="main-button1" role="group" aria-label="Third group">
						{
							isAuthenticated ?
								<NavLink to="/doctor" className="main-button btn btn-primary" >{t("homepage.botton2")}</NavLink>
							:
								<span data-toggle="modal" data-target="#exampleModalCenter" className="main-button btn btn-primary" >{t("homepage.botton2")}</span>
						}
					</div>
				</div>
			</center>
		</div>
	)
}


const mapStateToprops =(state) => {
  return {
    ...state.auth
  }
}

export default connect(mapStateToprops)(HomePage);
