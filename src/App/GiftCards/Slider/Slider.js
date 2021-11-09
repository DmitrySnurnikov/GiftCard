import React, {useState} from 'react'
import Slider from 'react-perfect-slider';

function Sliders({giftcards,checkCart}) {
    let slide = Array.from(giftcards).map((item,index) => {
        return <div key={index} className={"slide"}>
                <label>{item.name}</label>
                <img src={item.image}/>
            </div>
    })
    let ClickCard=(index)=>{
        checkCart && checkCart(index);
    }
    let card = Array.from(giftcards).map((item,index)=>{
        return <li key={index} style={{backgroundImage: `url(${item.image})`}} onClick={()=>ClickCard(item.name)}>{item.name}</li>
    })
  
    return (
        // <div>
        //         {slide}
        //     <ul className={'slider-title'}>
        //         {card}
        //     </ul>
        // </div>
        <>
        <div>
        <Slider renderControls={(next, previous) => [
            <button onClick={previous} className={'button_prv'}>Previous</button>,
            <button onClick={next} className={'button_next'}>Next</button>
        ]}>
            {slide}
        </Slider>
        </div>
        <ul className={'slider-title'}>
                {card}
            </ul>
            </>
    )
}

export default Sliders;

