import React,{useState} from 'react'

function GiftCard({indexCard,giftcards,getCost}) {
    const[costCard,setCostCard] = useState()
    let priceCard;
    const choiceCost=(e)=>{
        setCostCard(e.target.innerText);
        getCost && getCost(e.target.innerText)
    }

    giftcards.map((card,index)=>{
        if(indexCard === index){
            priceCard = card.variants.map((cost,index)=>{
                return    <li key={index}
                className={(costCard == cost.value)? "MR_choice-cost-active":"MR_choice-cost"}
                sku={cost.sku}
                onClick={(e)=>choiceCost(e)}>
                <label>{cost.value}</label>
                </li>
            })
        }
    })

    return (
        <div className={"MR_costCard"}>
            <label>Gift Card Amount</label>
            <ul className={'MR_cost'}>
                {priceCard}
            </ul>
        </div>
    )
}

export default GiftCard