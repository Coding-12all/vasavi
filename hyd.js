  import img502 from './img5.png'
  import img503 from './imges3.png'
  import img504 from './imges4.png'
  import img505 from './imges5.png'
  import img506 from './imges6.png'
  function Hyd(){
    return(
        <>
        <div >
             <img id="img6"src={img502} alt=""/>
        </div>
        <div id="txt">
            <a >Why invest in india? <br/><b id="txt1"> Why in Hyderabad?</b></a>
        </div>

        <div id="bb">
           <img id="bbimg" src={img503} alt=""/>
           <h1 id="p1">11% rise in demand in<br/> Hyderabad's residental<br/> market</h1>
        </div>

        <div id="bb1">
           <img id="bbimg1" src={img504} alt=""/>
           <h1 id="p2">Hyderabad's real estate market<br/> ranks highest in competition with<br/> 8 major cities.</h1>
        </div>

        <div id="bb3">
           <img id="bbimg3" src={img505} alt=""/>
           <h1 id="p3">Migrants prefer this <br/>progressive city and make up <br/>to 24% of the population.</h1>
        </div>

        <div id="bb4">
           <img id="bbimg4" src={img506} alt=""/>
           <h1 id="p4">Telangana registered 31.44% <br/>growth in IT exports in<br/> 2022-23</h1>
        </div>

        <div >
            <button id="btn1">Chat with Us</button>
        </div>
        </>
    )
}
export default Hyd;