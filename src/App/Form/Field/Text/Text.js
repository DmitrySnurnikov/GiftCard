import React from 'react'

function Text() {
    let cardAmoint = 
    <div>
        <span>Gift Card Amount</span>
        <ul className={'text-title-cost'}>
            <li>
                <label>$25</label>
            </li>
            <li>
                <label>$50</label>
            </li>
            <li>
                <label>$75</label>
            </li>
            <li>
                <label>$100</label>
            </li>
        </ul>
    </div>
    let cardForm = <ul className={'form-title'}>
        <li>
            <label>Your Name</label>
            <input type={'text'} placeholder={'Your Name'}/>
        </li>
        <li>
            <label>Your Email</label>
            <input type={'text'} placeholder={'Your Email'}/>
        </li>
        <li>
            <label>Recipient Name</label>
            <input type={'text'} placeholder={'Recipient Name'}/>
        </li>
        <li>
            <label>Recipient Email</label>
            <input type={'text'} placeholder={'Recipient Email'}/>
        </li>
    </ul>
    return (
        <div className={'text-title'}>
            {cardAmoint}
            {cardForm}
        </div>
    )
}

export default Text;
