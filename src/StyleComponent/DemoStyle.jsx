import React, { useState } from 'react'
import cssStyle from './DemoStyle.module.css'

const DemoStyle = () => {
    let [fSize, setFSize] = useState(17);
    const jsonCss = { color: 'red', backgroundColor: 'blue' };
    return (
        <div className='container'>
            <h3>Style component</h3>
            <p style={{
                color: '#fff',
                backgroundColor: 'blue',
                padding:'10px',
                borderRadius:'5px'
            }}>Lorem ipsum dolor sit amet.</p>
            <div style={jsonCss} />

            <p className={cssStyle.pBlue}>
                Lorem ipsum dolor sit amet.
            </p>

            <p className={`bg-warning ${cssStyle.pBlue} ${cssStyle['border-red']}`}>
                Lorem ipsum dolor sit amet.
            </p>
            <hr/>
            <h3 style={{fontSize:`${fSize}px`}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni voluptates impedit! Deleniti hic placeat iure iste velit, natus explicabo!
            </h3>
            <button className='btn btn-success' onClick={()=>{
                setFSize(fSize + 1)
            }}>+</button>
            <button className='btn btn-primary mx-2' onClick={()=>{
                setFSize(fSize - 1)
            }}>-</button>
        </div>
    )
}

export default DemoStyle