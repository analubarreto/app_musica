import "./styles.scss";
import "./styles.scss";
import React from 'react';

const TopBar = () => {
    return (
        <div className="ui menu top-bar">
            <div className="header item">
                Artistas App
            </div>
            <a className="item" href="/">
                Artistas
            </a>
            <a className="item" href="/">
                Albuns
            </a>
            <a className="item" href="/">
                Músicas
            </a>
            <a className="item" href="/">
                Estilos
            </a>
        </div>
    );
}

export default TopBar