
import pic1 from './img2.png';
import pic2 from './img8.png';
import pic3 from './imges.png';
import pic4 from './imges1.png';
import pic5 from './imges2.png'
function Image(){
    return(
        <div>
              <img id="img1" src= {pic1} alt=""/>
              <div id="box">
                 <div id='inbox'> 
                     
                 


                 <a id='tea'>ENQUIRE NOW</a> 
                 <div id="fbox1">
         <h1 id="ftebox"> Your Full Name</h1>
       </div>
       <div id="fbox2">
       <h1 id="funsmall1">(012) 345 6789</h1>
         <div id="smallfun1">
         
          
         </div>
       </div>
       <div id="funbox3">
         <h1 id="ftebox1"> Your Email Id</h1>
       </div>
       <button id="funbtn1">Submit</button>
     


























                     
                    
                     </div> 
                     <div id="content">
                        <a id="c1">Should you really</a> 
                        <a id="c2">Invest in real estate?</a>
                         
                     </div>
                     <div id="sc">
                              <a >Check if realestate is for you</a>
                     </div>
                     <div id="boox">
                     <img src={pic2} id="boox-img" alt=""/>
                     <h1 id="para1">Property rates increased<br/>   by an average of 15.1%<br/> YoY</h1>
                      </div>
                      <div id="boox1">
                     <img src={pic3} id="boox1-img" alt=""/>
                     <h1 id="para2">Small, big or large,<br/>there's an investment<br/> for everyone</h1>
                      </div>

                      <div id="boox2">
                     <img src={pic4} id="boox2-img" alt=""/>
                     <h1 id="para3">Benefit of a stable cash<br/>flow, profitable returns <br/> and other tax advantages</h1>
                      </div>

                      <div id="boox3">
                     <img src={pic5} id="boox3-img" alt=""/>
                     <h1 id="para4">Risks associated with<br/>investments are minimal <br/> compared to stock market</h1>
                      </div>
                      <button id="btn">Know More</button>
                       
                     

              </div>
        </div>
    )
}
export default Image