import faker from 'faker';
import React from 'react';
import spotify from '../api/spotify';
import TopBar from './TopBar';
import Picture from './Picture';

// '0TcVnvKse98awlZxtUKIOk'
class App extends React.Component {
    state = { artist: '' };

    getArtist = async art => {
        const response = await spotify.get('/v1/artists', {
            params: {
                id: art
            }
        });

        this.setState({ artist: response.data.results });
    }

    render() {
        return (
            <div className="main">
                <TopBar />
                <div className="ui three column grid">
                    <div className="column">
                        <Picture link="https://open.spotify.com/artist/0TcVnvKse98awlZxtUKIOk" picture={faker.image.people()}
                        name="Alcymar Monteiro"
                        textAlt="Foto Alcymar Monteiro"
                        linkName="https://open.spotify.com/artist/0TcVnvKse98awlZxtUKIOk"
                        />
                    </div>
                    <div className="column">
                        <Picture link="https://open.spotify.com/artist/11irmEzISytQwB3G8uhC5E" picture={faker.image.people()}
                        name="Leela"
                        textAlt="Foto Leela"
                        linkName="https://open.spotify.com/artist/11irmEzISytQwB3G8uhC5E"
                        />
                    </div>
                    <div className="column">
                        <Picture link="https://open.spotify.com/artist/2UhA8yc1DpFfkutXq5lMah"
                        picture={faker.image.people()} 
                        name="Ney Alves" 
                        textAlt="Foto Ney Alves"
                        linkName="https://open.spotify.com/artist/2UhA8yc1DpFfkutXq5lMah"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;