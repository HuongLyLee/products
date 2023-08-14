import React, { useState } from 'react';
import { clothingData } from '../common/data.ts';
import Button from '@mui/material/Button';

function App() {
    const [clothings, setClothings] = useState(clothingData);
    const [filteredClothings, setFilteredClothings] = useState(clothings);

    const men = clothings.filter(clothing => clothing.category === `men's clothing`);
    const jewelery = clothings.filter(clothing => clothing.category === `jewelery`);
    const electronics = clothings.filter(clothing => clothing.category === `electronics`);
    const women = clothings.filter(clothing => clothing.category === `women's clothing`);

    const _ = require('lodash');
    const sortedAsc = _.orderBy(filteredClothings, ['price'], ['asc']);
    const sortedDesc = _.orderBy(filteredClothings, ['price'], ['desc']);

    const buttonOnclick = (category) => {
        if (category === 'men') {
            setFilteredClothings(men);
        } else if (category === 'jewelery') {
            setFilteredClothings(jewelery);
        } else if (category === 'electronics') {
            setFilteredClothings(electronics);
        } else if (category === 'women') {
            setFilteredClothings(women);
        } else if (category === 'asc') {
            setFilteredClothings(sortedAsc);
        } else if (category === 'desc') {
            setFilteredClothings(sortedDesc);
        }
    }

    return (
        <div>
            <div className='flex gap-4'>
                <Button variant="outlined" onClick={() => buttonOnclick('men')}> men's clothing </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('jewelery')}> jewelery </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('electronics')}> electronics </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('women')}> women's clothing </Button>

                <Button variant="outlined" onClick={() => buttonOnclick('asc')}> Increase </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('desc')}> Decrease </Button>

            </div>

            <div >
                {filteredClothings.map(clothing => (
                    <div key={clothing.id}>
                        <img src={clothing.image} alt={clothing.title} className='h-[200px] w-[150px]' />
                        <h2> {clothing.title} </h2>
                        <p> Price: ${clothing.price} </p>
                        <p> {clothing.description} </p>
                        <p> Category: {clothing.category} </p>
                        <p> Rating: {clothing.rating.rate} ({clothing.rating.count} reviews) </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
