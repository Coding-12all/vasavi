import img508 from'./layer.png'
import img509 from'./Layer_1.png'
import img510 from'./Layer_1 (1).png'
import img511 from'./Layer_1 (2).png'

function Textimg(){
    return(
        <>
           <div id="tname">
            <a>Hyderabad's real estate growth in the last 3 year</a>
           </div>
           <div id="tiname">
            <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of<br/><a id="conv">communication have a stable relationship with these words, but what is it.</a></p>
           </div>

           <div id="cc">
            <img id="ccimg" src={img508}alt=""/><br/>
            <p id="ccp">
                Atleast <br/><b id="num">25%-45%</b><br/>pack in average rental<br/> spends
            </p>
           </div>

           <div id="cc1">
            <img id="ccimg1" src={img509}alt=""/><br/>
            <p id="ccp1">
               <b id="num1">200% </b><br/>rapid increase in<br/> investments in
            </p>
           </div>

           <div id="cc2">
            <img id="ccimg2" src={img510}alt=""/><br/>
            <p id="ccp2">
               <b id="num2">26% </b>YoY<br/>growth in property<br/> Registrations in july 2023
            </p>
           </div>

           <div id="cc3">
            <img id="ccimg3" src={img511}alt=""/><br/>
            <p id="ccp3">
               <b id="num3">25% </b><br/>increase in price of 1<br/>sq.ft in real estate
            </p>
           </div>

        </>
    )
}
export default Textimg