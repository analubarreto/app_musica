import React from 'react';

const Picture = props => {
    return (
        <div className="ui fluid card">
            <div className="image">
                <a href="/">{props.pic}</a>
            </div>
            <div className="content">
                <a className="header" href="/">{props.name}</a>
            </div>
        </div>
    );
}

export default Picture