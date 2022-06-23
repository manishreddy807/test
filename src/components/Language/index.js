import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';

function ComponentTriggered(){
    const [toggleDown, setToggleDown] = useState(false);
    const [toggleUp, setToggleUp] = useState(false)

    const {opacityDown, yDown, opacityUp, yUp} = useSpring({
        opacityDown: toggleDown ? 1:0,
        yDown: toggleDown ? 0 : -50,
        opacityUp : toggleUp ? 1 :0,
        yUp : toggleUp ? 0 : 50
    })

    return(
        <div className='details'>
            <h3>Animations</h3>
            <p>wil take Effect when event is triggered</p>
            <div className="board-trigger">
                <p>On Click, display card slide down</p>
                <div className='container'>
                    <animated.div
                    style={{
                        transform: yDown.interpolate( y => ( `translate3d(0,${y}px,0)`)),
                        opacity: opacityDown.interpolate( opacityDown => ( opacityDown ))
                      }}>
                    </animated.div>
                    <div className='button-container'>
                    <button className="trigger_btn" onClick={() => setToggleDown(!toggleDown)}>Click</button>
                    </div>
                </div>
            </div>
            <div className='board-trigger'>
            <p>On Click, display card slide down</p>
            <div className='container'>
            <animated.div
                    style={{
                        transform: yUp.interpolate( y => ( `translate3d(0,${y}px,0)`)),
                        opacity: opacityUp.interpolate( opacityUp => ( opacityUp ))
                      }}>
                    </animated.div>
                    <div className='button-container'>
                    <button className="trigger_btn" onClick={() => setToggleUp(!toggleUp)}>Click</button>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default ComponentTriggered
