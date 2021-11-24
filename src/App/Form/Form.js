import React,{useState} from 'react'
import Button from './Field/Button/Button';
import Text from './Field/Text/Text';
    function Form({fields,button,cardName,cardCost}) {
        const[delivery,setDelivery] = useState();
        const[disabledBtn,setDisabledBtn] = useState();
        const[getTextareaValue,setGetTextareaValue] = useState()
        const getDeliveryСard=(delivery)=>{
            setDelivery(delivery)
        }
        const getDisabledBtn=(dis)=>{
            setDisabledBtn(dis)
        }
        const getTextarea=(value)=>{
            setGetTextareaValue(value);
        }
        return (
            <form>
            <Text fields={fields} getDelivery={getDeliveryСard} getDisabledBtn={getDisabledBtn} getTextarea={getTextarea}/>
            <Button 
                button={button} 
                name={cardName} 
                cost={cardCost} 
                delivery={delivery}
                pushTextarea={getTextareaValue} 
                setBtn={disabledBtn}/>
            </form>
        )
    }
    
    export default Form
    