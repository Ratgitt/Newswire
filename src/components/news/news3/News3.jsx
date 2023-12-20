import React, {Component} from 'react';
import '../../../css/NewsDesign.css';
import topImage from './topImage.jpg';

class News3 extends Component {

   render() {
      return(
         <div className="article">
            <img className='article__top-image' src={topImage} alt="." />

            <div className="article__content">
               <h1 className="article__title">DāM-FunK Presents The Music of Grand Theft Auto Online Original Score</h1>
               <h2 className="article__subtitle">Featuring Rampa, &ME, Soulwax, HEALTH, Take A Day Trip, Show Me the Body, and More</h2>
               <div className="article__date">December 14, 2023</div>

               <p><a href="https://lnk.to/GTAOOST">DāM-FunK Presents The Music of Grand Theft Auto Online Original Score</a> — a brand new album of music from across the biggest and most beloved updates from GTA Online — is now available on all major digital music services including <a href="https://open.spotify.com/album/2bhA2miYR9z7etELwRl7Us?go=1&nd=1&dlsi=cfef3b2909b04cb0">Spotify</a> and <a href="https://music.apple.com/us/album/d%C4%81m-funk-presents-the-music-of-grand-theft-auto/1717665084">Apple Music</a>.</p>

               <p>Showcasing ten years of meticulous musical curation inside the living world of GTA Online, DāM-FunK Presents The Music of Grand Theft Auto Online Original Score features score contributions from a wide array of artists, re-arranged and reimagined into 15 new songs by L.A. producer, DāM-FunK, and available on digital streaming platforms for the first time ever.</p>

               <p>From Rampa’s take on the action and suspense of The Cayo Perico Heist II to HEALTH’s industrial rock for the frantically paced Arena Wars, Soulwax’s trippy contributions to Los Santos Drug Wars, or Take A Daytrip’s atmospheric vision of vehicular Import/Export, DāM-FunK Presents The Music of Grand Theft Auto Online Original Score delivers a snapshot of the in-game musical universe, and a new way to interact with the music that has defined the GTA Online experience across the last ten years.</p>

               <p>And starting on Monday, West Coast Classics listeners are in for a special treat. To commemorate a decade of hosting Los Santos' preeminent classic hip-hop station, DJ Pooh has hidden a special mix of the album somewhere in town. You'll need to call in to West Coast Classics for clues, and also make sure to listen for some very special shoutouts from notable friends of WCC's iconic DJ to celebrate his legendary run.</p>

               <p>Also available today is <span style={{fontWeight: 'bold'}}>SOUTHSIDE</span>, a new track by BEAM and Cardo that is featured in the <a href="https://www.rockstargames.com/videos/12426">trailer</a> for GTA Online: The Chop Shop and samples Take A Daytrip’s version of Import/Export. Get it <a href="https://lnk.to/GTAOS1">here</a>.</p>
            </div>
         </div>
      );
   }
}

export default News3;