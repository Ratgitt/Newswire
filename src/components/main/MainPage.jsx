import React, {Component} from 'react';
import MainNews from '../news/MainNews';

class MainPage extends Component {
   render() {
      return(
         <MainNews onTabChange={this.props.onTabChange}/>
      );
   }
}

export default MainPage;