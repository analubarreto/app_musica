import React from 'react';
import Search from './Search';

const TopBar = () => {
    return (
        <div className="ui secondary menu top-bar">
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
                <div className="right menu">
                    <Search />
                </div>
            </div>
        );
}

export default TopBar