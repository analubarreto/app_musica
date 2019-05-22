import React from 'react';

const TopBar = () => {
    return (
        <div className="ui secondary menu top-bar">
            <div className="header item">
                Artistas App
            </div>
            <a className="active tem" href="/">
                Artistas
            </a>
            <a className="item" href="/">
                Albuns
            </a>
            <a className="item" href="/">
                Músicas
            </a>
                
        </div>
        );
}

export default TopBar