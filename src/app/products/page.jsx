import React, { lazy } from 'react'
// const data = lazy(() => import('@/data/json/dummy.json'));
const data = await import('@/data/json/dummy.json');
const productJson = data.products
console.log(productJson)
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
            <div className='flex gap-5 justify-center align-top  flex-wrap'>
                {Object.entries(productJson).map(([product, productDetails]) => (
                    <Card key={product['id']} sx={{ maxWidth: 384, minWidth: 345 }}>
                        <Link href={`/products/${product}`}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={productDetails['thumbnail']}
                                    alt={productDetails['title']}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {productDetails['title']}
                                    </Typography>

                                    <Typography className='my-2 font-light'>Brand : {productDetails['brand']}</Typography>

                                    <Typography variant="body" sx={{ color: 'text.secondary' }}>
                                        {productDetails['description']}
                                    </Typography>

                                    <Typography className='font-semibold' variant="body2">Amount: ${productDetails['price']}</Typography>



                                </CardContent>
                            </CardActionArea>
                        </Link>

                        <CardActions>
                            <Button size="medium" className='bg-yellow-500 text-white'>
                                Add to Cart
                            </Button>

                            <Button size='medium' className='bg-green-500 text-white'>
                                Buy Now
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default tShirtsPage
