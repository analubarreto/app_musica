import React from 'react';
// import spotify from '../api/spotify';
import TopBar from './TopBar';
import Picture from './Picture';
import Button from './Button';

// '0TcVnvKse98awlZxtUKIOk'
class App extends React.Component {
    /*
    state = { artist: '' };

    getArtist = async art => {
        const response = await spotify.get('/v1/artists', {
            params: {
                id: art
            }
        });

        this.setState({ artist: response.data.results });
    } */
    render() {
        return (
            <div className="main">
                <TopBar />
                <div className="ui three column grid">
                    <div className="column">
                        <Picture link="https://open.spotify.com/artist/0TcVnvKse98awlZxtUKIOk" picture="https://imagens3.ne10.uol.com.br/blogsne10/jamildo/uploads//2018/05/1f4cddb205d58dfe0ef9584f5cd94d53.jpg"
                        name="Alcymar Monteiro"
                        textAlt="Foto Alcymar Monteiro"
                        linkName="https://open.spotify.com/artist/0TcVnvKse98awlZxtUKIOk"
                        />
                        <Button btnText="Like" btnValue="2,500" />
                    </div>
                    <div className="column">
                        <Picture link="https://open.spotify.com/artist/11irmEzISytQwB3G8uhC5E" picture="https://catracalivre.com.br/wp-content/uploads/2010/09/leela.jpg"
                        name="Leela"
                        textAlt="Foto Leela"
                        linkName="https://open.spotify.com/artist/11irmEzISytQwB3G8uhC5E"
                        />
                        <Button btnText="Like" btnValue="4,000"/>
                    </div>
                    <div className="column">
                        <Picture link="https://open.spotify.com/artist/2UhA8yc1DpFfkutXq5lMah"
                        picture="http://vtb.r7.com/399568/2017/05/12/59159da79aab4ecc8e0014a6/b3ee25ddb74041578a7b331ee5ea7ff4__Ney_Alves_anima_o_Bom_D__deste_s_abdo__13__thumb_thumb.jpg"
                        name="Ney Alves" 
                        textAlt="Foto Ney Alves"
                        linkName="https://open.spotify.com/artist/2UhA8yc1DpFfkutXq5lMah"
                        />
                        <Button btnText="Like" btnValue="1,500"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;