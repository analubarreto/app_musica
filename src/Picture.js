import React from 'react';

const Picture = props => {
    return (
        <div className="ui fluid card">
            <div className="image">
                {props.img}
            </div>
            <div className="content">
                <a className="header">{props.name}</a>
            </div>
        </div>
    );
}

export default Picture