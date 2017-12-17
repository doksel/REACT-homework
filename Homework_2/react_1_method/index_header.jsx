class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {class:'off', welcom: 'Hello, my friend!', label:'Нажми'};
        this.press = this.press.bind(this);
    }
    press(){
        let className = (this.state.class==="off")?"on":"off";
        let welcomChange = (this.state.welcom==="Hello, my friend!")?'Good bye, my friend!':'Hello, my friend!';
        let labelChange = (this.state.label==='Нажми')?'Нажато':'Нажми';
        this.setState({class:className, welcom:welcomChange, label:labelChange})
    }
    render() {
        return <div>
                    <h1>Hello, React</h1>
                    <p>Data:{this.props.data}</p>
                    <p>{this.state.welcom}</p>
                    <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
                </div>;
    }
}

ReactDOM.render(
    <Hello data="14.12.2017"/>,
    document.getElementById("header")
);
