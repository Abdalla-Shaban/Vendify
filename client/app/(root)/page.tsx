import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Featuers from "@/components/sections/Featuers";
import BestProducts from "@/components/sections/BestProducts";
import Products from "@/components/sections/Products";
import Statistics from "@/components/sections/Statistics";
export default function Home() {
  const isAuth = true;
  return (
    <div className="flex flex-col">
      {isAuth ? (
        <>
          <Statistics />
        </>
      ) : (
        <>
          <Hero />
          <About />
          <Featuers />
        </>
      )}
      <BestProducts />
      <Products />
    </div>
  );
}
