import React, {Component} from 'react';
import '../../css/Corporate.css';

class Corporate extends Component {
   render() {
      return(
         <div className='info'>
            <div className="info__inner">
               <h1>Corporate Information</h1>

               <p>The Rockstar Games label was founded in 1998 to create the most innovative and progressive interactive entertainment. It is a wholly owned subsidiary of <a href="http://www.take2games.com/">Take-Two Interactive Software, Inc.</a></p>

               <p>PLEASE NOTE: Rockstar Games welcomes input from the gaming community. However, any submissions to Rockstar Games of any nature whatsoever, whether through this site or otherwise, and whether via electronic or other mean, become the sole and exclusive property of Rockstar Games, which shall have full right, title and interest thereto, including under copyright, in all media now existing or hereafter created, and without any obligation to account or make any payment to the submitter for any use thereof. No purported reservation of rights incorporated in or accompanying any submission shall have any force or effect. By making a submission to Rockstar Games, you hereby agree to all of the foregoing.</p>

               <p>©2016 Take-Two Interactive Software, Inc. All Rights Reserved.</p>
            </div>
         </div>
      );
   }
}
export default Corporate;