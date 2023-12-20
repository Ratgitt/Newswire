import React, {Component} from 'react';
import '../css/Header.css';
import Modal from './Modal';
import Menu from './Menu';

class Header extends Component {

   render() {
      return (
         <header className='header'>
            <Modal/>
            <Menu onTabChange={this.props.onTabChange}/>
         </header>
      )
   }
}

export default Header;