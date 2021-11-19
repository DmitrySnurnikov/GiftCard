import React, {useState} from 'react'
import Header from './Header/Header';
import Slider from './Slider/Slider';
import GiftCard from './GiftCard/GiftCard';

function GiftCards({gift,giftcardCost}) {
const[nameCard,setNameCard] = useState();
const[indexCard,setIndexCard] = useState();
const[costCard,setCostCard] = useState();

const getIndexCard = (index)=>{
    setIndexCard(index)
}
const getCostCard=(cost)=>{
    giftcardCost && giftcardCost(cost)
}
const getNameCard = (name) =>{

}
    return (
        <div className={"MR_gift-title"}>
            <div className={"MR_gift-slider"}>  
                <Header title={gift.title} description={gift.description}/>
                <Slider giftcards={gift.giftcards} indexCard={getIndexCard} getName={getNameCard}/>
            </div>
            <GiftCard indexCard={indexCard} giftcards={gift.giftcards} getCost={getCostCard}/>
        </div>
    )
}

export default GiftCards
