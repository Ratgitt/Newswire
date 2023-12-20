import React, {Component} from 'react';
import '../../css/NewsItem.css';

class NewsItem extends Component {

   constructor(props) {
      super(props);

      this.state = {
         gameName: props.gameName,
         date: props.date,
         title: props.title,
         imageSrc: props.imageSrc,
         newsNumber: props.newsNumber,
      };
   }

   handleTabClick = (tab) => {
      this.props.onTabChange(tab);
   };

   render() {
      return(
         <button onClick={() => this.handleTabClick(this.state.newsNumber)} className='newsItem'>
            <img className='newsItem__image' src={this.state.imageSrc} alt="." />
            <div className="newsItem__info">
               <div className="newsItem__name-date">
                  <div className='newsItem__game-name'>{this.state.gameName}</div>
                  <div className="newsItem__date">{this.state.date}</div>
               </div>
               <div className="newsItem__title">
                  <div>{this.state.title}</div>
               </div>
            </div>
         </button>
      );
   }
}

export default NewsItem;