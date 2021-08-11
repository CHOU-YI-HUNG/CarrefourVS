"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/*import { Route } from 'react-router';*/
require("./custom.css");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var SelectSearch_1 = require("./pages/SelectSearch");
var Login_1 = require("./pages/Login");
var Register_1 = require("./pages/Register");
var AuthContext_1 = require("./helpers/AuthContext");
var Navbar_1 = require("./components/Navbar/Navbar");
var react_1 = require("react");
var axios_1 = require("axios");
function App() {
    var _a = react_1.useState({
        username: '',
        id: 0,
        status: false
    }), authState = _a[0], setAuthState = _a[1];
    var _b = react_1.useState(false), switchNavbar = _b[0], setSwitchNavbar = _b[1];
    react_1.useEffect(function () {
        axios_1.default.get('https://localhost:5001/api/Auth', {
            headers: {
                token: localStorage.getItem("accessToken"),
            }
        }).then(function (response) {
            if (response.data.error) {
                setAuthState(__assign(__assign({}, authState), { status: false }));
            }
            else {
                setAuthState({
                    username: response.data.username,
                    id: response.data.id,
                    status: true
                });
            }
        });
    }, []);
    return (React.createElement("div", { className: "App" },
        React.createElement(AuthContext_1.AuthContext.Provider, { value: { authState: authState, setAuthState: setAuthState, setSwitchNavbar: setSwitchNavbar } },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                switchNavbar ? React.createElement(React.Fragment, null) : (React.createElement(Navbar_1.default, null)),
                React.createElement(react_router_dom_1.Switch, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/:path/:secondpath", exact: true, component: SelectSearch_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: "/:path/:secondpath/:thirdpath", exact: true, component: SelectSearch_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: '/login', exact: true, component: Login_1.default }),
                    React.createElement(react_router_dom_1.Route, { path: '/register', exact: true, component: Register_1.default }))))));
}
exports.default = App;
//export default () => (
//    <>
//        <h3>dsf</h3>
//    </>
//);
//# sourceMappingURL=App.js.map