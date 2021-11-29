import React,{useState,useEffect} from 'react'
import Button from './Field/Button/Button';
import Text from './Field/Text/Text';

    function Form({fields,button,cardName,cardCost}) {
        const[delivery,setDelivery] = useState();
        const[disabledBtn,setDisabledBtn] = useState();
        const[activeBtn,setActiveBtn] = useState(false);
        const[getTextareaValue,setGetTextareaValue] = useState();

        useEffect(() => {
            if(cardCost && disabledBtn == true){
                setActiveBtn(true)
            }
        }, [cardCost,disabledBtn])

        const getDeliveryСard=(delivery)=>{
            setDelivery(delivery)
        }
        const getDisabledBtn=(dis)=>{
            setDisabledBtn(dis);
        }
        const getTextarea=(value)=>{
            setGetTextareaValue(value);
        }
        return (
            <form>
            <Text 
                fields={fields}
                getDelivery={getDeliveryСard} 
                getDisabledBtn={getDisabledBtn} 
                getTextarea={getTextarea}/>
            <Button 
                button={button} 
                name={cardName} 
                cost={cardCost} 
                delivery={delivery}
                pushTextarea={getTextareaValue} 
                setBtn={activeBtn}/>
            </form>
        )
    }
    
    export default Form
    