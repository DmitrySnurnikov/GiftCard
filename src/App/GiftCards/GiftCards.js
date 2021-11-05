import React from 'react'
import Header from './Header/Header';
import GiftCard from './GiftCard/GiftCard';
import Slider from './Slider/Slider';
import '../../App.css';
function GiftCards() {

    return (
        <div className={'content-giftcards'}>
            <div className={'giftcards-header'}>
                <Header/>
            </div>
            <div className={'giftcards-slider'}>
                <Slider />
            </div>
            <div className={'giftcard'}>
                <GiftCard />
            </div>   
        </div>
    )
}

export default GiftCards;
