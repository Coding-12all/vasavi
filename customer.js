import imga1 from './img30.png';
import imga2 from './img31.png';

function Customer(){
    return(
        <>

            <div id="cust1">
                <a>What Our Customer Say</a>
            </div>
            <div id="customer1">
                 <img id="csimg" src={imga1}alt=""/>
                 <a id="cstext">
                 Lorem ipsum dolor
                 </a>
                 <p id="cspara">
                 Lorem ipsum dolor sit amet.<br/> The graphic and typographic<br/> operators know this well, in<br/> reality all the professions<br/> dealing with the universe of<br/> communication.
                 </p>
            </div>

            <div id="customer2">
                 <img id="csimg1" src={imga1}alt=""/>
                 <a id="cstext1">
                 Lorem ipsum dolor
                 </a>
                 <p id="cspara1">
                 Lorem ipsum dolor sit amet.<br/> The graphic and typographic<br/> operators know this well, in<br/> reality all the professions<br/> dealing with the universe of<br/> communication.
                 </p>
            </div>


            <div id="customer3">
                 <img id="csimg" src={imga2}alt=""/>
                 <a id="cstext2">
                 Lorem ipsum dolor
                 </a>
                 <p id="cspara2">
                 Lorem ipsum dolor sit amet.<br/> The graphic and typographic<br/> operators know this well, in<br/> reality all the professions<br/> dealing with the universe of<br/> communication.
                 </p>
            </div>
        </>
    )
}
export default Customer