import "./styles.scss";
import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import Picture from './Picture';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <TopBar />
                <div className="ui three column grid">
                    <div className="column">
                        <Picture img={faker.image.avatar()} name="Alcymar Monteiro"/>
                    </div>
                    <div className="column">
                        <Picture img={faker.image.avatar()} name="Leela"/>
                    </div>
                    <div className="column">
                        <Picture img={faker.image.avatar()} name="Ney Alves"/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);