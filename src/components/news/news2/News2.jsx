import React, {Component} from 'react';
import '../../../css/NewsDesign.css';
import topImage from './topImage.jpg';

class News2 extends Component {

   render() {
      return(
         <div className="article">
            <img className='article__top-image' src={topImage} alt="." />

            <div className="article__content">
               <h1 className="article__title">Introducing GTA RP Week on Twitch</h1>
               <div className="article__date">December 14, 2023</div>

               <p>Earlier this year, the Cfx.re team and technology responsible for powering the FiveM and RedM platforms, <a href="https://www.rockstargames.com/newswire/article/8971o8789584a4/roleplay-community-update">officially became a part of Rockstar Games</a>. To celebrate the vibrant role-playing community across these platforms and beyond, we’re excited to announce GTA RP Week.</p>

               <p>From December 15 – 21, Rockstar Games is teaming up with Twitch on the biggest subscription giveaway in Twitch’s history, gifting more than 600,000 subs in the GTAV category. RP streamers from around the world will also be highlighted and showcased on Twitch’s front page, while select viewers will receive a Sub Token to subscribe for free to their favorite GTA RP streamer.</p>

               <p>Selected recipients receiving a Sub Token will get an email, push notification, and on-site web notification from Twitch with more information.</p>

               <p>Visit <a href="https://www.twitch.tv/">Twitch.tv</a> anytime between December 15 – 21 to see members of the GTA RP community from around the world featured front and center on the Twitch homepage.</p>
            </div>
         </div>
      );
   }
}

export default News2;