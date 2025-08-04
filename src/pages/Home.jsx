import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../context/CoinContext'
import { Link } from 'react-router-dom';
const Home = () => {

    const {allCoin , currency} = useContext(CoinContext);
    const [displayCoin , setDisplayCoin] = useState([]);
    const [input , setInput] = useState('');

    const inputHandler = (event)=>{
       setInput(event.target.value);
       if(event.target.value === ""){
        setDisplayCoin(allCoin);
       }
    }
  const searchHandler = async (event) => {
     event.preventDefault();
    const coins = await allCoin.filter((item)=>{
       return item.name.toLowerCase().includes(input.toLowerCase())
     })
     setDisplayCoin(coins);
  }

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])
  return (
    <div className='p-0 py-10 pb-[100px] px-4 sm:px-0'>
      <div className='max-w-[600px] m-auto flex flex-col items-center text-center gap-7 text-white'>
        <h1 className='pt-4 text-3xl sm:text-4xl lg:text-6xl font-medium font-serif mt-3'>Largest <br /> Crypto Marketplace</h1>
        <p className='text-base sm:text-lg lg:text-xl text-gray-300 mt-4 px-4 sm:px-0'>Welcome to the worls's largest cryptocurrency marketplace. <br className='hidden sm:block' /> Sign up to explore more about cryptos.</p>
        
    <form className="flex gap-4 w-full px-4 sm:px-0" onSubmit={searchHandler}>
  <div className="relative w-full max-w-[560px]">
    <input onChange={inputHandler} list='coinList' required value={input}
      type="text"
      placeholder="Search"
      className="bg-white text-black placeholder-black rounded-2xl px-3 py-3 w-full pr-16 sm:pr-20"/>

      <datalist id='coinList'>{allCoin.map((item,index)=>( <option key={index} value={item.name}></option> ))}</datalist>
    <button
      type="submit"
      className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-2 rounded-lg text-sm sm:text-base"
    > Submit</button>
  </div>
</form>
</div>
  <div className='max-w-[800px] m-auto rounded-[15px] bg-[linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))] text-white mt-10 mx-4 sm:mx-auto overflow-x-auto'>
    <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] min-w-[600px] p-4 py-4 items-center border-b-[#3c3c3c] border-none text-sm sm:text-base'>
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p>24H Change</p>
        <p className='border last:border-none'>Market Cap</p>
    </div>
    {
        displayCoin.slice(0,20).map((items , index)=>(
            <Link to={`/coin/${items.id}`} className='grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr] min-w-[600px] p-4 py-4 items-center border-b-[#3c3c3cY] text-sm sm:text-base' key={index}>
                <p>{items.market_cap_rank}</p>
                <div className='flex items-center gap-2.5'>
                    <img src={items.image} alt="" className='w-6 sm:w-9'/>
                    <p className='truncate'>{items.name + " - " + items.symbol}</p>
                </div>
                <p>{currency.symbol} {items.current_price}</p>
                <p className={items.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500" } >{Math.floor(items.price_change_percentage_24h*100)/100}</p>
                <p className='text-right'>{currency.symbol} {items.market_cap.toLocaleString()}</p>
            </Link>
        ))
    }
  </div>
  
  
    </div>
  )
}

export default Home