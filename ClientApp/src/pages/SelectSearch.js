"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
function SelectSearch() {
    var paths = react_router_dom_1.useParams();
    return (React.createElement("div", null,
        paths.path,
        paths.secondpath,
        paths.thirdpath));
}
exports.default = SelectSearch;
//# sourceMappingURL=SelectSearch.js.map