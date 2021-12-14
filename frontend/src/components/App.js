import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cad: 'Hola Mundo!',
            calculo: 0,
            a: 20,
            b: 30
        }
    }

    componentDidMount() {
        this.call();
    }

    async call() {
        let a = this.state.a;
        let b = this.state.b;
        let resultado = await fetch('http://localhost:3000/suma', {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                a: a,
                b: b
            })
        });
        let response = await resultado.json();
        this.setState({ calculo: response.resultado });
    }

    render() {
        return (
            <div>
                <h1>{this.state.cad}</h1>
                <h1>La suma de {this.state.a} y {this.state.b} es: {this.state.calculo}</h1>
            </div>
        )
    }
}

export default App;