import React,{useState} from 'react'

function Delivery({name,label,type}) {
    const[showBlockDate,setShowBlockDate]=useState(false)

    const hideBlock=()=>{
        setShowBlockDate(false)
    }
    const showBlock=()=>{
        setShowBlockDate(true)
    }
    let dateBlcok = <input type={'date'} className={(showBlockDate === true)? "MR_showBlock":"MR_hideBlock"}/>
    return (
        <li className={(showBlockDate === true)?  "MR_delivery-active":"MR_delivery"}>
            <span>{label}</span>
            <ul className={"MR_delivery-title"}>
                <li>
                    <label><input name={name} type={'radio'} onChange={()=>hideBlock()}/> Send Instantly</label>
                </li>
                <li>
                    <label><input name={name} type={'radio'} onChange={()=>showBlock()}/> Send on a Future Date</label>
                </li>
            </ul>
            <div>{dateBlcok}</div>
        </li>
    )
}

export default Delivery 
