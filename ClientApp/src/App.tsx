import * as React from 'react';
/*import { Route } from 'react-router';*/
import './custom.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SelectSearch from './pages/SelectSearch';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './helpers/AuthContext';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {
    const [authState, setAuthState] = useState({
        username: '',
        id: 0,
        status: false
    })

    const [switchNavbar, setSwitchNavbar] = useState(false);
    //useEffect(() => {
    //    axios.get('http://localhost:3001/auth/auth', {
    //        headers: {
    //            accessToken: localStorage.getItem("accessToken"),
    //        }
    //    }).then((response) => {
    //        if (response.data.error) {
    //            setAuthState({ ...authState, status: false })
    //        }
    //        else {
    //            setAuthState({
    //                username: response.data.username,
    //                id: response.data.id,
    //                status: true
    //            })
    //        }
    //    })

    //}, [])



    return (
        <div className="App">
            <AuthContext.Provider value={{ authState, setAuthState, setSwitchNavbar }}>
                <Router>
                    {switchNavbar ? <></> : (<Navbar />)}
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/:path/:secondpath" exact component={SelectSearch} />
                        <Route path="/:path/:secondpath/:thirdpath" exact component={SelectSearch} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                    </Switch>
                </Router>
            </AuthContext.Provider>
        </div>
    );
}

export default App;

//export default () => (
//    <>
//        <h3>dsf</h3>
//    </>
//);