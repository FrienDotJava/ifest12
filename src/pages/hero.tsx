import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextBlock from './textBlock.tsx';

// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

import './hero.css';
const Banner: React.FC = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#A5CAE4] via-[#88B7DD] to-[#5A99D2]">
        <Parallax pages={2} style={{ top: '0', left: '0' }} className="awan_animation">
            <ParallaxLayer offset={0} speed={0.2}>
                <div className="awan_animation_layer parallax" id="awan1"> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div className="awan_animation_layer parallax" id="awan2"> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}>
                <div className="awan_animation_layer parallax" id="awan3"> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
               <div className="awan_animation_layer parallax" id="awan4"> </div>
            </ParallaxLayer> 
            <ParallaxLayer offset={0} speed={0.45}>
                <div className="awan_animation_layer parallax" id="awan5"> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div className="awan_animation_layer parallax" id="title"> </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.3}>
                <TextBlock />
            </ParallaxLayer>
        </Parallax>
    </div>
  );
};

export default Banner;
