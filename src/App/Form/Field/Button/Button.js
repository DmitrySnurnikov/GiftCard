import React, {useState} from 'react'

function Button({button,qty}) {
const[count, setCount] = useState(1)
    let inputQTY = document.querySelector('[class*="qty"] [type*="number"]');   
    let setDown = ()=>{
        setCount(count+1)   
    }
    let setUp = ()=>{
        setCount(count-1)
    }
    let ChangeValue = ()=>{
        setCount(+inputQTY.value)  
    }
    let  BtnClick = ()=>{
    }
    
    (inputQTY) ? (inputQTY.value = count) : (inputQTY=1);
    console.log("count", count)
    return (
        <div className={'content-quantity'}>
            <div className={'content-qty'}>
                <label>{qty.title}</label>
                <div className={'title-qty'}>
                    <input className={'qty'} type={'number'}  min={'1'} pattern={"[1-9]*"} onChange={()=> ChangeValue()}/>  
                    <div>
                        <button className={'button-qty-plus'} onClick={()=>setDown()}>+</button>
                        <button className={'button-qty-minus'} onClick={()=>setUp()}>-</button>
                    </div>   
                </div>
            </div>
            <button className={'button-AddtoCart'} onClick={()=> BtnClick()}>{button.title}</button>
        </div>
    )
}

export default Button;
