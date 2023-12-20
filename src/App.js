import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import './App.css';
import { Component } from 'react';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'mainPage', // По умолчанию главная страница
      };
   }

   handleTabChange = (tab) => {
      this.setState({ selectedTab: tab });
   };

   render() {
      return (
         <div className='app'>
            <Header className='app__header' onTabChange={this.handleTabChange}/>
   
            <Content className='app__content' onTabChange={this.handleTabChange} selectedTab={this.state.selectedTab}/>
   
            <Footer className='app__footer' onTabChange={this.handleTabChange}/>
         </div>
      );
   }
}

export default App;