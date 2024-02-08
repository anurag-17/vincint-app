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


export default function Home() {


  useEffect(() => {
    AOS.init({
      once: false
    });
  }, []);


  const newProductItems = [
    {
      id: 1,
      url: "/images/watch1.webp",
      color: "brown",
      isCart : true
    },
    {
      id: 2,
      url: "/images/watch2.webp",
      color: "blue",
    },
    {
      id: 3,
      url: "/images/watch3.webp",
      color: "black",
    },
    {
      id: 3,
      url: "/images/watch4.webp",
      color: "orange",
    },
  ];

  const bestSellersItems = [
    {
      id: 1,
      url: "/images/watch3.webp",
      color: "black",
    },
    {
      id: 2,
      url: "/images/watch1.webp",
      color: "brown",
    },
    {
      id: 3,
      url: "/images/watch4.webp",
      color: "orange",
    },
    {
      id: 3,
      url: "/images/watch2.webp",
      color: "blue",
    },
  ];

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
