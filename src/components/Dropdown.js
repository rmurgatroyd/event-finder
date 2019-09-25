import React, {Component} from 'react';

class Dropdown extends Component{
  constructor(props){
    super(props);

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event){
    event.preventDefault();

    this.setState({showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.showMenu}>
          Show Menu
        </button>

        {this.state.showMenu
        ? (
          <div className = "menu">
            <button>Item 1</button>
            <button>Item 2</button>
            <button>Item 3</button>
          </div>
        )
        : (null)
      }
      </div>
    )
  }
}

export default Dropdown
