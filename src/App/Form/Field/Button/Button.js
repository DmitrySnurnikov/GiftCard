import React,{useState} from 'react'

function Button({button,name,cost,delivery,setBtn,pushTextarea}) {
    const[qty,setQTY] = useState(1)
    let finishedRezult={name,cost,delivery,qty,pushTextarea};
    
    const incrementCount=()=>{
        setQTY(qty+1);
    }
    const decrementCount=()=>{
        setQTY(Math.max(qty-1,1))
    }
    const changeValue=(e)=>{
        setQTY(e.target.value)
    }
    const handleClickBtn=()=>{
        let inputValue = document.querySelectorAll('ul[class*="MR_fields-title"] li[class*="MR_field"] input');
        Array.from(inputValue).map((field)=>{
            finishedRezult[field.placeholder] = field.value;
        })
        
        console.log("addtocart",finishedRezult)
    }

    return (
       <div className={"MR_AddToCart-title"}>
        <div className={"MR_AddToCart-qty"}>
            <span>Qty</span>
            <input type={"number"} min={1} value={qty} onChange={(e)=>changeValue(e)}/>
            <div className={"MR_button-difference"}>
                <button type={'button'} className={"MR_button-plus"} onClick={()=>incrementCount()}>+</button>
                <button type={'button'} className={"MR_button-minus"} onClick={()=>decrementCount()}>-</button>
            </div>
        </div> 
        <button type={'button'} className={((setBtn && setBtn==true)?"MR_button-addToCart-action":"MR_button-addToCart") +" "+button.class} onClick={()=>{handleClickBtn()}} disabled={(setBtn && setBtn==true)?false:true}>{button.title}</button>
       </div>
    )
}

export default Button
