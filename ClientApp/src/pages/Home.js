"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var HomeMiddle_1 = require("../components/HomeComponent/HomeMiddle");
var HomeBottom_1 = require("../components/HomeComponent/HomeBottom");
var AuthContext_1 = require("../helpers/AuthContext");
var react_router_dom_1 = require("react-router-dom");
function Home() {
    var setSwitchNavbar = react_1.useContext(AuthContext_1.AuthContext).setSwitchNavbar;
    var history = react_router_dom_1.useHistory();
    history.listen(function () {
        setSwitchNavbar(window.location.pathname === '/login' || window.location.pathname === '/register');
    });
    return (React.createElement("div", null,
        React.createElement(HomeMiddle_1.default, null),
        React.createElement(HomeBottom_1.default, null)));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map