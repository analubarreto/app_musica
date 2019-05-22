import React from 'react';

class Picture extends React.Component {
    render() {
        return (
            <div className="ui fluid card cartao">
                <div className="image">
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                        <img src={this.props.picture} alt={this.props.textAlt} className="foto"/>
                    </a>
                </div>
                <div className="content">
                    <a className="header" href={this.props.linkName}>{this.props.name}</a>
                </div>
            </div>
        );
    }
}

export default Picture