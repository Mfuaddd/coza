import React, { useContext, useEffect } from "react";
import Categories from '../../components/Categories';
import HeaderBottom from '../../components/HeaderBottom';
import HeaderTop from '../../components/HeaderTop';
import Hero from '../../components/Hero';
import Products from "../../components/Products";
import { FetchContext } from "../../contexts/FetchContext";

function Home() {
    const {getData} = useContext(FetchContext)

    useEffect(() => {
        getData()
    }, [])
    
  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <Hero />
      <Categories />
      <Products />
    </>
  );
}

export default Home;
