import React from 'react';

class Search extends React.Component {
    state = { text: '' }

    render(props) {
        return (
            <div className="item">
                <div className="ui icon input">
                    <input type="text" onChange={ (e) => console.log(e.target.value) } placeholder="Search..."/>
                    <i className="search link icon" />
                </div>
            </div>
        );
    }
}

export default Search