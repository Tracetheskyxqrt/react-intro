import React from "react";
import {Field, reduxForm} from "redux-form";
import {requiredField} from "../../utils/validators/validators";
import {Element} from '../../../src/components/common/FormsControls/FormsControls'

const Input = Element("input");

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'}
                       component={Input} validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
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
        // dispatch to thunk and connect(Login) and send {log+pass} on server
    }

    return (
        <div>
            <h1>Sign in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;