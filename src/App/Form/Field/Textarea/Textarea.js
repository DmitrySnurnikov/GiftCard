import React from 'react'

function Textarea() {
    return (
        <div className={'content-textarea'}>
            <label>Message</label>
            <textarea placeholder={'Write a gift message here.'}/>
        </div>
    )
}

export default Textarea;
