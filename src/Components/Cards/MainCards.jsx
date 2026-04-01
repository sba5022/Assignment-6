import React, {  use } from 'react';
import Product from '../Products/Product';

const MainCards = ({cardsPromise}) => {
    // console.log(cardsPromise);
    const cards = use(cardsPromise);
    console.log(cards)
    return (
        <div>
            
            <Product cards={cards}/>
        </div>
    );
};

export default MainCards;