import React, {useState} from 'react'
import Delivery from '../Delivery/Delivery'
function Text({fields,getDelivery,getDisabledBtn,getTextarea}) {
    const[checkReq,setCheckReq]=useState(false);
    const[checkBtn,setCheckBtn] = useState(false);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let checkedValue=(e)=>{
        setCheckReq(true);
        checkedRequired()     
        if(e.target.id == 'your_name'){
            if(e.target.value.match(/^[a-zA-Z_ ]*$/)){
                e.target.parentNode.children[1].style.visibility="hidden";
                e.target.parentNode.children[1].style.display="none";
                e.target.parentNode.children[0].style.marginBottom="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
            }else{
                e.target.parentNode.children[1].style.visibility="visible";
                e.target.parentNode.children[1].style.display="initial";
                e.target.parentNode.children[0].style.marginBottom="0";
                e.currentTarget.style.border="1px solid #EA4A1F" 
            }
        }else if(e.target.id == 'your_email'){
            if(e.target.value.match(re)){
                e.target.parentNode.children[1].style.visibility="hidden";
                e.target.parentNode.children[1].style.display="none";
                e.target.parentNode.children[0].style.marginBottom="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
            }else{
                e.target.parentNode.children[1].style.visibility="visible";
                e.target.parentNode.children[1].style.display="initial";
                e.target.parentNode.children[0].style.marginBottom="0";
                e.currentTarget.style.border="1px solid #EA4A1F"  
            }
            if(e.target.value.length === 0){
                e.target.parentNode.children[1].style.visibility="hidden";
                e.target.parentNode.children[1].style.display="none";
                e.target.parentNode.children[0].style.marginBottom="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
            }
        }else if(e.target.id == 'recipient_email'){
            if(e.target.value.match(re)){
                e.target.parentNode.children[1].style.visibility="hidden";
                e.target.parentNode.children[1].style.display="none";
                e.target.parentNode.children[0].style.marginBottom="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
            }else{
                e.target.parentNode.children[1].style.visibility="visible";
                e.target.parentNode.children[1].style.display="initial";
                e.target.parentNode.children[0].style.marginBottom="0";
                e.currentTarget.style.border="1px solid #EA4A1F"
            }
            if(e.target.value.length === 0){
                e.target.parentNode.children[1].style.visibility="hidden";
                e.target.parentNode.children[1].style.display="none";
                e.target.parentNode.children[0].style.marginBottom="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
            }
        }else{
            if(e.target.value.match(/^[a-zA-Z_ ]*$/)){
                e.target.parentNode.children[1].style.visibility="hidden";
                e.target.parentNode.children[1].style.display="none";
                e.target.parentNode.children[0].style.marginBottom="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
            }else{
                e.target.parentNode.children[1].style.visibility="visible";
                e.target.parentNode.children[1].style.display="initial";
                e.target.parentNode.children[0].style.marginBottom="0";
                e.currentTarget.style.border="1px solid #EA4A1F"
            }
        }
    }
    const checkedRequired=()=>{
        let inputReq = document.querySelectorAll('div[class*="MR_content"] input[required]');
        Array.from(inputReq).map((lea,index)=>{
            if(checkReq == true){
                lea.style.border="1px solid #EA4A1F";
                if(lea.value.length>0){
                    lea.style.border="1px solid #C4C4C4";
                    setCheckBtn(true);
                }
            }
            
        })
    }
    const getValueTextare=(e)=>{
        getTextarea && getTextarea(e.target.value)
    }
    const getDeliveryType=(delivery)=>{
        getDelivery && getDelivery(delivery);
        getDisabledBtn && getDisabledBtn(checkBtn);
    }
    let unitBlock = fields.map((field,index)=>{
        if(field.label === 'Message'){
            return <li key={index} className={"MR_field"}>
            <label>{field.label}</label>
            <textarea type={field.type} placeholder={field.placeholder} name={field.name} id={field.name} pattern={"[A-Za-z]"} onBlur={(e)=>getValueTextare(e)} required={field.required}/>
        </li>
        }else if(field.label === "Delivery"){
            return <Delivery name={field.name} type={field.type} label={field.label} getDelivery={getDeliveryType}/>    
        }else if(field.class){
            return <li key={index} className={"MR_field"}>
            <label>{field.label}</label>
            <div className={"MR_errorMessage"}>Please enter a valid {(field.label.indexOf('Your Name') == 0)? "Name": ""}</div>
            <input className={"class" + field.class} type={field.type} placeholder={field.label} id={field.name} onBlur={e=>checkedValue(e)}  pattern={"[A-Za-z]"} name={field.name} required={field.required}/>
        </li>
        }else{
            return <li key={index} className={"MR_field"}>
            <label>{field.label}</label>
            <div className={"MR_errorMessage"}>Please enter a valid {(field.label.indexOf('Your Email') == 0)? "Email": field.label}</div>
            <input className={field.name} type={field.type} placeholder={field.label} id={field.name} onBlur={e=>checkedValue(e)}  name={field.name} required={field.required}/>
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
