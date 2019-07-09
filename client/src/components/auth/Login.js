import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import useLoginForm from './hooks/useLoginForm';
/*
:copen " Open the quickfix window
:ccl   " Close it
:cw    " Open it if there are "errors", close it otherwise (some people prefer this)
:cn    " Go to the next error in the window
:cnf   " Go to the first error in the next file
:set switchbuf+=newtab
*/
const Login = ({auth,errors,loginUser,match,location,history}) => {

	const onSubmit = e => {
		const userData = {
		      email: inputs.email,
		      password: inputs.password,
		    };
		loginUser(userData); 
  	};

	
	const {inputs, handleInputChange, handleSubmit} = useLoginForm(onSubmit);

	return (
	      <div className="container">
	        <div style={{ marginTop: "4rem" }} className="row">
	          <div className="col s8 offset-s2">
	            <Link to="/" className="btn-flat waves-effect">
	              <i className="material-icons left">keyboard_backspace</i> Back to
	              home
	            </Link>
	            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
	              <h4>
	                <b>Login</b> below
	              </h4>
	              <p className="grey-text text-darken-1">
	                Don't have an account? <Link to="/register">Register</Link>
	              </p>
	            </div>
	            <form noValidate onSubmit={handleSubmit}>
	              <div className="input-field col s12">
	                <input
	                  onChange={handleInputChange}
	                  value={inputs.email}
					  name="email"
	                  id="email"
	                  type="email"
	                  className={classnames("", {
	                    invalid: errors.email || errors.emailnotfound
	                  })}
	                />
	                <label htmlFor="email">Email</label>
	                <span className="red-text">
	                  {errors.email}
	                  {errors.emailnotfound}
	                </span>
	              </div>
	              <div className="input-field col s12">
	                <input
	                  onChange={handleInputChange}
	                  value={inputs.password}
	                  id="password"
	                  type="password"
	                  className={classnames("", {
	                    invalid: errors.password || errors.passwordincorrect
	                  })}
	                />
	                <label htmlFor="password">Password</label>
	                <span className="red-text">
	                  {errors.password}
	                  {errors.passwordincorrect}
	                </span>
	              </div>
	              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
	                <button
	                  style={{
	                    width: "150px",
	                    borderRadius: "3px",
	                    letterSpacing: "1.5px",
	                    marginTop: "1rem"
	                  }}
	                  type="submit"
	                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
	                >
	                  Login
	                </button>
	              </div>
	            </form>
	          </div>
	        </div>
	      </div>
	    );
	  }
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  match:PropTypes.object.isRequired,
  location:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
