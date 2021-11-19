import React, {useState} from 'react'
import Delivery from '../Delivery/Delivery'
function Text({fields}) {


    var checkedValue=(e)=>{
        if(e.target.type == "text" && e.target.value.match(/^[a-zA-Z_ ]*$/)){
            console.log("e",e.target.value)
        }
        
    }

    let unitBlock = fields.map((field,index)=>{
        if(field.class){
            return <li key={index} className={"MR_field" +" "+ field.class}>
            <span>{field.label}</span>
            <input type={field.type} name={field.name} placeholder={field.label} onChange={(e)=>checkedValue(e)} required={field.required}/>
        </li>
        }else if(field.placeholder){
            if(field.type === "textarea"){
                return <li key={index} className={"MR_field"}>
                <span>{field.label}</span>
                <textarea type={field.type} placeholder={field.placeholder} name={field.name} id={field.name} pattern={"[A-Za-z]"} required={field.required}/>
                </li>
            }else{
                return <li key={index} className={"MR_field"}>
            <span>{field.label}</span>
            <input type={field.type} name={field.name} placeholder={field.placeholder} onChange={(e)=>checkedValue(e)} required={field.required}/>
            </li>
            } 
        }else if(field.type == "delivery"){
           return <Delivery name={field.name} type={field.type} label={field.label}/>
        }else{
            return <li key={index} className={"MR_field"}>
            <span>{field.label}</span>
            <div className={"MR_errorMessage"}>Please enter a valid Name</div>
            <input type={field.type} name={field.name} placeholder={field.label} onChange={(e)=>checkedValue(e)}required={field.required}/>
        </li>
        }
        
    })
    return (
        <div className={"MR_fields"}>
            <ul className={"MR_fields-title"}>
                {unitBlock}
            </ul>
        </div>
    )
}

export default Text
