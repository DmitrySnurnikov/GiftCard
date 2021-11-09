import React, {useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
import GiftCards from './GiftCards/GiftCards';
import Form from './Form/Form';
import '../App.css';

function App() {
const [giftcard,setGiftCard] = useState();
const [load, setLoad] = useState(true);

  useEffect(()=>{
    async function getCard(){
      // let hash = document.getElementById('cart-qty-checker').dataset.mrHash;
      let storeGift = 'https://mocki.io/v1/c780c862-2596-4d7c-b3c8-84f5588bbd2c';
      // let response = await fetch(storeHouseUrl+hash+'&sku='+skus.join(","));
      let response = await fetch(storeGift)
      if(response.ok){ 
        let data = await response.json();
        setGiftCard(data);
        setLoad(false)
      }
    }
    getCard();
  },[]);
  let page = ()=>{
    return(
      <>
        <GiftCards geft={giftcard}/> 
        <Form giftcard={giftcard}/>
      </>
    )
  }

  console.log("data", giftcard)
  return (
    <>
      <div className={'content'}>
        {load ? <Loader type="Circles" color="#00BFFF" height={80} width={80}/> : (page())} 
      </div>
    </>
  );
}

export default App;
