import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { withTranslation } from "react-i18next";

import { userLoginAttempt } from '../../redux/Auth/auth.action';

class Signup extends React.Component{
    render(){

      const { t } = this.props;

      const LoginSchema = Yup.object().shape({
          email: Yup.string()
              .required("error"),
          password: Yup.string()
              .required("error")
      });

      const { error } = this.props
      return(
     
        <Formik
           initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              this.props.userLoginAttempt(values);
            }}
        >
          {({ errors, touched }) => (
           <React.Fragment>
          <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    {t("signIn.title")}
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <center>
                  <Form className="  px-10" >
                    <div className="form-group ml-3 mr-3">
                      <label htmlFor="email">{t("signIn.email")}</label>
                      <Field name="email" id="email" className="form-control" placeholder={t("signIn.email")} />
                      { errors.email && touched.email ? ( <div className="alert alert-danger mt-2">{t("signIn.error")}</div>) : null }
                    </div>
                    <div className="form-group ml-3 mr-3">
                      <label htmlFor="password">{t("signIn.password")}</label>
                      <Field name="password" id="password" type="password" className="form-control" placeholder={t("signIn.password")} />
                      { errors.password && touched.password ? (<div className="alert alert-danger mt-2">{t("signIn.error")}</div>) : null }
                      { error ? 
                        <label className="alert alert-danger mt-2">
                          {t("signIn.renderError")}
                        </label>
                        : 
                        null }
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">{t("signIn.button1")}</button>
                      <button className="btn btn-primary"  type="submit">{t("signIn.button2")}</button>
                    </div>
                  </Form>
                </center>
              </div>
            </div>
          </div>    
         </React.Fragment>
                    )}
        </Formik>
     
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginAttempt: (values) => {dispatch(userLoginAttempt(values))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Signup));
  