import React from 'react'
import HomeSlider from '../(componant)/HomeSlider/HomeSlider';
import ProductCart from '../(componant)/ProductCart/ProductCart';
// import { useNavigation } from 'next/navigation';

const HomePage = async () => {
    // git Base URL
    const baseURL = process.env.BASE_URL;
  
    // git Products Data form API
    const getAllProducts = async () => {
      const response = await fetch(`${baseURL}/api/v1/products`, {
        next: {
          revalidate: 5,
        },
      });
      const allData = await response.json();
      return allData.data;
    };
    const allData = await getAllProducts();
  
  
    // const nav = useNavigation;
  
  
  
    return (
      <>
        <section className="home relative ">
          {/* silder  */}
            <div className="slider mb-10">
              <HomeSlider />
            </div>
          {/* silder  */}
          <ProductCart allData={allData}/>
        </section>
      </>
    );
  };
  
  export default HomePage;