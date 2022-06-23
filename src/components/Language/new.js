import { animated, useSpring } from '@react-spring/web'
import React from 'react'


const ComponentRender = () => {
    const fade = useSpring({opacity: 1, from : {opacity: 0}, delay: 1000})
     return(
         <div className='details'>
             <h3>Animation on Component Render</h3>
             <p>Animation will trigger when the website rendered components</p>
            <div className='board'>
                  <p>Fade In card using Opacity</p>
                  <ul>
                      <animated.li className="card" style={fade}></animated.li>
                      <animated.li className="card" style={fade}></animated.li>
                      <animated.li className="card" style={fade}></animated.li>
                  </ul>
            </div>
          </div>
     )
}

export default ComponentRender