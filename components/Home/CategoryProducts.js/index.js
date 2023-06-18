import { spectralFont } from "@/app/layout";
import Container from "@/components/Primary/Container";
import ProductCard from "./CategoryProductCard";

const CategorySection = ({ products }) => {
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen pb-24">
      <Container>
        <div className="mb-16">
          <h1 className={`text-4xl font-bold ${spectralFont.className} mb-1`}>
            Shop by Category
          </h1>
          <p className="opacity-70 text-lg">
            Life is hard enough already. Let us make it a little easier.
          </p>
        </div>

        <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12">
          {products?.map((item) => (
            <ProductCard key={item?.id} product={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
