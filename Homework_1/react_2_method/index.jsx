class Hello extends React.Component {
    render() {
        return <div>
                    <h1>Hello, React</h1>
                    <p>Data:{this.props.data}</p>
                </div>;
    }
}
ReactDOM.render(
    <Hello data="14.12.2017"/>,
    document.getElementById("header")
);

function Button(props) {
    return <div>
        <h3>React - conteiner</h3>
        <h2>How learn React</h2>
        <span>Name: {props.name}</span>
        <span>Sername: {props.sername}</span>
        <button>Enter </button>
    </div>
}
Button.defaultProps = {sername: "Petrov"};

ReactDOM.render(
    <Button name="Ivan" sername="Ivanov"/>,
    document.getElementById("conteiner")
);

var By = () => {
    return (<h2>React - footer</h2>);
}

ReactDOM.render(
    <By />,
    document.getElementById("footer")
);