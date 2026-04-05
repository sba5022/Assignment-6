


import { Suspense, useState } from 'react'
import './App.css'
import Ban from './Components/Bans/Ban'


import NavBar from './Components/NavBar'
import Product from './Components/Products/Product'
import GetStart from './Components/Get/GetStart'
import { ToastContainer } from 'react-toastify'
import Price from './Components/PricingSection/Price'
import Footer from './Components/Footer/Footer'

const fetchProducts= async()=>{
const res = await fetch('/data.json')
return res.json();


}



function App() {
  
  const productPromise=fetchProducts();
  const [badge, setBadge] = useState(0);
  return (
    <>
 <NavBar badge={badge}/>
<Ban/>
<Suspense fallback={ <span className="loading loading-spinner loading-xl"></span>}>
  <Product  productPromise={productPromise} setBadge={setBadge} badge={badge}/> 
</Suspense>
 <ToastContainer />
 
<GetStart/>
<Price/>
<Footer/>
</>
  )
}

export default App


