import React from 'react';

class Filters extends React.Component {

    render () {
        return (
            <div className='filters'>
            <form>
                <label htmlFor='print-type'>Print Type:</label>
                <select name='print-type'>
                    <option value='All'>All</option>
                    <option value='Books'>Books</option>
                    <option value='Magazines'>Magazines</option>
                 </select>
            
                 <label htmlFor='book-type'>Book Type:</label>
                <select name='book-type'>
                    <option value='no-filter'>No Filter</option>
                    <option value='Free e-books'>Free e-books</option>
                    <option value='Paid e-books'>Paid e-books</option>
                </select>
            </form>
            </div>
        );
    }
}


export default Filters;