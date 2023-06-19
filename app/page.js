import BrandSection from "@/components/Home/BrandSection";
import CategorySection from "@/components/Home/CategoryProducts.js";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import HeroSection from "@/components/Home/HeroSection";
import SocialSection from "@/components/Home/SocialSection";
import Testimonial from "@/components/Home/Testimonials";
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
      <BrandSection />
      <SocialSection />
      <Testimonial />
    </main>
  );
}
