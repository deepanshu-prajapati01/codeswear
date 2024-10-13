import React from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Typography, Button } from "@mui/material"
import Link from "next/link";

export default function Home() {

  const ourProducts = [
    {
      heading: "Shirt",
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/1/m/xl-formal-shirt-metronaut-original-imah3g7msz26ehfg.jpeg?q=70',
      productDescription: "This is a shirt made from the finest materials.",
      redirectUrl: "/tShirts"
    },
    {
      heading: "Mugs",
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/mug/9/a/j/stainless-steel-coffee-mug-with-lid-300-ml-pack-of-2-navy-blue-original-imahyywq355d6f3d.jpeg?q=70',
      productDescription: "lorem Ipsum is simply dummy text of the printing and typesetting industry",
      redirectUrl: "/mugs"

    },
    {
      heading: "Hoodies",
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-t-shirt/j/m/q/l-t65-maroon-d1-shopsy-teemex-original-imahf5nhaftzxqfz.jpeg?q=70',
      productDescription: "This is a hoodie made from the finest materials.",
      redirectUrl: "/hoodies"

    }
  ]



  return (
    <main className=" text-black py-8 px-4 flex flex-col justify-evenly items-center">

      <section className="flex flex-col py-12 justify-center items-center">
        <div className="flex flex-col justify-center items-center my-5" id="text">
          <Typography className="text-white text-center" variant="h3">
            Welcome to CodesWear
          </Typography>

          <Typography className="text-white text-center" variant="h5">
            Wear the code and have fun
          </Typography>
        </div>
        <Button variant="contained" className="bg-pink-500">Get Started</Button>
      </section>


      <section className="py-16 ">
        <div className="text flex flex-col justify-center items-center">

          <Typography className="text-white" variant="h4">
            Our Latest Products
          </Typography>

          <div className="flex gap-5 justify-around my-5 flex-wrap">

            {ourProducts.map((product) => (
              <Card key={product['heading']} sx={{ maxWidth: 320 }}>
                <Link className='' href={product['redirectUrl']}>
                  <CardActionArea>
                    {/* <div className="h-64"> */}
                    <CardMedia
                      component="img"
                      image={product['imageUrl']}
                      alt={product['heading']}
                      className="object-contain object-center w-96 h-96 align-middle"
                    />
                    {/* </div> */}

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product['heading']}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product['productDescription']}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}

          </div>

        </div>

      </section>

      <section className="py-16">
        <div className="">
          <Typography className="text-white text-center" variant="h4">
            Ready to start journaling?
          </Typography>

          <Typography className="text-gray-100 text-center" variant="h5">
            Sign up now and keep track of your daily life!
          </Typography>

        </div>
      </section>
    </main>
  )
}
