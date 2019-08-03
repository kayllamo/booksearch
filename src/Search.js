import React from 'react';

class Search extends React.Component {

    render () {
        return (
            <div className='searchbox'>
            <form role='searchbox'>
                <label for='book-search'>Search:</label>
                <input type='search' id='book-search' placeholder='Harry Potter'
       aria-label='Search through books'></input>
                <button>Search</button>
            </form>
            </div>
        );
    }
}

export default Search;