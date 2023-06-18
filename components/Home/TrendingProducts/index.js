import { spectralFont } from "@/app/layout";
import Tabs from "./SectionTab";
import ProductCard from "./TrendingProductCard";

const TrendingProducts = ({ products = [] }) => {
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen py-24">
      <div className="text-center">
        <h1 className={`text-4xl font-bold ${spectralFont.className} mb-1`}>
          Shop Our Trending Products
        </h1>
        <p className="opacity-70 text-lg">
          Life is hard enough already. Let us make it a little easier.
        </p>
      </div>

      <div className="my-5">
        <Tabs />
      </div>

      <div className="my-5 flex gap-2 flex-wrap justify-end">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
