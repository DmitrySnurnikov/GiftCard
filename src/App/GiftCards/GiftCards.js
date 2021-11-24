import React, {useState} from 'react'
import Header from './Header/Header';
import Slider from './Slider/Slider';
import GiftCard from './GiftCard/GiftCard';

function GiftCards({gift,giftcardCost,giftcardName}) {
const[indexCard,setIndexCard] = useState();

    const getIndexCard = (index)=>{
        setIndexCard(index)
        gift.giftcards.map((card,i)=>{
            if(index == i){
                getNameCard(card.name)
            }
        })
    }
    const getCostCard=(cost)=>{
        giftcardCost && giftcardCost(cost)
    }
    const getNameCard = (name) =>{
        giftcardName && giftcardName(name)
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
