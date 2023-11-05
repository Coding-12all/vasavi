import img50 from './Lock.png';
import img51 from './Lock (1).png';
function Prices(){
    return(
        <>
        <div id="bmodel">
               <div id="bcot">
               <a>Our Prices</a>
               </div>
               <div id="bdpara">
               <p>Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the professions dealing with the universe of <br/><a id="coms">communication have a stable relationship with these words, but what is it.</a></p>
               </div>

               <div id ="custom-layout">
                 <div class="content">
                    <p id="p123">2BHK 1325 sq.ft</p>
                              <img id="img123" src={img50} alt="" />
                            <button id="b123">Unlock the Price</button>
                            
  </div>
</div>

<div id ="custom-layout1">
                 <div class="content">
                    <p id="p1234">3BHK 2623 sq.ft</p>
                              <img id="img1234" src={img51} alt="" />
                            <button id="b1234">Unlock the Price</button>
                            
  </div>
</div>

                 <div id ="custom-layout3">
                 <div class="content">
                    <p id="p1233">4BHK 3426 sq.ft</p>
                              <img id="img1233" src={img50} alt="" />
                            <button id="b1233">Unlock the Price</button>
                            
  </div>
</div>
                 <button id="btn123">Request A Call Back</button>

        </div>
        </>
    )
}
export default Prices
// import React, { useState } from 'react';

// function App() {
//   const [highlighted, setHighlighted] = useState(1);

//   const handleBoxClick = (boxNumber) => {
//     setHighlighted(boxNumber);
//   };

//   return (
//     <div>
//       <div className={`box ${highlighted === 1 ? 'highlight' : ''}`} onClick={() => handleBoxClick(1)}>
//         Box 1
//       </div>
//       <div className={`box ${highlighted === 2 ? 'highlight' : ''}`} onClick={() => handleBoxClick(2)}>
//         Box 2
//       </div>
//       <div className={`box ${highlighted === 3 ? 'highlight' : ''}`} onClick={() => handleBoxClick(3)}>
//         Box 3
//       </div>
//     </div>
//   );
// }

// export default App;
