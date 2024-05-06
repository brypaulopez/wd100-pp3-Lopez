const items = [
    {
        product_no: 1,
        product_name: "All Day Long Tote Chevron Leather Medium",
        product_price: 52640,
        product_desc: "Chanel",
        product_image: "img/product1.webp"
    },
    {
        product_no: 2,
        product_name: "GG Marmont Flap Bag Matelasse Velvet Medium",
        product_price: 63280,
        product_desc: "Gucci",
        product_image: "img/product2.webp"
    },
    {
        product_no: 3,
        product_name: "Parioli Handbag Damier GM",
        product_price: 41440,
        product_desc: "Louis Vuitton",
        product_image: "img/product3.webp"
    },
    {
        product_no: 4,
        product_name: "Speedy Handbag Monogram Canvas 25",
        product_price: 57400,
        product_desc: "Louis Vuitton",
        product_image: "img/product4.webp"
    },
    {
        product_no: 5,
        product_name: "Vintage Diamond CC Flap Bag Quilted Satin Mini",
        product_price: 61040,
        product_desc: "Chanel",
        product_image: "img/product5.webp"
    },
    {
        product_no: 6,
        product_name: "Classic Flap Chain Belt Bag Quilted Caviar Mini",
        product_price: 130200,
        product_desc: "Chanel",
        product_image: "img/product6.webp"
    },
    {
        product_no: 7,
        product_name: "Nigo Duck Bag Monogram Canvas",
        product_price: 358120,
        product_desc: "Louis Vuitton",
        product_image: "img/product7.webp"
    },
    {
        product_no: 8,
        product_name: "Utility Crossbody Bag Monogram Canvas",
        product_price: 131320,
        product_desc: "Louis Vuitton",
        product_image: "img/product8.webp"
    },
    {
        product_no: 9,
        product_name: "Classic Double Flap Bag Quilted Lambskin Medium",
        product_price: 336840,
        product_desc: "Chanel",
        product_image: "img/product9.webp"
    },
    {
        product_no: 10,
        product_name: "Kelly Handbag Ebene Courchevel with Gold Hardware 35",
        product_price: 358680,
        product_desc: "Hermes",
        product_image: "img/product10.jpg"
    },
    {
        product_no: 11,
        product_name: "Expandable Chain Crossbody Bag Intrecciato Nappa Small",
        product_price: 26992,
        product_desc: "Bottega Veneta",
        product_image: "img/product11.webp"
    },
    {
        product_no: 12,
        product_name: "Classic Double Flap Bag Tweed and Quilted Lambskin Medium",
        product_price: 288120,
        product_desc: "Chanel",
        product_image: "img/product12.webp"
    },
];

let cartItems = [];
if(localStorage.getItem("shopping_cart")){
    cartItems = JSON.parse(localStorage.getItem("shopping_cart"));
}