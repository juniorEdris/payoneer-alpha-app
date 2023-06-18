import { spectralFont } from "@/app/layout";
import ProductCard from "./FeaturedProductCard";
import Container from "@/components/Primary/Container";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen">
      <Container>
        <div className=" mb-5">
          <h1
            className={`text-4xl font-bold text-center ${spectralFont.className}`}
          >
            Featured Product For Pre-Order
          </h1>
          <h5 className="font-medium text-right">Discover Our Products</h5>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
          {products?.map((item) => (
            <ProductCard key={item?.id} product={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;
