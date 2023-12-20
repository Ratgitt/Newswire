import React, {Component} from 'react';
import MainPage from './main/MainPage';
import GamesPage from './games/GamesPage';
import NewsPage from './news/NewsPage';
import VideosPage from './videos/VideosPage';
import News1 from './news/news1/News1';
import News2 from './news/news2/News2';
import News3 from './news/news3/News3';
import News4 from './news/news4/News4';
import Corporate from './footerPages/Corporate';
import Privacy from './footerPages/Privacy';
import Contact from './footerPages/Contact';

class Content extends Component {
   render() {

      const { selectedTab } = this.props;

      return(
         <main className='content'>
            <div className="container">
               {selectedTab === 'mainPage' && <MainPage onTabChange={this.props.onTabChange}/>}
               {selectedTab === 'gamesPage' && <GamesPage onTabChange={this.props.onTabChange}/>}
               {selectedTab === 'newsPage' && <NewsPage onTabChange={this.props.onTabChange}/>}
               {selectedTab === 'videosPage' && <VideosPage onTabChange={this.props.onTabChange}/>}


               {/* NEWS */}
               {selectedTab === 'news1' && <News1 onTabChange={this.props.onTabChange}/>}
               {selectedTab === 'news2' && <News2 onTabChange={this.props.onTabChange}/>}
               {selectedTab === 'news3' && <News3 onTabChange={this.props.onTabChange}/>}
               {selectedTab === 'news4' && <News4 onTabChange={this.props.onTabChange}/>}


               {selectedTab === 'corporatePage' && <Corporate/>}
               {selectedTab === 'privacyPage' && <Privacy/>}
               {selectedTab === 'contactPage' && <Contact/>}
            </div>
         </main>
      );
   }
}

export default Content;