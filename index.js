import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './header';
import './rmt.css'
import './rmt1.css'
import './rmt2.css'
import Image from './img'
import Image1 from './img1'
import Flag from './flag';
import Hyd from './hyd';
import Valantis from './vasavialanties';
import Textimg from'./textimg';
import Logos from'./amen';
import Site from './site';
import Floorplans from './floorplans';
import App from './butja';
import Prices from './prices';
import Customer from './customer';
import Video from './video';
import Project from './project';
import Location from './location';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Nav />
    <Image/>
    <Image1/>
    <Flag/>
    <Hyd/>
    <Valantis/>
    <Textimg/>
    <Logos/>
    <Site/>
    <Floorplans/>
    <App/>
    <Prices/>
    <Customer/>
    <Video/>
    <Project/>
    <Location/>


  </>
)
;

