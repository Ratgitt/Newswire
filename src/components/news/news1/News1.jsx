import React, {Component} from 'react';
import '../../../css/NewsDesign.css';
import topImage from './news1.jpg';
import inner1 from './inner1.jpg';
import inner2 from './inner2.jpg';

class News1 extends Component {

   render() {
      return(
         <div className="article">
            <img className='article__top-image' src={topImage} alt="." />

            <div className="article__content">
               <h1 className="article__title">GTA Online: The Chop Shop Now Available</h1>
               <div className="article__date">December 12, 2023</div>

               <p>Collaborate with illustrious Liberty City real estate mogul and auto enthusiast Yusuf Amir on his newest venture, stealing the most coveted vehicles in Los Santos across a series of daring robberies in <span>GTA Online: The Chop Shop</span>.</p>

               <p>Today’s update also includes a new illicit business property, an assortment of new vehicles, new Drift Races, and much more.</p>

               <img className='article__inner-image' src={inner1} alt="." />

               <div className="article__subtitle">
                  The Salvage Yard
               </div>

               <p>Behind the peeling facade of Red’s Auto Parts lies the untapped potential of a sophisticated robbery operation. Combined with your skills and Yusuf’s eye for exotic automobiles, the new Salvage Yard business serves as the perfect front. It’s low-key enough not to attract suspicion from the authorities, yet equipped with everything you’ll need to pull off breathtaking robberies of the most in-demand vehicles across Southern San Andreas.</p>

               <p>Answer the call from Yusuf to get started. Owning the Salvage Yard cuts you in on Yusuf and his cousin Jamal’s plans for robberies, accessible from your Salvage Yard’s Planning Wall. Each one features a special target that requires thorough planning prior to successfully boosting it.</p>

               <img className='article__inner-image' src={inner2} alt="." />

               <p>Once a vehicle is acquired, put your chop shop’s lifts to good use and break down the vehicles to be salvaged for valuable parts over time. Instant gratification is also always an option: sell off stolen vehicles for a lump sum by safely dropping them off at the docks to be shipped in a cargo container to Yusuf. Try not to scratch the paint job or wheel-wells on your way there.</p>

               <p>There are five Salvage Yard properties to choose from, whether you’re operating remotely from Paleto Bay or getting valuable, central real estate in Strawberry. The Salvage Yard also features optional upgrades including Trade Rates, which extend your chop shop connections to a special discount when requesting destroyed vehicles from Mors Mutual or repairing vehicles in any custom shop. Upgrade the yard with a Tow Truck, allowing you to tow designated delinquent vehicles back to the Salvage Yard for another source of auto parts.</p>
            </div>
         </div>
      );
   }
}

export default News1;