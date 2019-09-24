import React, {Component} from 'react';
import Form from './components/Form';
import Events from './components/Events';
import Title from './components/Title';
import axios from 'axios';
// import Dropdown from './components/Dropdown';

class App extends Component {
constructor(props){
  super(props);

  this.state={
    events: [],
    categories: [],
    subcategories: [],
    error: undefined,
  }
}




  getEvents = async params => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=${params.city}&categories=${params.category}&subcategories=${params.subcategory}&sort_by=date&token=BHNCE6DGNBZLUHABNM2H`;
      try{
        const response = await axios.get(url);
        const { events } = response.data;
        console.log(events)
          if(events.length>0){
            this.setState({ events: events,
                            error: "",
                          })} else {
            this.setState({ events: events,
                            error: "Sorry, there are currently no events listed" })}
          }
      catch(err){
          this.setState({ events: [],
                          error: "Please enter a valid location",
                        })
                      }

  };

  componentDidMount() {
  this.getCategories();
}

getCategories = async () => {
  let url = `https://www.eventbriteapi.com/v3/categories/?token=BHNCE6DGNBZLUHABNM2H`;

  let response = await axios.get(url);
  const { categories } = response.data;

  this.setState({
    categories: categories
  });
  console.log(this.state.categories)
};

getSubCategories = async categ => {
  if(categ!==''){
  let url = `https://www.eventbriteapi.com/v3/categories/${categ}/?token=${TOKEN HERE}`;

  let response = await axios.get(url);
  const { subcategories } = response.data;
console.log(subcategories)
  this.setState({
    subcategories: subcategories
  });
  console.log(this.state.subcategories)
}
};


render(){


  return (
    <div className="App">
<Title title="Event Finder" />
<Form getEvents={this.getEvents} getSubCategories={this.getSubCategories} categories={this.state.categories} subcategories={this.state.subcategories}/>
<Events events={this.state.events} error={this.state.error} />

    </div>
  )};
}

export default App;
