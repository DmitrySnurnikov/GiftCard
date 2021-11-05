import React from 'react'

function Button() {
    let blockQTY = <div className={'content-qty'}>
        <label>Qty</label>
        <div className={'title-qty'}>
            <input type={'text'} value={'1'} min={'1'}/>  
            <div>
                <button className={'button-qty-plus'}>+</button>
                <button className={'button-qty-minus'}>-</button>
            </div>   
        </div>
    </div>

    return (
        <div className={'content-quantity'}>
            {blockQTY}
            <button className={'button-AddtoCart'}>ADD TO CART</button>
        </div>
    )
}

export default Button;
