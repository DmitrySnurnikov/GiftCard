import React from 'react'
import Delivery from '../Delivery/Delivery'
function Text({fields}) {
    let text = fields.map((item,i)=>{
        if(item.label === 'Message'){
            return <li key={i}>
            <label>{item.label}</label>
            <textarea type={item.type} placeholder={item.placeholder} name={item.name} required={item.required}/>
        </li>
        }else if(item.label === "Delivery"){
            return <li><Delivery /></li>    
        }else{
            return <li key={i}>
            <label>{item.label}</label>
            <input className={"class" + item.class} type={item.type} placeholder={item.label} name={item.name} required={item.required}/>
        </li>
        }    
    })
    
    return (
        <div className={'text-title'}>
            <ul className={'form-title'}>
                {text}
            </ul>    
        </div>
    )
}

export default Text;
