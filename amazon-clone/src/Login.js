import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase.js';
import './Login.css';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if(auth) {
                navigate('/')
            }
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <Link to= '/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' alt='' />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange = {(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} autoComplete='papuboy' onChange = {(e) => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign in</button> 
                </form>

                <p>
                    By continuing, you agree to Amazon clone's Conditions of Use and Privacy Notice.
                </p>

                <button type='submit' onClick={register} className='login__createAccountButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;