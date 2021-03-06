import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import useRegisterForm from './hooks/useRegisterForm';

/*
:copen " Open the quickfix window
:ccl   " Close it
:cw    " Open it if there are "errors", close it otherwise (some people prefer this)
:cn    " Go to the next error in the window
:cnf   " Go to the first error in the next file
:set switchbuf+=newtab
*/
const Register = ({auth,errors,registerUser,match,location,history}) => {

	useEffect(() => {
		if (auth.isAuthenticated){
			history.push("/dashboard");
		}

	},[auth,history]);

	const onSubmit = e => {
		console.log(inputs);
		const newUser = {
		      name: inputs.name,
		      email: inputs.email,
		      password: inputs.password,
		      password2: inputs.password2
		    };
		console.log(newUser);
		registerUser(newUser, history); 
  	};
		
	const {inputs, handleInputChange, handleSubmit} = useRegisterForm(onSubmit);

	return (
		
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
		
            <form noValidate onSubmit={handleSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={handleInputChange}
                  value={inputs.name}
                  name="name"
				  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
                <span className="red-text">{errors.name}</span>
              </div>

              <div className="input-field col s12">
                <input
                  onChange={handleInputChange}
                  value={inputs.email}
                  id="email"
				  name="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleInputChange}
                  value={inputs.password}
                  id="password"
				  name="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={handleInputChange}
                  value={inputs.password2}
                  id="password2"
				  name="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
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
                  Sign up
                </button>
              </div>
			</form>
          </div>
        </div>
      </div>
	);
};
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  match:PropTypes.object.isRequired,
  location:PropTypes.object.isRequired,
  history:PropTypes.object.isRequired
};

// redux calls this function with its state.
//
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// curried function.  call a function that returns a function then call the returned function.
// registerUser = (userData, history) => dispatch => {
// Register component now has access to Redux state and the registerUser curried function.
//While it is easy to redirect within a component (can simply say this.props.history.push('/dashboard') for example), we can’t do that by default within an action. 
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
