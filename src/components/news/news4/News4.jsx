import React, {Component} from 'react';
import '../../../css/NewsDesign.css';
import topImage from './topImage.jpg';
import inner1 from './inner1.jpg';
import inner2 from './inner2.jpg';
import inner3 from './inner3.jpg';

class News4 extends Component {

   render() {
      return(
         <div className="article">
            <img className='article__top-image' src={topImage} alt="." />

            <div className="article__content">
               <h1 className="article__title">GTA+ Members Get Access to the New Vinewood Club Garage, a Free Declasse Impaler LX, and Much More</h1>
               <div className="article__date">December 12, 2023</div>

               <p>There’s so much to celebrate this holiday season in GTA Online, with the launch of <span style={{fontWeight: 'bold'}}>The Chop Shop</span> and the newest <a href="https://www.rockstargames.com/gta-plus">GTA+ Member benefits</a>, which include The Vinewood Club's latest premium offering — the 100-vehicle capacity <span style={{fontWeight: 'bold'}}>Club Garage</span>.</p>
               
               <p>Plus, hit the roads in the new Declasse Impaler LX (Muscle) that is free to GTA+ Members, and enjoy new Chameleon Paints, festive clothing, and much more as part of the premium GTA Online Membership program on PS5 and Xbox Series X|S.</p>

               <img src={inner1} alt="." className='article__inner-image'/>

               <h2>The Vinewood Club Garage</h2>

               <p>The Vinewood Club Garage is an extensive new expansion to meet the vehicular storage needs of The Vinewood Club's clientele. On top of all your garage space in existing properties, GTA+ Members now have access to the full 100 vehicle storage capacity of this new location in Pillbox Hill, right in the core of downtown Los Santos.</p>

               <p>The latest members-only perk from The Vinewood Club, you can now store up to a whopping 100 vehicles across five floors in this state-of-the-art facility. Paired with the new vehicle management menu, The Vinewood Club Garage provides the most spacious and organized vehicle storage experience to date.</p>

               <p>GTA+ Members have access to The Vinewood Club Garage's full storage capacity, including the ability to add and remove vehicles via the Interaction Menu. You’ll retain permanent access to all vehicles housed in the garage, however storage of any additional vehicles will be suspended if your GTA+ subscription has lapsed.</p>

               <img src={inner2} alt="." className='article__inner-image'/>

               <h2>Claim the New Declasse Impaler LX</h2>

               <p>Pull up and flex in the new Declasse Impaler LX, a thick, performance-first muscle car that recalls a grittier time in Los Santos’ history. Ditch the bells and whistles and embrace the open road in this purist’s rendition of a classic.</p>

               <p>GTA+ Members can claim the Declasse Impaler LX for free right at The Vinewood Car Club or via Southern San Andreas Super Autos’ in-game website. GTA+ Members can also claim the Green Anime Geometry livery for the Declasse Impaler LX — available at any LS Customs, Auto Shop, or Vehicle workshop.</p>

               <img src={inner3} alt="." className='article__inner-image'/>

               <h2>New Chameleon Paint and Chameleon Wheel Paint</h2>

               <p>Make others envious by taking eligible vehicles to any Los Santos Customs, Auto Shop or Vehicle Workshop and claiming the <span>Pastel Green Pearl Chameleon Paint</span>. Plus, adorn your rims with the <span>Red Rainbow Chameleon Wheel Paint</span> to complete the jolly ensemble.</p>
            </div>
         </div>
      );
   }
}

export default News4;