

import { Suspense } from 'react'
import './App.css'
import Ban from './Components/Bans/Ban'
import Card from './Components/Cards/Card'
import MainCards from './Components/Cards/MainCards'


import NavBar from './Components/NavBar'
import Product from './Components/Products/Product'
import GetStart from './Components/Get/GetStart'
const fetchCard = async()=>{
  // const res = await fetch('/data.json');
 const res = fetch('/data.json').then(res => res.json())
return res;
}
function App() {
  const cardsPromise = fetchCard();
  
  return (
    <>
 <NavBar/>
<Ban/>
<Card/>
<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
<MainCards cardsPromise={cardsPromise}/>
</Suspense>
<GetStart/>
</>
  )
}

export default App
