"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var CheckBox_1 = require("../components/Other/CheckBox");
var Input_1 = require("../components/Other/Input");
var axios_1 = require("axios");
require("../styles/Register.css");
function Register() {
    var _a = react_1.useState(0), flow = _a[0], setFlow = _a[1];
    var _b = react_1.useState('0'), phone = _b[0], setPhone = _b[1];
    var _c = react_1.useState(''), name = _c[0], setName = _c[1];
    var _d = react_1.useState(''), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(''), birthday = _e[0], setBirthday = _e[1];
    var _f = react_1.useState(''), password = _f[0], setPassword = _f[1];
    var _g = react_1.useState(''), resetPassword = _g[0], setResetPassword = _g[1];
    var _h = react_1.useState(false), check = _h[0], setCheck = _h[1];
    var histoty = react_router_dom_1.useHistory();
    var checkHandler = function () {
        setCheck(!check);
    };
    var flowChangeHandler = function () {
        if (flow === 0) {
            if (phone.length > 9 && check) {
                setFlow(flow + 1);
            }
        }
        else if (flow === 1) {
            if (name != '' && email != '' && password != '' && resetPassword != '') {
                setFlow(flow + 1);
                axios_1.default.post('https://localhost:5001/api/Register', {
                    username: name,
                    password: password,
                    phone: phone,
                    email: email,
                    birthday: birthday,
                }).then(function (respose) {
                    console.log(respose.data);
                });
            }
        }
    };
    var form = [];
    form.push(React.createElement("form", { key: 0 },
        React.createElement("h3", null, "\u8A3B\u518A"),
        React.createElement(Input_1.default, { labelValue: "\u624B\u6A5F\u865F\u78BC", setValue: setPhone }),
        React.createElement("div", { className: 'agreeInformationContainer' },
            React.createElement("div", { className: 'agreeInformation' },
                React.createElement(CheckBox_1.default, { checkHandler: checkHandler }),
                React.createElement("span", null,
                    React.createElement("span", { style: { color: 'red' } }, "*"),
                    React.createElement("a", { href: "https://www.carrefour.com.tw/member-clause/" }, "\u6211\u540C\u610F\u6578\u4F4D\u865B\u64EC\u5361\u6703\u54E1\u689D\u6B3E\u4E14\u5EFA\u7ACB\u865B\u64EC\u6703\u54E1\u597D\u5EB7\u5361"))),
            React.createElement("div", { className: 'agreeInformation' },
                React.createElement(CheckBox_1.default, null),
                React.createElement("span", null,
                    React.createElement("a", { href: "https://www.carrefour.com.tw/joint-marketing/" }, "\u3010\u5BB6\u6A02\u798F\u95DC\u4FC2\u4F01\u696D\u8207\u5408\u4F5C\u7279\u7D04\u5EE0\u5546\u500B\u4EBA\u8CC7\u6599\u8490\u96C6\u3001\u8655\u7406\u53CA\u5229\u7528\u544A\u77E5\u53CA\u540C\u610F\u4E8B\u9805\u3011(\uFF0A\u8ACB\u8A73\u95B1\u689D\u6B3E\u5167\u5BB9)"))),
            React.createElement("div", { className: 'agreeInformation' },
                React.createElement(CheckBox_1.default, null),
                React.createElement("span", null, "\u6211\u540C\u610F\u6536\u5230\u96FB\u5B50\u5831\u4E26\u4EAB\u53D7\u591A\u91CD\u6703\u54E1\u6298\u6263\u8A0A\u606F"))),
        React.createElement("div", { className: 'button', onClick: flowChangeHandler, style: (phone.length > 9 && check) === true ? { background: 'blue' } : {} }, "\u4E0B\u4E00\u6B65"),
        React.createElement("div", { className: 'regTips' },
            React.createElement("span", null, "\u5DF2\u6709\u5E33\u865F?"),
            React.createElement(react_router_dom_1.Link, { to: '/login', style: { textDecoration: 'none' } }, "\u767B\u5165"))));
    form.push(React.createElement("form", { key: 1 },
        React.createElement(Input_1.default, { labelValue: "\u59D3\u540D", setValue: setName }),
        React.createElement("input", { type: "datetime-local", className: "birthday", onChange: function (event) { setBirthday(event.target.value); } }),
        React.createElement(Input_1.default, { labelValue: "Email", setValue: setEmail }),
        React.createElement(Input_1.default, { labelValue: "\u8F38\u5165\u5BC6\u78BC", setValue: setPassword }),
        React.createElement("p", null, "\u82F1\u6587\u5B57\u6BCD\u5927\u5C0F\u5BEB\u52A0\u4E0A\u6578\u5B57,\u4F8BAAbbcc123456,\u51718~20\u4F4D\u82F1\u6578\u5B57"),
        React.createElement(Input_1.default, { labelValue: "\u8ACB\u518D\u6B21\u8F38\u5165\u5BC6\u78BC", setValue: setResetPassword }),
        React.createElement("p", null,
            "\u9EDE\u9078\u300C\u8A3B\u518A\u300D,\u5373\u8868\u793A\u60A8\u540C\u610F\u63A5\u53D7",
            React.createElement("a", null, "\u6703\u54E1\u689D\u6B3E")),
        React.createElement("div", { className: 'button', onClick: flowChangeHandler, style: { background: 'blue' } }, "\u8A3B\u518A")));
    form.push(React.createElement("form", { key: 2 },
        React.createElement("h1", null, "\u606D\u559C\u4F60\u8A3B\u518A\u6210\u529F"),
        flow === 2 &&
            setTimeout(function () {
                histoty.push('/');
            }, 1000)));
    return (React.createElement("div", { className: 'register' },
        React.createElement("div", { className: 'registerTop' },
            React.createElement("div", { className: "logo" },
                React.createElement(react_router_dom_1.Link, { to: '/', style: { textDecoration: 'none' } },
                    React.createElement("img", { src: "https://image.azureedge.net/0239143.png" })))),
        React.createElement("div", { className: 'registerFlow' },
            React.createElement("label", { style: flow >= 0 ? { color: "#1E5BC6" } : {} },
                React.createElement("span", { style: flow >= 0 ? { background: "#1E5BC6" } : {} }, "1"),
                "\u5EFA\u7ACB\u5E33\u865F"),
            React.createElement("p", { className: 'line' }),
            React.createElement("label", { style: flow >= 1 ? { color: "#1E5BC6" } : {} },
                React.createElement("span", { style: flow >= 1 ? { background: "#1E5BC6" } : {} }, "2"),
                "\u8ACB\u586B\u5BEB\u5E33\u6236\u8CC7\u6599"),
            React.createElement("p", { className: 'line' }),
            React.createElement("label", { style: flow >= 2 ? { color: "#1E5BC6" } : {} },
                React.createElement("span", { style: flow >= 2 ? { background: "#1E5BC6" } : {} }, "3"),
                "\u8A3B\u518A\u5B8C\u6210")),
        form[flow]));
}
exports.default = Register;
//# sourceMappingURL=Register.js.map