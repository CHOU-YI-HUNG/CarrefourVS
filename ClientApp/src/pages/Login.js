"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Input_1 = require("../components/Other/Input");
var axios_1 = require("axios");
var AuthContext_1 = require("../helpers/AuthContext");
require("../styles/Login.css");
function Login() {
    var _a = react_1.useState(''), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var setAuthState = react_1.useContext(AuthContext_1.AuthContext).setAuthState;
    var history = react_router_dom_1.useHistory();
    var login = function () {
        var data = { username: username, password: password };
        //"http://localhost:3001/auth/login"
        axios_1.default.post("https://localhost:5001/api/Login", data).then(function (response) {
            if (response.data.error) {
                alert(response.data.error);
            }
            else {
                localStorage.setItem("accessToken", response.data.token);
                setAuthState({
                    username: response.data.username,
                    id: response.data.id,
                    status: true
                });
                history.push("/");
            }
        });
    };
    return (React.createElement("div", { className: 'login' },
        React.createElement("div", { className: 'registerTop' },
            React.createElement("div", { className: "logo" },
                React.createElement(react_router_dom_1.Link, { to: '/', style: { textDecoration: 'none' } },
                    React.createElement("img", { src: "https://image.azureedge.net/0239143.png" })))),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: "containerItem" },
                React.createElement("h3", null, "\u767B\u5165"),
                React.createElement(Input_1.default, { labelValue: 'Username:', setValue: setUsername }),
                React.createElement(Input_1.default, { labelValue: 'Password:', setValue: setPassword }),
                React.createElement("button", { onClick: login }, " Login ")))));
}
exports.default = Login;
//# sourceMappingURL=Login.js.map