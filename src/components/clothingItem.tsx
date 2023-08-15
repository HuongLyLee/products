import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type props = {
    image, title, price, description, category, rate, count
}

function ClothingItem({ image, title, price, description, category, rate, count }: props) {
    return (
        <div>
            {/* <img src={image} alt={title} className='h-[200px] w-[150px]' />
            <h2> {title} </h2>
            <p> Price: ${price} </p>
            <p> {description} </p>
            <p> Category: {category} </p>
            <p> Rating: {rate} ({count} reviews) </p> */}

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="10"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>

    )
}

export default ClothingItem