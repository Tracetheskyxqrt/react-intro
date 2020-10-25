import React from "react";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {Element} from '../../../src/components/common/FormsControls/FormsControls'
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Input = Element("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={Input}/>remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for form
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <h1>Sign in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);