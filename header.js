import pic from './img1.png'
function Nav() {
  return (
   <div>
    <div className="container">
      <div className="logo">
        <img id="images" src={pic} alt=""/>
        <a id="nav1"href="/">why invest in Hyderabad</a>
        <a id="nav2"href="/">Amenities</a>
        <a id="nav3"href="/">Floor Plans</a>
        <a id="nav4"href="/">Price</a>
        <a id="nav5"href="/">Our Projects</a>
        <a id="nav6"href="/">Request a Call</a>
      </div>

    </div>
   </div>
)
}

export default Nav;

