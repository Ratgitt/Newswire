import React, {Component} from 'react';
import NewsItem from './NewsItem';
import news1 from './news1/news1.jpg';
import news2 from './news2/news2.jpg';
import news3 from './news3/news3.jpg';
import news4 from './news4/news4.jpg';
import '../../css/MainNews.css';

// class MainNews extends Component {
//    render() {
//       return(
//          <div className="main-news">
//             {/* <button className="main-news__goToNewswire">Newswire</button> */}
//             <div className="main-news__goToNewswire">Newswire</div>
//             <div className="main-news__block">

//                <NewsItem onTabChange={this.props.onTabChange} gameName='GTA Online' date='December 12, 2023' title='GTA Online: The Chop Shop Now Available' imageSrc={news1} newsNumber='news1'/>
//                <NewsItem onTabChange={this.props.onTabChange} gameName='Rockstar Games' date='December 14, 2023' title='Introducing GTA RP Week on Twitch' imageSrc={news2} newsNumber='news2'/>
//                <NewsItem onTabChange={this.props.onTabChange} gameName='GTA Online' date='December 15, 2023' title='DāM-FunK Presents The Music of Grand Theft Auto Online Original Score' imageSrc={news3} newsNumber='news3'/>
//                <NewsItem onTabChange={this.props.onTabChange} gameName='GTA Online' date='December 12, 2023' title='GTA+ Members Get Access to the New Vinewood Club Garage, a Free Declasse Impaler LX, and Much More' imageSrc={news4} newsNumber='news4'/>
//                <NewsItem onTabChange={this.props.onTabChange} gameName='GTA Online' date='December 12, 2023' title='GTA Online: The Chop Shop Now Available' imageSrc={news1} newsNumber='news1'/>
//                <NewsItem onTabChange={this.props.onTabChange} gameName='Rockstar Games' date='December 14, 2023' title='Introducing GTA RP Week on Twitch' imageSrc={news2} newsNumber='news2'/>
               
//             </div>
//             <button id="viewButton" className="vButton">
//                <div className="vButton__text">View More</div>
//                <div className="vButton__line"></div>
//             </button>
//          </div>
//       );
//    }
// }

const allNews = [
   { gameName: 'GTA Online', date: 'December 12, 2023', title: 'GTA Online: The Chop Shop Now Available', imageSrc: news1, newsNumber: 'news1' },
   { gameName: 'Rockstar Games', date: 'December 14, 2023', title: 'Introducing GTA RP Week on Twitch', imageSrc: news2, newsNumber: 'news2'},
   { gameName: 'GTA Online', date: 'December 15, 2023', title: 'DāM-FunK Presents The Music of Grand Theft Auto Online Original Score', imageSrc: news3, newsNumber: 'news3'},
   { gameName: 'GTA Online', date: 'December 14, 2023', title: 'GTA+ Members Get Access to the New Vinewood Club Garage, a Free Declasse Impaler LX, and Much More', imageSrc: news4, newsNumber: 'news4'},
   { gameName: 'GTA Online', date: 'December 12, 2023', title: 'GTA Online: The Chop Shop Now Available', imageSrc: news1, newsNumber: 'news1' },
   { gameName: 'Rockstar Games', date: 'December 14, 2023', title: 'Introducing GTA RP Week on Twitch', imageSrc: news2, newsNumber: 'news2'},
   { gameName: 'GTA Online', date: 'December 15, 2023', title: 'DāM-FunK Presents The Music of Grand Theft Auto Online Original Score', imageSrc: news3, newsNumber: 'news3'},
   { gameName: 'GTA Online', date: 'December 14, 2023', title: 'GTA+ Members Get Access to the New Vinewood Club Garage, a Free Declasse Impaler LX, and Much More', imageSrc: news4, newsNumber: 'news4'},
   { gameName: 'GTA Online', date: 'December 12, 2023', title: 'GTA Online: The Chop Shop Now Available', imageSrc: news1, newsNumber: 'news1' },
   { gameName: 'Rockstar Games', date: 'December 14, 2023', title: 'Introducing GTA RP Week on Twitch', imageSrc: news2, newsNumber: 'news2'},
   { gameName: 'GTA Online', date: 'December 15, 2023', title: 'DāM-FunK Presents The Music of Grand Theft Auto Online Original Score', imageSrc: news3, newsNumber: 'news3'},
   { gameName: 'GTA Online', date: 'December 14, 2023', title: 'GTA+ Members Get Access to the New Vinewood Club Garage, a Free Declasse Impaler LX, and Much More', imageSrc: news4, newsNumber: 'news4'},
   { gameName: 'GTA Online', date: 'December 12, 2023', title: 'GTA Online: The Chop Shop Now Available', imageSrc: news1, newsNumber: 'news1' },
   { gameName: 'Rockstar Games', date: 'December 14, 2023', title: 'Introducing GTA RP Week on Twitch', imageSrc: news2, newsNumber: 'news2'},
   // Добавь остальные новости
 ];

class MainNews extends Component {
   constructor(props) {
     super(props);
     this.state = {
       visibleNewsCount: 6, // Изначально показывать 3 новости
     };
   }
 
   handleViewMoreClick = () => {
     // Получаем общее количество новостей
   //   const allNews = [
   //     { gameName: 'GTA Online', date: 'December 12, 2023', title: 'GTA Online: The Chop Shop Now Available', imageSrc: 'news1', newsNumber: 'news1' },
   //     // Добавь остальные новости
   //   ];
     const totalNewsCount = allNews.length;
 
     // Вычисляем новое количество видимых новостей
     this.setState((prevState) => ({
       visibleNewsCount: Math.min(prevState.visibleNewsCount + 6, totalNewsCount),
     }));
   };
 
   render() {
     const { visibleNewsCount } = this.state;
   //   const allNews = [
   //     { gameName: 'GTA Online', date: 'December 12, 2023', title: 'GTA Online: The Chop Shop Now Available', imageSrc: news1, newsNumber: 'news1' },
   //     // Добавь остальные новости
   //   ];
 
     // Отображаем только указанное количество новостей
     const visibleNews = allNews.slice(0, visibleNewsCount);
 
     return (
       <div className="main-news">
         <div className="main-news__goToNewswire">Newswire</div>
         <div className="main-news__block">
           {visibleNews.map((news) => (
             <NewsItem
               key={news.newsNumber}
               onTabChange={this.props.onTabChange}
               gameName={news.gameName}
               date={news.date}
               title={news.title}
               imageSrc={news.imageSrc}
               newsNumber={news.newsNumber}
             />
           ))}
         </div>
         <button id="viewButton" className="vButton" onClick={this.handleViewMoreClick}>
           <div className="vButton__text">View More</div>
           <div className="vButton__line"></div>
         </button>
       </div>
     );
   }
 }

export default MainNews;