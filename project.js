 import bimg from './img33.png'
 import cimg from './img34.png'
 import dimg from './img35.png'
//  import dimg from './img35.png'

function Project (){
    return(
        <>
              <div id="proj">
                  <a>Our Other projects</a>
              </div>
              <div id='ppara'>
                <p>
                Lorem ipsum dolor sit amet. The graphic and typographic operators know this well, in reality all the professions dealing with the universe of<br/><a id="pconv"> communication have a stable relationship with these words, but what is it.</a>
                </p>
              </div>
              <div id="licon">

              </div>
                   
              <div id="bid">
                   <img  src={bimg} alt=""/>
                   <p id="bpara" >Vasavi Crown East<br/>
                     <b id="btp"> Uppal, Hyderabad</b></p>
              </div>
              <div id="cid">
                   <img  src={cimg} alt=""/>
                   <p id="cpara" >Vasavi Sarovar<br/>
                     <b id="ctp">Kukatpally, Hyderabad</b></p>
              </div>
              <div id="did">
                   <img  src={dimg} alt=""/>
                   <p id="dpara" >Vasavi Skyla<br/>
                     <b id="dtp">Hitech city, Hyderabad</b></p>
              </div> 

        </>
    )
}
export default Project





