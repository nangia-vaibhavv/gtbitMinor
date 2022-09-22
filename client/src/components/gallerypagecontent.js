import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';
import '../style/galpage.css';
import mats from './mats';








class GalleryPageContent extends Component {
  render() {
    return (

      <div className="galpage">

<div class="container">
        


   { mats.map((mat) =>
               

        <div className="Box">
            <div className="FlipBox">
                <div className="Front">
                    <img src={mat.src} key={mat.id}/>
                </div>
                <div className="Back">
                    <div>
                   
                    <p>
                       {mat.content}
                    </p>
                    <a href="#">CUSTOMER REVIEW</a>
                    </div>
                </div>
            </div>
        </div>

    ) }

       
     </div>

 </div>


     

      
    );   
  }
}
      
    

export default GalleryPageContent;




