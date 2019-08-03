import React from 'react';

class Search extends React.Component {

    render () {
        return (
            <div className='searchbox'>
            <form role='searchbox'>
                <label htmlFor='book-search'>Search:</label>
                <input 
                    type='search' 
                    id='book-search' 
                    placeholder='Harry Potter' 
                    value={this.props.state.search}>
                </input>
                <button>Search</button>
            </form>
            </div>
        );
    }
}

export default Search;