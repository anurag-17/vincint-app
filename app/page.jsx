"use client";
import React, { useState, useEffect } from "react";

import FollowUs from "@/component/followUs";
import Footer from "@/component/footer";
import Herosection from "@/component/hero";
import NewProduct from "@/component/new-product/newProduct";
import NewProduct2 from "@/component/new-product/newProduct2";
import Reviews from "@/component/reviews";
import Section2 from "@/component/section2";

import AOS from 'aos';


export const newProductItems = [
  {
    id: 1,
    url: "/images/watch1.webp",
    color: "brown",
    isCart: true,
    price: 149.99, // Price in Euros (€)
    discountedPrice: 129.99, // Discounted price in Euros (€)
    size: "38mm", // Size of the watch
    fitsWristSizes: "14cm - 18cm", // Fits wrists in sizes
    material: "Leather", // Material of the watch
    lugWidth: "20mm", // Lug width
    buckleType: "Tang buckle" // Buckle type
  },
  {
    id: 2,
    url: "/images/watch2.webp",
    color: "blue",
    price: 179.99,
    discountedPrice: 159.99,
    size: "44 mm",
    fitsWristSizes: "17cm - 21cm",
    material: "Stainless steel",
    lugWidth: "24 mm",
    buckleType: "Folding clasp"
  },
  {
    id: 3,
    url: "/images/watch3.webp",
    color: "black",
    price: 199.99,
    discountedPrice: 189.99,
    size: "42mm",
    fitsWristSizes: "16cm - 20cm",
    material: "Stainless steel",
    lugWidth: "22mm",
    buckleType: "Deployment clasp"
  },
  {
    id: 4,
    url: "/images/watch4.webp",
    color: "orange",
    price: 159.99,
    discountedPrice: 139.99,
    size: "40mm",
    fitsWristSizes: "15cm - 19cm",
    material: "Titanium",
    lugWidth: "21mm",
    buckleType: "Deployment clasp"
  },
];


export const bestSellersItems = [
  {
    id: 1,
    url: "/images/watch3.webp",
    color: "black",
    price: 199.99, // Price in Euros (€)
    discountedPrice: 189.99, // Discounted price in Euros (€)
    size: "42mm", // Size of the watch
    fitsWristSizes: "16cm - 20cm", // Fits wrists in sizes
    material: "Stainless steel", // Material of the watch
    lugWidth: "22mm", // Lug width
    buckleType: "Deployment clasp" // Buckle type
  },
  {
    id: 2,
    url: "/images/watch1.webp",
    color: "brown",
    price: 149.99,
    discountedPrice: 129.99,
    size: "38mm",
    fitsWristSizes: "14cm - 18cm",
    material: "Leather",
    lugWidth: "20mm",
    buckleType: "Tang buckle"
  },
  {
    id: 3,
    url: "/images/watch4.webp",
    color: "orange",
    price: 159.99,
    discountedPrice: 139.99,
    size: "40mm",
    fitsWristSizes: "15cm - 19cm",
    material: "Titanium",
    lugWidth: "21mm",
    buckleType: "Deployment clasp"
  },
  {
    id: 4,
    url: "/images/watch2.webp",
    color: "blue",
    price: 179.99,
    discountedPrice: 159.99,
    size: "44mm",
    fitsWristSizes: "17cm - 21cm",
    material: "Stainless steel",
    lugWidth: "24mm",
    buckleType: "Folding clasp"
  },
];


;

export default function Home() {


  useEffect(() => {
    AOS.init({
      once: false
    });
  }, []);


  return (
    <>
      <Herosection />
      <Section2 />
      <NewProduct cardItems={newProductItems}  title="new products"/>
      <NewProduct2 />
      <NewProduct cardItems={bestSellersItems} title="best Sellers" />
      <Reviews />
      <FollowUs/>
    </>
  );
}
