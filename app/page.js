import CategorySection from "@/components/Home/CategoryProducts.js";
import HeroSection from "@/components/Home/HeroSection";
import TrendingProducts from "@/components/Home/TrendingProducts";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  // console.log({ data: data?.products });
  return (
    <main className="min-h-screen grid">
      <HeroSection />
      <TrendingProducts products={data?.products?.slice(0, 10)} />
      <CategorySection products={data?.products?.slice(11, 20)} />
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Featured Product</h1>
      </section>
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Explore Most Popular Brands</h1>
      </section>
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Sell Easily on Socialmedia</h1>
      </section>
    </main>
  );
}
