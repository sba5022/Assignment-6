import React from 'react';
import SelectedProducts from './SelectedProducts';
import { CiShoppingCart } from "react-icons/ci";


const SelectedPro = ({ selectedProducts, setSelectedProducts, setBadge }) => {
    console.log(selectedProducts, 'selected products')
    const totalPrice = selectedProducts.reduce(
        (total, cart) => total + (cart.price),
        0
    );
    const handleCheckout = () => {
        setSelectedProducts([]); // clear all items
        setBadge(0); // reset badge
    };
    const handleDeleteCart = (cart) => {
        console.log(selectedProducts, 'delete cart')
        const filteredProducts = selectedProducts.filter(selectedProducts => selectedProducts.name !== cart.name);
        console.log(filteredProducts, 'filtered products')
        setSelectedProducts(filteredProducts);
        setBadge(prev => prev - 1);
    }
    return (
        <div className='mb-20'>
            {selectedProducts.length === 0 ? <div className='mb-20 '>
                <CiShoppingCart className="text-8xl " />
                <h2 className='text-3xl font-bold '>No products selected</h2>

            </div> : <div>
                {
                    selectedProducts.map(cart => {
                        return (

                            <SelectedProducts cart={cart} handleDeleteCart={handleDeleteCart} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}
                                setBadge={setBadge} />

                        )
                    })
                }
                <div className='flex justify-between gap-10 '>
                    <h2 className='text-3xl font-bold'>Total: </h2>
                    <p>${totalPrice.toFixed(2)}</p>
                </div>
                <button onClick={handleCheckout} className="btn btn-primary">Proceed to Checkout</button>
            </div>
            }

        </div>
    );
};

export default SelectedPro;