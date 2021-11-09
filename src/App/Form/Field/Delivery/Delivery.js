import React from 'react'

function Delivery() {
    
    return (
        <div >
            <label>Delivery</label>
            <div className={'delivery-choose'}>
                <div>
                    <input type={'radio'} id={"instantly"}/>
                    Send Instantly
                </div>
                <div>
                    <input type={'radio'} id={"future_date"} />
                    Send on a Future Date
                </div> 
            </div>
        </div>
    )
}

export default Delivery;
