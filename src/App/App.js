import React, {useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
import GiftCards from './GiftCards/GiftCards';
import Form from './Form/Form';
import '../App.css';

function App() {
const [giftcard,setGiftCard] = useState();
const [load, setLoad] = useState(true);
const [cardName,setCardName] = useState();
const [cardCost, setCardCost] = useState();
  useEffect(()=>{
    async function getCard(){
      let hash = document.getElementById('mr-purchase-giftcard').dataset.mrHash;
      let storeGift = 'https://devwidget.modernretail.com/gf/sample.php?hash=';
      let response = await fetch(storeGift+hash);
      if(response.ok){ 
        let data = await response.json();
        setGiftCard(data);
        setLoad(false)
      }
    }
    getCard();
  },[]);
  const giftcardName = (name)=>{
    setCardName(name);
  }
  const giftcardCost = (value)=>{
    setCardCost(value)
  }
 
  let page = ()=>{
    return(
      <>
        <GiftCards gift={giftcard} giftcardName={giftcardName} giftcardCost={giftcardCost}/> 
        <Form fields={giftcard.fields}  button={giftcard.button} cardName={cardName} cardCost={cardCost}/>
      </>
    )
  }

  return (
    <>
      <div className={'MR_content'}>
        {load ? <Loader type="Circles" color="#00BFFF" height={80} width={80}/> : (page())} 
      </div>
    </>
  );
}

export default App;