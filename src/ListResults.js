import React from 'react';

/* to view a book on Google book api 
https://www.googleapis.com/books/v1/volumes?q=search+terms

print type
GET https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey


filter by book type
GET https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey
*/

const aKey = 'AIzaSyBRLCsubEBBbxRGX6FlwL7JJeMBE3Rr3Ek';

const printType = `https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key={aKey}`;

const bookType = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key={aKey}`;




class ListResults extends React.Component {


    render () {
        return (
            <div className='ListResults'>
            
            </div>
        );
    }
}

export default ListResults;