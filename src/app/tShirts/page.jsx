import React from 'react'
import productJson from '@/data/json/tshirts.json'

// card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Link from 'next/link';


const tShirtsPage = () => {
    return (
        <div className='bg-neutral-900 py-10'>
            <div className='flex gap-5 justify-center items-center flex-wrap'>
                {Object.entries(productJson).map(([product, productDetails]) => (
                    <Card key={product} sx={{ maxWidth: 384, minWidth: 345 }}>
                        <Link href={`/tShirts/${product}`}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={productDetails['imageUrl']}
                                    alt={productDetails['name']}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {productDetails['name']}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {productDetails['description']}
                                    </Typography>

                                    <Typography variant="body2">{productDetails['price']}</Typography>



                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="medium" className='bg-yellow-500 text-white'>
                                    Add to Cart
                                </Button>

                                <Button size='medium' className='bg-green-500 text-white'>
Buy Now
                                </Button>
                            </CardActions>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default tShirtsPage
