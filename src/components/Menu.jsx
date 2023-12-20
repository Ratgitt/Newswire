import React, {Component} from 'react';
import rockstarLogo from '../img/header/Menu/logo.svg';
import searchIcon from '../img/header/Menu/search.svg';
import profileIcon from '../img/header/Menu/profile.svg';
import '../css/Menu.css';

class Menu extends Component {

   constructor(props) {
      super(props);
      this.state = {
        activeTab: 'mainPage',
      };
   }
  
   handleTabClick = (tab) => {
      this.setState({ activeTab: tab });
      this.props.onTabChange(tab);
   };

   render() {
      return (
         <div className='menu-block'>
            <div className='container'>
               <div className='menu'>
                  {/* Logo */}
                  <div className='menu__logo'>
                     <button onClick={() => this.handleTabClick('mainPage')} className='menu__button'>
                        <img className='menu__logo-image-before' src={rockstarLogo} alt='logo'></img>
                        <img className='menu__logo-image-main' src={rockstarLogo} alt='logo'></img>
                        <img className='menu__logo-image-after' src={rockstarLogo} alt='logo'></img>
                     </button>
                  </div>

                  {/* Navigation */}
                  <div className='menu__nav'>
                     {/* <button onClick={() => this.handleTabClick('gamesPage')} className='menu__games'> <span>Games</span> </button>
                     <button onClick={() => this.handleTabClick('newsPage')} className={`menu__news ${this.state.activeTab === 'newsPage' ? 'active' : ''}`}> <span>Newswire</span> </button>
                     <button onClick={() => this.handleTabClick('videosPage')} className='menu__videos' > <span>Videos</span> </button> */}
                  </div>

                  {/* Info */}
                  <div className='menu__info'>
                     <button className='menu__search'>
                        <img className='menu__search-image' src={searchIcon} alt='search'></img>
                     </button>
                     <button className='menu__profile'>
                        <img className='menu__profile-image' src={profileIcon} alt='profile'></img>
                     </button>
                  </div>
               </div>

            </div>
         </div>
      );
   }
}

export default Menu;