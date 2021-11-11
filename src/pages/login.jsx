import React from 'react'
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const history = useNavigate()
    const signIn = () => {
        history('/home')
    }
    return (
        <div class="login">
            <h1>Login</h1>
            <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" autocomplete="off" />
                <input type="password" name="p" placeholder="Password" required="required" autocomplete="off" />
                <button type="submit" class="btn btn-primary btn-block btn-large" onClick={() => signIn()}>Sign In</button>
            </form>
        </div>
    )
}
export default Login