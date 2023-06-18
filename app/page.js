import HeroSection from "@/components/Primary/Home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen grid">
      <HeroSection />
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Trending Products</h1>
      </section>
      <section className="widescreen:min-h-screen tallscreen:min-h-screen">
        <h1 className="text-5xl">Shob by Category</h1>
      </section>
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
