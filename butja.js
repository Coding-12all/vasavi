import React, { useState } from 'react';
import img41 from './img49.png';
import img42 from './img50.png'
import img43 from './img51.png';
import img44 from './img52.png';
import img45 from './img54.png';
import img46 from './img53.png';
import img47 from './img55.png';
import img48 from './img56.png';
function App() {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);
  const [showImage6, setShowImage6] = useState(false);
  const [showImage7, setShowImage7] = useState(false);
  const [showImage8, setShowImage8] = useState(false);
  
  const showButton1Image = () => {
    setShowImage1(true);
    setShowImage2(false); // Hide the other image
  };

  const showButton2Image = () => {
    setShowImage1(false); // Hide the other image
    setShowImage2(true);
  };

  const showButton3Image = () => {
    setShowImage3(true); // Hide the other image
    setShowImage1(false);
    setShowImage2(false);
  };
  const showButton4Image = () => {
    setShowImage4(true); // Hide the other image
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
  };
  const showButton5Image = () => {
    setShowImage5(true); // Hide the other image
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
  };
  const showButton6Image = () => {
    setShowImage6(true); // Hide the other image
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
    setShowImage5(false);
  };
  const showButton7Image = () => {
    setShowImage7(true); // Hide the other image
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
    setShowImage5(false);
    setShowImage6(false);
  };
  const showButton8Image = () => {
    setShowImage8(true); // Hide the other image
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
    setShowImage5(false);
    setShowImage6(false);
    setShowImage7(false);
  };

  return (
    <div>
      <button type="button" onClick={showButton1Image} id="btnId">
        Tower1
      </button>
      <button type="button" onClick={showButton2Image} id="btnId">
         Tower2
      </button>
      <button type="button" onClick={showButton3Image} id="btnId">
        Tower3
      </button>
      <button type="button" onClick={showButton4Image} id="btnId">
        Tower4
      </button>
      <button type="button" onClick={showButton5Image} id="btnId">
        Tower5
      </button>
      <button type="button" onClick={showButton6Image} id="btnId">
        Tower6
      </button>
      <button type="button" onClick={showButton7Image} id="btnId">
        Tower7
      </button>
      <button type="button" onClick={showButton8Image} id="btnId">
        Tower8
      </button>

      {showImage1 && (
        <img id="image1"src={img41}alt="" />
      )}
      {showImage2 && (
        <img id="image2"src={img42}alt=""/>
      )}
      {showImage3 && (
        <img id="image3"src={img43}alt="" />
      )}
      {showImage4 && (
        <img id="image4"src={img44}alt="" />
      )}
      {showImage5 && (
        <img id="image5"src={img45}alt=""/>
      )}
      {showImage6 && (
        <img id="image6"src={img46}alt=""/>
      )}
      {showImage7 && (
        <img id="image7"src={img47}alt=""/>
      )}
      {showImage8 && (
        <img id="image8"src={img48}alt=""/>
      )}
      <button id="bts">Download Brochure</button>
    </div>
    
  );
}

export default App;
// import React, { useState } from 'react';
// import img41 from './img49.png';
// import img42 from './img50.png';
// import img43 from './img51.png';
// import img44 from './img52.png';
// import img45 from './img54.png';
// import img46 from './img53.png';
// import img47 from './img55.png';
// import img48 from './img56.png';

// function App() {
//   const [towerImages, setTowerImages] = useState({
//     tower1: img41,
//     tower2: img42,
//     tower3: img43,
//     tower4: img44,
//     tower5: img45,
//     tower6: img46,
//     tower7: img47,
//     tower8: img48,
//   });
//   const [selectedTower, setSelectedTower] = useState(null);

//   const showTowerImage = (tower) => {
//     setSelectedTower(tower);
//   };

//   return (
//     <div>
//       <div className="button-container">
//         {Object.keys(towerImages).map((tower) => (
//           <button type="button"key={tower}onClick={() => showTowerImage(tower)} id="btnId" margin-top="100px">{tower}</button>
//         ))}
//       </div>

//       <div className="image-container">
//         {selectedTower && (
//           <img src={towerImages[selectedTower]} alt={selectedTower} width="500px" />
//         )}
//       </div>

//       <button id="bts">Download Brochure</button>
//     </div>
//   );
// }

// export default App;
