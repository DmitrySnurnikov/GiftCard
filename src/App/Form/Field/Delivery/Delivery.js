import React,{useState} from 'react'

function Delivery({name,label,getDelivery,type}) {
    const[deliveryType,setDeliveryType] = useState();
    const[showBlockDate,setShowBlockDate]=useState(false)
    const D = new Date();
    let currentDate = (D.getFullYear() + "-" + (D.getMonth()+1) + "-" + D.getDate());
    const dateSelection=(e)=>{
        getDelivery && getDelivery(e.target.value)
        if(e.target.value <= currentDate){
            e.target.parentNode.children[0].style.visibility="visible";
                e.target.parentNode.children[0].style.display="initial";
                e.target.parentNode.style.marginTop="0";
                e.currentTarget.style.border="1px solid #EA4A1F"
                e.target.value = ""
        }else{
                e.target.parentNode.children[0].style.visibility="hidden";
                e.target.parentNode.children[0].style.display="none";
                e.target.parentNode.style.marginTop="18px";
                e.currentTarget.style.border="1px solid #C4C4C4"
        }
    }
    const hideBlock=(e)=>{
        setShowBlockDate(false);
        getDelivery && getDelivery(e.target.parentNode.innerText)
        setDeliveryType(e.target.parentNode.innerText);
    }
    const showBlock=(e)=>{
        setDeliveryType(e.target.parentNode.innerText);
        getDelivery && getDelivery(e.target.parentNode.innerText)
        setShowBlockDate(true)
    }
    let dateBlcok = <input type={'date'}  min={currentDate} onChange={(e)=>dateSelection(e)} required/>
    return (
        <li className={(showBlockDate === true)?  "MR_delivery-active":"MR_delivery"} type={type}>
            <span>{label}</span>
            <ul className={"MR_delivery-title"}>
                <li>
                    <label><input name={name} type={'radio'} onChange={(e)=>hideBlock(e)}/> Send Instantly</label>
                </li>
                <li>
                    <label><input name={name} type={'radio'} onChange={(e)=>showBlock(e)}/> Send on a Future Date</label>
                </li>
            </ul>
            <div className={(showBlockDate === true)? "MR_showBlock":"MR_hideBlock"}>
                <div className={"MR_errorMessage"}>Please enter a valid Date</div>
                {dateBlcok}
            </div>
        </li>
    )
}

export default Delivery 
