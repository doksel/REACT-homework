"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
    _inherits(Hello, _React$Component);

    function Hello() {
        _classCallCheck(this, Hello);

        return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
    }

    _createClass(Hello, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Hello, React"
                ),
                React.createElement(
                    "p",
                    null,
                    "Data:",
                    this.props.data
                )
            );
        }
    }]);

    return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, { data: "14.12.2017" }), document.getElementById("header"));

function Button(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "React - conteiner"
        ),
        React.createElement(
            "h2",
            null,
            "How learn React"
        ),
        React.createElement(
            "span",
            null,
            "Name: ",
            props.name
        ),
        React.createElement(
            "span",
            null,
            "Sername: ",
            props.sername
        ),
        React.createElement(
            "button",
            null,
            "Enter "
        )
    );
}
Button.defaultProps = { sername: "Petrov" };

ReactDOM.render(React.createElement(Button, { name: "Ivan", sername: "Ivanov" }), document.getElementById("conteiner"));

var By = function By() {
    return React.createElement(
        "h2",
        null,
        "React - footer"
    );
};

ReactDOM.render(React.createElement(By, null), document.getElementById("footer"));
