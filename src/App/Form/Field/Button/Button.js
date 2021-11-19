import React,{useState} from 'react'

function Button({button}) {
    const[count,setCount] = useState(1)
    const incrementCount=()=>{
        setCount(count+1);
    }
    const decrementCount=()=>{
        setCount(Math.max(count-1,1))
    }
    const changeValue=(e)=>{
        setCount(e.target.value)
    }
    const handleClickBtn=()=>{
        console.log("addtocart")
    }
    return (
       <div className={"MR_AddToCart-title"}>
        <div className={"MR_AddToCart-qty"}>
            <span>Qty</span>
            <input type={"text"} min={1} value={count} onChange={(e)=>changeValue(e)}/>
            <div className={"MR_button-difference"}>
                <button type={'button'} className={"MR_button-plus"} onClick={()=>incrementCount()}>+</button>
                <button type={'button'} className={"MR_button-minus"} onClick={()=>decrementCount()}>-</button>
            </div>
        </div> 
        <button type={'button'} className={"MR_button-addToCart" +" "+button.class} onClick={()=>{handleClickBtn()}}>{button.title}</button>
       </div>
    )
}

export default Button
