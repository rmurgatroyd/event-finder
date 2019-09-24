import React, {Component} from 'react';


class Checkboxes extends Component {


  render(){
    return (
      <form className="filter-form">
        <h3 className = "filter-header">Filters</h3>
          <div className = "form-list">

          <label>
          <input type="checkbox" name="category" value="3017" onChange={ e => {this.props.allFilterClickListener(e, "subcategory_id")}}/>Rock</label>
          <label>
          <input type="checkbox" name="category" value="3003" onChange={ e => {this.props.allFilterClickListener(e, "subcategory_id")}}/>Classical
          </label>

          </div>
      </form>
    )
  }
}

export default Checkboxes
