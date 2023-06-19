import { spectralFont } from "@/app/layout";
import Tabs from "./SectionTab";
import ProductCard from "./TrendingProductCard";
import Container from "@/components/Primary/Container";

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

      <Container>
        <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {/**trending-products-wrapper overflow-x-auto w-screen pb-5 px-9 */}
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrendingProducts;
