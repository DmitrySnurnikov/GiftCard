import React,{useState,useEffect} from 'react'

let Arrow = <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule={"evenodd"} clipRule={"evenodd"} d="M2.8125 22.5C2.8125 27.7214 4.88671 32.729 8.57883 36.4212C12.271 40.1133 17.2786 42.1875 22.5 42.1875C27.7214 42.1875 32.729 40.1133 36.4212 36.4212C40.1133 32.729 42.1875 27.7214 42.1875 22.5C42.1875 17.2786 40.1133 12.271 36.4212 8.57883C32.729 4.88671 27.7214 2.8125 22.5 2.8125C17.2786 2.8125 12.271 4.88671 8.57883 8.57883C4.88671 12.271 2.8125 17.2786 2.8125 22.5ZM45 22.5C45 28.4674 42.6295 34.1903 38.4099 38.4099C34.1903 42.6295 28.4674 45 22.5 45C16.5326 45 10.8097 42.6295 6.5901 38.4099C2.37053 34.1903 0 28.4674 0 22.5C0 16.5326 2.37053 10.8097 6.5901 6.5901C10.8097 2.37053 16.5326 0 22.5 0C28.4674 0 34.1903 2.37053 38.4099 6.5901C42.6295 10.8097 45 16.5326 45 22.5ZM12.6562 21.0938C12.2833 21.0938 11.9256 21.2419 11.6619 21.5056C11.3982 21.7694 11.25 22.127 11.25 22.5C11.25 22.873 11.3982 23.2306 11.6619 23.4944C11.9256 23.7581 12.2833 23.9062 12.6562 23.9062H28.9491L22.9106 29.9419C22.7799 30.0726 22.6762 30.2278 22.6054 30.3987C22.5346 30.5695 22.4982 30.7526 22.4982 30.9375C22.4982 31.1224 22.5346 31.3055 22.6054 31.4763C22.6762 31.6472 22.7799 31.8024 22.9106 31.9331C23.0414 32.0639 23.1966 32.1676 23.3674 32.2383C23.5382 32.3091 23.7213 32.3455 23.9062 32.3455C24.0912 32.3455 24.2743 32.3091 24.4451 32.2383C24.6159 32.1676 24.7711 32.0639 24.9019 31.9331L33.3394 23.4956C33.4703 23.365 33.5742 23.2098 33.6451 23.039C33.716 22.8681 33.7525 22.685 33.7525 22.5C33.7525 22.315 33.716 22.1319 33.6451 21.961C33.5742 21.7902 33.4703 21.635 33.3394 21.5044L24.9019 13.0669C24.7711 12.9361 24.6159 12.8324 24.4451 12.7617C24.2743 12.6909 24.0912 12.6545 23.9062 12.6545C23.7213 12.6545 23.5382 12.6909 23.3674 12.7617C23.1966 12.8324 23.0414 12.9361 22.9106 13.0669C22.7799 13.1976 22.6762 13.3528 22.6054 13.5237C22.5346 13.6945 22.4982 13.8776 22.4982 14.0625C22.4982 14.2474 22.5346 14.4305 22.6054 14.6013C22.6762 14.7722 22.7799 14.9274 22.9106 15.0581L28.9491 21.0938H12.6562Z" fill="#CBCBCB"/>
    </svg>;
let defaultImage = <svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45 9.68421H39.55C39.825 8.93368 40 8.11053 40 7.26316C40 3.24421 36.65 0 32.5 0C29.875 0 27.6 1.30737 26.25 3.26842L25 4.89053L23.75 3.24421C22.4 1.30737 20.125 0 17.5 0C13.35 0 10 3.24421 10 7.26316C10 8.11053 10.175 8.93368 10.45 9.68421H5C2.225 9.68421 0.025 11.8389 0.025 14.5263L0 41.1579C0 43.8453 2.225 46 5 46H45C47.775 46 50 43.8453 50 41.1579V14.5263C50 11.8389 47.775 9.68421 45 9.68421ZM32.5 4.84211C33.875 4.84211 35 5.93158 35 7.26316C35 8.59474 33.875 9.68421 32.5 9.68421C31.125 9.68421 30 8.59474 30 7.26316C30 5.93158 31.125 4.84211 32.5 4.84211ZM17.5 4.84211C18.875 4.84211 20 5.93158 20 7.26316C20 8.59474 18.875 9.68421 17.5 9.68421C16.125 9.68421 15 8.59474 15 7.26316C15 5.93158 16.125 4.84211 17.5 4.84211ZM45 41.1579H5V36.3158H45V41.1579ZM45 29.0526H5V14.5263H17.7L12.5 21.3779L16.55 24.2105L25 13.0737L33.45 24.2105L37.5 21.3779L32.3 14.5263H45V29.0526Z" fill="#D9DDE3" fillOpacity={"0.5"}/>
</svg>
function Slider({giftcards,indexCard,getName}) {
    const[sliderIndex,setSliderIndex] = useState(0);
    const[nameCard,setNameCard] = useState()

    useEffect(() => {
      indexCard && indexCard(sliderIndex);
      getName && getName(nameCard);
    }, [sliderIndex]);


    let giftLength = giftcards.length -1;
    
    const PrevClick = ()=>{
        (sliderIndex <= 0) ? setSliderIndex(giftLength) : setSliderIndex(sliderIndex - 1);
    }
    const NextClick = ()=>{
        (sliderIndex >= giftLength) ? setSliderIndex(sliderIndex - giftLength) : setSliderIndex(sliderIndex + 1);
    }

    const changeGiftCard = (e)=>{
        setNameCard(e.target.innerText)
        giftcards.map((card,index)=>{
            if(card.name === e.target.innerText){
                setSliderIndex(index)
            }
        })
    }
    let sliderTitle =  giftcards.map((slider,index)=>{
        if(sliderIndex === index){
            let imagePresent = (slider.image && slider.image == 'http://...') ? defaultImage : <img src={slider.image}/>
            return <div className={"MR_slider-title"} key={index}>
                <div>{imagePresent}</div>  
                <span>{slider.name}</span>
            </div>
        } 
    })
    let giftTitle = giftcards.map((gift,index)=>{
        return <li key={index}
            className={(index == sliderIndex) ? "MR_giftcard-slider-active":"MR_giftcard-slider"} 
            style={{backgroundImage: (!gift.image || gift.image !== "http://...")? `url(${gift.image})` : `url("data:image/svg+xml,%3Csvg width='50' height='46' viewBox='0 0 50 46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45 9.68421H39.55C39.825 8.93368 40 8.11053 40 7.26316C40 3.24421 36.65 0 32.5 0C29.875 0 27.6 1.30737 26.25 3.26842L25 4.89053L23.75 3.24421C22.4 1.30737 20.125 0 17.5 0C13.35 0 10 3.24421 10 7.26316C10 8.11053 10.175 8.93368 10.45 9.68421H5C2.225 9.68421 0.025 11.8389 0.025 14.5263L0 41.1579C0 43.8453 2.225 46 5 46H45C47.775 46 50 43.8453 50 41.1579V14.5263C50 11.8389 47.775 9.68421 45 9.68421ZM32.5 4.84211C33.875 4.84211 35 5.93158 35 7.26316C35 8.59474 33.875 9.68421 32.5 9.68421C31.125 9.68421 30 8.59474 30 7.26316C30 5.93158 31.125 4.84211 32.5 4.84211ZM17.5 4.84211C18.875 4.84211 20 5.93158 20 7.26316C20 8.59474 18.875 9.68421 17.5 9.68421C16.125 9.68421 15 8.59474 15 7.26316C15 5.93158 16.125 4.84211 17.5 4.84211ZM45 41.1579H5V36.3158H45V41.1579ZM45 29.0526H5V14.5263H17.7L12.5 21.3779L16.55 24.2105L25 13.0737L33.45 24.2105L37.5 21.3779L32.3 14.5263H45V29.0526Z' fill='%23D9DDE3' fill-opacity='0.5'/%3E%3C/svg%3E")` }} 
            onClick={e=>changeGiftCard(e)}
            >
                <label>{gift.name}</label>
            </li>
    })
    return (
        <>
            <div className={"MR_slider"}>
                <button className={"MR_prev"} onClick={()=>PrevClick()}>{Arrow}</button>
                {sliderTitle}
                <button className={"MR_next"} onClick={()=>NextClick()}>{Arrow}</button>
            </div>
            <ul className={"MR_slider-giftcard"}>{giftTitle}</ul>
        </>
    )
}

export default Slider
