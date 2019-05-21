import faker from 'faker';
import React from 'react';
import TopBar from './TopBar';
import Picture from './Picture';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <TopBar />
                <div className="ui three column grid">
                    <div className="column">
                        <Picture pic={faker.image.people()} name="Alcymar Monteiro"/>
                    </div>
                    <div className="column">
                        <Picture pic={faker.image.people()} name="Leela"/>
                    </div>
                    <div className="column">
                        <Picture pic={faker.image.people()} name="Ney Alves"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;