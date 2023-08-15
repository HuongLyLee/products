import React, { useState } from 'react';
import { clothingData } from '../common/data.ts';
import Button from '@mui/material/Button';
import ClothingItem from '../components/clothingItem.tsx';

function App() {
    const [clothings, setClothings] = useState(clothingData);
    const [filteredClothings, setFilteredClothings] = useState(clothings);

    console.log(filteredClothings);

    // loc san pham theo category 
    const men = clothings.filter(clothing => clothing.category === `men's clothing`);
    const jewelery = clothings.filter(clothing => clothing.category === `jewelery`);
    const electronics = clothings.filter(clothing => clothing.category === `electronics`);
    const women = clothings.filter(clothing => clothing.category === `women's clothing`);

    // sap xep 
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
        <div className='p-7 '>
            <div className='flex gap-8 pb-6'>
                <Button variant="outlined" onClick={() => buttonOnclick('men')}> men's clothing </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('jewelery')}> jewelery </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('electronics')}> electronics </Button>
                <Button variant="outlined" onClick={() => buttonOnclick('women')}> women's clothing </Button>

                <Button variant="contained" size="small" onClick={() => buttonOnclick('asc')}> Increase </Button>
                <Button variant="contained" size="small" onClick={() => buttonOnclick('desc')}> Decrease </Button>
            </div>

            <div className='pb-6'>
                {filteredClothings.map((clothing) => (
                    <div key={clothing.id} >
                        <ClothingItem
                            image={clothing.image}
                            title={clothing.title}
                            price={clothing.price}
                            description={clothing.description}
                            category={clothing.category}
                            rate={clothing.rating.rate}
                            count={clothing.rating.count}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
