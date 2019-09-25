import React, {Component} from 'react';

class Form extends Component {

state = {
  city: '',
  category: '',
  subcategory: '',
}

  onChangeHandler = e => {

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });

  };

  componentDidUpdate(prevProps, prevState){
  if(prevState.category!==this.state.category)
    {this.props.getSubCategories(this.state.category)};
  }

  render(){
    let subcat;
    if(this.state.category!==''){

      subcat =
      <select
          className="dropdown"
          name="subcategory"
          onChange={this.onChangeHandler}
        >
          <option value="">Select Subcategory</option>
          {this.props.subcategories.map(subcategory => (
                <option
                  key={subcategory.id}
                  value={subcategory.id}

                >
                  {subcategory.name_localized}
                </option>
              ))};

        </select>
    }

    return(
      <form className="form-container" onSubmit={e => {
                e.preventDefault();
                this.props.getEvents(this.state);

              }}>

<input className="city-input" type="text" name="city" placeholder="Location..." onChange={this.onChangeHandler} />
<div>
  <select
    className="dropdown"
    name="category"
    onChange={this.onChangeHandler}
  >
    <option value="">Select Category</option>
    {this.props.categories.map(category => (
          <option
            key={category.id}
            value={category.id}

          >
            {category.name_localized}
          </option>
        ))};

  </select>
</div>
<div>{subcat}</div>
<div>
  <input
    type="submit"
    className="search-button"
    value="Search"
  />
</div>
</form>
    )
  }
}

export default Form
