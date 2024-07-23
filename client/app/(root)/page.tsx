import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Featuers from "@/components/sections/Featuers";
import BestProducts from "@/components/sections/BestProducts";
import Products from "@/components/sections/Products";
export default function Home() {
  return (
    <div className="flex flex-col container">
      <Hero />
      <About />
      <Featuers />
      <BestProducts />
      <Products />
    </div>
  );
}
