
import Layout from "../../components/layout/Layout"

import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCards from "../../components/productCards/ProductCards";
import Track from "../../components/track/Track";



function Home() {


  
  return (
    <Layout>
      
      <HeroSection/>
   
      <Filter/>
      <ProductCards/>
      <Track/>
  </Layout>
  )
}
 
export default Home