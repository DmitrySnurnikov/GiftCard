import React, {useState} from 'react'
import Header from './Header/Header';
import GiftCard from './GiftCard/GiftCard';
import Sliders from './Slider/Slider';
import '../../App.css';
function GiftCards({geft}) {
    const[name,setName] = useState()
    let checkCart=(index)=>{
        setName(index)
    }
    return (
        <>
            <div className={'content-giftcards'}>
                <div className={'giftcards-header'}>
                    <Header title={geft.title} description={geft.description}/>
                </div>
                <div className={'giftcards-slider'}>
                    <Sliders giftcards={geft.giftcards} checkCart={checkCart}/>
                </div> 
            </div>
            <div className={'content-gift'}>
                <div className={'giftcard'}>
                    <GiftCard  name={name} giftcards={geft.giftcards}/>
                </div>  
            </div>
        </>
    )
}

export default GiftCards;
