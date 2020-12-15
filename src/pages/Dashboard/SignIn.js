import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { userLoginAttempt } from '../../redux/Auth/auth.action';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('Le champ ne doit pas être vide'),
    password: Yup.string()
        .required('Le champ ne doit pas être vide')
});

class Signup extends React.Component{
    render(){
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
                    Connecter vous pour continuer
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <center>
                  <Form className="  px-10" >
                    <div className="form-group ml-3 mr-3">
                      <label htmlFor="email">Adresse e-mail</label>
                      <Field name="email" id="email" className="form-control" placeholder="Adresse e-mail" />
                      { errors.email && touched.email ? ( <div className="alert alert-danger">{errors.email}</div>) : null }
                    </div>
                    <div className="form-group ml-3 mr-3">
                      <label htmlFor="password">Mot de passe</label>
                      <Field name="password" id="password" type="password" className="form-control" placeholder="Mot de passe" />
                      { errors.password && touched.password ? (<div className="alert alert-danger">{errors.password}</div>) : null }
                      <label className="alert alert-danger">
                        { error }
                      </label>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button className="btn btn-primary"  type="submit">Se connecter</button>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Signup);
  