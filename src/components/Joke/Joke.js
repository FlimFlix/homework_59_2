import React, {Component} from 'react';
import './Joke.css';

class Joke extends Component {

    render() {
        return (
            <article className="Joke">
                <h1>{this.props.title}</h1>
            </article>
        );
    }
}

export default Joke;
