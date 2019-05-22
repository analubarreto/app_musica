import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <div className="ui labeled button btn" tabIndex="0">
                <div className="ui button">
                    <i className="heart icon" /> {this.props.btnText}
                </div>
                <a className="ui basic label">{this.props.btnValue}</a>
            </div>
        );
    }

}

export default Button