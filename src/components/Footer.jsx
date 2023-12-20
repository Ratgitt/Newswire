import React, {Component} from 'react';
import '../css/Footer.css';

class Footer extends Component {

   handleTabClick = (tab) => {
      this.props.onTabChange(tab);
   };

   render() {
      return(
         <footer className="footer">
            <div className="container">
               <div className="footer__contacts">
                  <div className="footer__contact-block">
                     <button onClick={() => this.handleTabClick('corporatePage')} className='footer__corporate-button'>Corporate</button>
                     <button onClick={() => this.handleTabClick('privacyPage')} className='footer__privacy-button'>Privacy</button>
                     <button onClick={() => this.handleTabClick('contactPage')} className='footer__contact-button'>Contact</button>
                  </div>
                  <div className="footer__media-block">
                     <a className='footer__twitch' href="https://twitch.tv/rockstargames" target="_blank" rel="noreferrer"> </a>
                     <a className='footer__instagram' href="https://instagram.com/rockstargames" target="_blank" rel="noreferrer"> </a>
                     <a className='footer__twitter' href="https://twitter.com/rockstargames" target="_blank" rel="noreferrer"> </a>
                     <a className='footer__youtube' href="https://www.youtube.com/rockstargames" target="_blank" rel="noreferrer"> </a>
                     <a className='footer__facebook' href="https://www.facebook.com/rockstargames" target="_blank" rel="noreferrer"> </a>
                  </div>
               </div>
               <div className="footer__info">
                  <div className="footer__rockstar">
                     <p className='footer__rockstar-text'>Rockstar Games</p>
                  </div>
                  <div className="footer__cities">
                     <p>New York</p>
                     <p>London</p>
                     <p>Paris</p>
                     <p>Bogotá</p>
                  </div>
                  <div className="footer__century">
                     <p>MCMXCVIII</p>
                  </div>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;