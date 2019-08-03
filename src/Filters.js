import React from 'react';

class Filters extends React.Component {

    render () {
        return (
            <div className='filters'>
            <form role='filters-print-type'>
                <label for='print-type'>Print Type:</label>
                <select name='print-type' id='print-type'
       aria-label='Search through books by print type'>
                    <option value='All'>All</option>
                    <option value='Paperback'>Paperback</option>
                    <option value='Hardcover'>Hardcover</option>
                 </select>
                
            </form>
            </div>
        );
    }
}

export default Filters;