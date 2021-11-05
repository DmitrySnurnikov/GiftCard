import React from 'react'

function Delivery() {
    return (
        <div className={'content-delivery'}>
            <label>Delivery</label>
            <ul className={'delivery-choose'}>
                <li>
                    <input type={'radio'} checked/>
                    Send Instantly
                </li>
                <li>
                    <input type={'radio'}/>
                    Send on a Future Date
                </li>
            </ul>
        </div>
    )
}

export default Delivery;
