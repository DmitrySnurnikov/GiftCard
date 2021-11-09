import React from 'react'

function GiftCard({name,giftcards}) {
    var cost;
    console.log("name",giftcards[0].variants)
    if(name){
         giftcards.map((card,index) => {
            if(card.name === name){
                cost = card.variants.map((item,idex)=>{
                    return <li key={idex} sku={item.sku}>{item.value}$</li>
                })
            }
        })
    }else{
        cost = giftcards[0].variants.map((item,idex)=>{
            return <li key={idex} sku={item.sku}>{item.value}$</li>
        })
    }
     
    return (
        <div className={'text-title'}>
            <span>Gift Card Amount</span>
            <ul className={'text-title-cost'}>
                {cost}
            </ul>
        </div>
    )
}

export default GiftCard;
