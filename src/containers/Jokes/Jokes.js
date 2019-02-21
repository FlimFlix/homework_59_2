import React, {Component, Fragment} from 'react';
import './Jokes.css';
import Joke from '../../components/Joke/Joke.js';


class Jokes extends Component {
    state = {
        jokes: [],
    };

    componentDidMount() {
        const P_UR = 'https://api.chucknorris.io/jokes/random';
        fetch(P_UR).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong with network request');
        }).then(jokes => {
            this.setState({jokes: jokes})
        }).catch(error => {
            console.log(error);
        });
    }


    render() {
    console.log(this.state);
        return (
            <Fragment>
                <section className="Jokes">
                    <Joke
                        key={this.state.jokes.id}
                        title={this.state.jokes.value}/>
                </section>
            </Fragment>
        )
    }
}


export default Jokes
