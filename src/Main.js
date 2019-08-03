import React from 'react';
import Search from './Search';
import Filters from './Filters';
import ListResults from './ListResults';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          printType: [],
          bookType: []
        };
      }

render () {
    return (
        <section className='main' role='main'>
            <Search />
            <Filters />
            <ListResults />
        </section>
    )
}
}

export default Main;