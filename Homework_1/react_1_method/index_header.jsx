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
