import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";

import StarIcon from "@mui/icons-material/Star";


const Pro_Deatils = () => {
  const params = useParams();

  const product_arr = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      img_url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      img_url:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      img_url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slrating: 4.6",
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      img_url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      img_url:
        "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      img_url:
        "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      img_url:
        "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      img_url:
        "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      img_url: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      img_url: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      img_url: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      img_url: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      img_url: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
      category: "electronics",
      img_url: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
      category: "women's clothing",
      img_url: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      img_url: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
      category: "women's clothing",
      img_url: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      img_url: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
      id: 19,
      img_url: [
        "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1662640953/N53346840A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1662640954/N53346840A_3.jpg?format=avif&width=240",
      ],
      title:
        "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 20,
      img_url: [
        "https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1669724769/N40633047A_7.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1654846188/N40633047A_8.jpg?format=avif&width=240",
      ],
      title: "PlayStation 5 Console (Disc Version) With Controller",
      rating: 4.5,
      sold: 232,
      dis_price: 1820.0,
      orignal_price: 3999.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 21,
      img_url: [
        "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1663322644/N43241184A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1663322645/N43241184A_5.jpg?format=avif&width=240",
      ],
      title:
        "Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black",
      rating: 3.5,
      sold: 232,
      dis_price: 16.5,
      orignal_price: 17.5,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 22,
      img_url: [
        "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1680512168/N46554630A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1680512168/N46554630A_4.jpg?format=avif&width=240",
      ],
      title: "Unlimited Double Touch Liquid Lip Colour 103 Natural Rose",
      rating: 3.6,
      sold: 232,
      dis_price: 69.0,
      orignal_price: 72.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 23,
      img_url: [
        "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1667829014/N41247610A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1667829014/N41247610A_4.jpg?format=avif&width=240",
      ],
      title: "iPhone 11 White 128GB 4G LTE (2020 - Slim Packing) -",
      rating: 4,
      sold: 232,
      dis_price: 2000,
      orignal_price: 2200,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 24,
      img_url: [
        "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1662640953/N53346840A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1662640954/N53346840A_3.jpg?format=avif&width=240",
      ],
      title:
        "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
      rating: 4.6,
      sold: 232,
      dis_price: 4777.0,
      orignal_price: 5099.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 25,
      img_url: [
        "https://f.nooncdn.com/p/v1668695010/N47589524A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668695010/N47589524A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668695010/N47589524A_4.jpg?format=avif&width=240",
      ],
      title: "Front Load Washing Machine 240.0 W WFPV7012MT Titanium",
      rating: 4.3,
      sold: 232,
      dis_price: 748.0,
      orignal_price: 1000.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 26,
      img_url: [
        "https://f.nooncdn.com/p/v1691397637/N53063275A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1691397639/N53063275A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1691397639/N53063275A_3.jpg?format=avif&width=240",
      ],
      title: "Front Load Washing Machine With Lunar Dial, 1000 RPM",
      rating: 3.5,
      sold: 232,
      dis_price: 643.2,
      orignal_price: 800.2,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 27,
      img_url: [
        "https://f.nooncdn.com/p/v1668679670/N25281642A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668679671/N25281642A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1668679670/N25281642A_4.jpg?format=avif&width=240",
      ],
      title: "Portable Handheld Vacuum Cleaner 400-",
      rating: 4.3,
      sold: 232,
      dis_price: 95.15,
      orignal_price: 110.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 28,
      img_url: [
        "https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068689/a2c11b8b-8aa9-45a7-8897-2eceb6a7ff35.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068690/e68bb362-a9fe-4ebd-88ef-743e15700099.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N31867146A/45/_/1701068690/790348a1-876c-4cc4-95e9-cdeb87435ef6.jpg?format=avif&width=240",
      ],
      title: "Digital Air Fryer With 3.5 L Total Capacity",
      rating: 3.9,
      sold: 232,
      dis_price: 159.0,
      orignal_price: 200.5,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 29,
      img_url: [
        "https://f.nooncdn.com/p/v1652078576/N43431945A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1652078576/N43431945A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1652078576/N43431945A_3.jpg?format=avif&width=240",
      ],
      title: "Sandwich Maker And 5 In 1 Snack Heater -",
      rating: 3.8,
      sold: 232,
      dis_price: 69.0,
      orignal_price: 100.5,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 30,
      img_url: [
        "https://f.nooncdn.com/p/pnsku/N53386420A/45/_/1705483237/1b6bcd00-894e-46dd-b588-fd66c1b8a912.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N44694097A/45/_/1699348672/190a87a7-8341-47b3-8d22-76a8f2de2ecd.jpg?format=avif&width=240 ",
        "https://f.nooncdn.com/p/pnsku/N44694097A/45/_/1699348918/b40064f8-a429-42ea-9967-e0d71117cdc3.jpg?format=avif&width=240",
      ],
      title: "130L Gross - 90L Net Capacity Single Door",
      rating: 4.1,
      sold: 232,
      dis_price: 369.0,
      orignal_price: 400.54,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 31,
      img_url: [
        "https://f.nooncdn.com/p/pnsku/N53398626A/45/_/1704184800/ae264b78-d1fe-4964-b7a3-4549706e7ee5.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1685162023/N53398626A_5.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1685162022/N53398626A_10.jpg?format=avif&width=240",
      ],
      title: "65 Inch Crystal UHD 4K Smart TV 2023",

      rating: 4.4,
      sold: 232,
      dis_price: 1610.0,
      orignal_price: 2999.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 32,
      img_url: [
        "https://f.nooncdn.com/p/v1690369167/N53422649A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1690369167/N53422649A_4.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1690369167/N53422649A_3.jpg?format=avif&width=240",
      ],
      title: "Cinema SB270 2.1 Channel Soundbar With Wireless Subwoofer",
      rating: 4.4,
      sold: 232,
      dis_price: 599.0,
      orignal_price: 899.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 33,
      img_url: [
        "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424523/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424367/4bf95534-f5d5-43fa-afea-a5d87d166854.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424298/57e8e677-b790-4e08-b0f3-abf97c1405df.jpg?format=avif&width=240",
      ],
      title: "VIDAA U6 4K Smart TV, 70 Inch UHD E6K With Dolby Vision",
      rating: 4.7,
      sold: 232,
      dis_price: 1599.0,
      orignal_price: 3999.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 34,
      img_url: [
        "https://f.nooncdn.com/p/v1684160503/N53403939A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1684160504/N53403939A_4.jpg?format=avif&width=240",

        "https://f.nooncdn.com/p/v1684160503/N53403939A_2.jpg?format=avif&width=240",
      ],
      title: "2.0CH Wireless Soundbar With Night Mode",
      rating: 3.5,
      sold: 232,
      dis_price: 2000,
      orignal_price: 2200,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 35,
      img_url: [
        "https://f.nooncdn.com/p/v1659335490/N53338272A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1659335490/N53338272A_3.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1659335490/N53338272A_4.jpg?format=avif&width=240",
      ],
      title: "50 Inch UHD 4K Smart Android Led TV ",
      rating: 4.3,
      sold: 232,
      dis_price: 849.0,
      orignal_price: 2599.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
    {
      id: 36,
      img_url: [
        "https://f.nooncdn.com/p/v1648716995/N52894685A_2.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1648716996/N52894685A_1.jpg?format=avif&width=240",
        "https://f.nooncdn.com/p/v1648978760/N52894685A_5.jpg?format=avif&width=240",
      ],
      title: "55 Inch 4K UHD LED Smart Android TV",
      rating: 4.2,
      sold: 232,
      dis_price: 1099.0,
      orignal_price: 1200.0,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
    },
  ];
  const FilteredData = product_arr.filter((CurrentObj) => {
    return CurrentObj.id == params.id;
  });
  console.log(FilteredData);
  // const {id, img_url, title, rating, sold, dis_price, orignal_price } = FilteredData

  return (
    
    <div style={{background:"#fff"}}>
        <Navbar2/>
      {FilteredData.map((product, index) => {
        const { id, img_url, title, rating, sold, dis_price, orignal_price,description,category } =
          product;

        return (
        <>


<div className="container py-5">
    <div className="row">
        <div className="col-md-6  text-center">
     <img src={img_url} style={{height:500,alignItems:"center"}} alt="" />
        </div>
        <div className="col-md-6 p-5">
        <div key={index} className="container">
          <h5>{title}</h5>
          <p>Model Number : HY-908B</p>
          <Typography
              style={{ fontSize: 13, marginBottom: 10 }}
              color="text.secondary"
            >
              Rating: {rating}
              <StarIcon sx={{ height: 16, color: "green" }} />
            </Typography>
          <p>{sold} unit Sold</p>
          <div><p style={{color: "gray",textDecoration: "line-through"}}>AED : {orignal_price}</p></div>
          <h5 style={{fontWeight: "bold"}}>AED : {dis_price}</h5>
          <p>{category}</p>
          <p  style={{ fontSize: 13, marginBottom: 10 }}>{description}</p>
          </div>
        </div>
    </div>
</div>
         
          <Footer/>
          </>
          );
      })}
    </div>
  );
};

export default Pro_Deatils;
