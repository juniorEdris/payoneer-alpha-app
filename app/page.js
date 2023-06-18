import CategorySection from "@/components/Home/CategoryProducts.js";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import HeroSection from "@/components/Home/HeroSection";
import TrendingProducts from "@/components/Home/TrendingProducts";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <main className="min-h-screen grid">
      <HeroSection />
      <TrendingProducts products={data?.products?.slice(0, 10)} />
      <CategorySection products={data?.products?.slice(11, 20)} />
      <FeaturedProducts products={data?.products?.slice(21, 30)} />
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Explore Most Popular Brands</h1>
      </section>
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Sell Easily on Socialmedia</h1>
      </section>
    </main>
  );
}
