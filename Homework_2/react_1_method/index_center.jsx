function Button(props) {
    return <div>
        <h2>React - center</h2>
        <h3>How learn React: </h3>
        <span>Name: {props.name}</span><br/>
        <span>Sername: {props.sername}</span><br/>
        <button>Enter </button>
    </div>;
}
Button.defaultProps = {sername: "Petrov"};
// Button.propIypes = {name: propTypes.string, sername: propTypes.string};

ReactDOM.render(
    <Button name="Ivan" sername="Ivanov"/>,
    document.getElementById("center")
);
