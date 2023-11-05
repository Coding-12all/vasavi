import imgab from './img36.png';
import imgpic from './flag.png'
function Location(){
    return(
        <>
        
     
     <div id="loc">
      <a>location</a>
     </div>

      <div id="locpara">
      <p>Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of<br/> <a id="lcon">communication have a stable relationship with these words, but what is it.</a></p>
     </div> 
     <div id="lbor">
       <a id='textbor'>ENQUIRE NOW</a> 
       <div id="func">
         <h1 id="fte"> Your Full Name</h1>
       </div>
       <div id="func1">
       <h1 id="funsmall">(012) 345 6789</h1>
         <div id="smallfun">
         
          <select id="se">
            <options><img src={imgpic} alt=""/></options>
          </select>
         </div>
       </div>
       <div id="func2">
         <h1 id="fte1"> Your Email Id</h1>
       </div>
       <button id="funbtn">Submit</button>
     </div>
     <div >
      <img id="lmap"src={imgab} alt=""/>
     </div>
    </>
    )
    
}
export default Location