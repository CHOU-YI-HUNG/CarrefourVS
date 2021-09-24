import { useState, useContext } from 'react';
import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Input from '../components/Other/Input';
import axios from 'axios';
import { AuthContext } from '../helpers/AuthContext';
import '../styles/Login.css'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setAuthState}=useContext(AuthContext)
    let history = useHistory();

   
    
    const login = () => {   
        const data = { username: username, password: password };
        //"http://localhost:3001/auth/login"
        axios.post("https://localhost:5001/api/Login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({
                    username:response.data.username,
                    id:response.data.id,
                    status:true
                  })
                history.push("/");
            }
        });
    };

    return (
        <div className='login'>
            <div className='registerTop'>
                <div className="logo">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src="https://image.azureedge.net/0239143.png"></img>
                    </Link>
                </div>
            </div>
            <div className='container'>

                <div className="containerItem">
                    <h3>登入</h3>
                    <Input labelValue='Username:' setValue={setUsername}></Input>
                    <Input labelValue='Password:' setValue={setPassword}></Input>
                    <button onClick={login}> Login </button>
                </div>

            </div>
        </div>
    )
}

export default Login
