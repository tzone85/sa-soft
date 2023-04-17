 import {Link} from "react-router-dom";
 import {useRef, useState} from "react";
 import axiosClient from "../axios-client.js";
 import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault()

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,

        }

        // reset errors on submit
        setErrors(null);

        console.log("Logging Payload: ", payload);

        axiosClient.post(`/login`, payload)
            .then(({data}) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                console.log('Error: ', err);
                const response = err.response;
                if (response && response.status === 422) { // i.e. validation error

                    if (response.data.errors) {
                        // console.log("response errors: ", response.data.errors);
                        setErrors(response.data.errors);
                    } else {
                         setErrors({
                             email: [response.data.message]
                         })
                    }


                }
            })
    }

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Log into your account</h1>
                    <input ref={emailRef} type="email" placeholder="Email"/>
                    <input ref={passwordRef} type="password" placeholder="password"/>

                    <button className="btn btn-block">Login</button>

                    {errors && <div className="alert">
                        {Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                    }

                    <p className="message">
                        Not Registered? <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>

        </div>
    )
}
