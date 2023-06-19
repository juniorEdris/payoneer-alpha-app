import { spectralFont } from "@/app/layout";
import ProductCard from "./FeaturedProductCard";
import Container from "@/components/Primary/Container";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const FeaturedProducts = ({ products }) => {
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen py-12">
      <Container>
        <div className=" mb-5">
          <h1
            className={`text-4xl font-bold text-center ${spectralFont.className}`}
          >
            Featured Product For Pre-Order
          </h1>
          <div className="text-right">
            <Link
              href={`/`}
              className="font-medium text-right inline-flex items-center gap-1 hover:opacity-75 transition duration-75"
            >
              Discover Our Products <BiRightArrowAlt />
            </Link>
          </div>
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
