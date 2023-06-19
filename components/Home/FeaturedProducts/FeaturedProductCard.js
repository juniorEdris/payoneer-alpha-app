import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <section className="grid gap-5">
      <Link href={`/`}>
        <div className="featured-product-card">
          <div className="">
            <div className="h-[245px] w-full relative overflow-hidden rounded-[25px] border border-[#f5f5f5]">
              <span className="uppercase absolute top-6 left-6 bg-blue-600 z-10 p-1 text-white text-xs font-semibold  rounded-[4px] shadow-sm">
                Pre-order
              </span>
              <Image
                className="object-cover"
                src={product?.thumbnail}
                fill={true}
                priority={false}
                alt={product?.title}
              />
            </div>
          </div>
          <div className="grid gap-3 p-4 justify-items-center">
            <h3 className="text-2xl font-semibold text-[#3B3849]">
              {product?.brand}
            </h3>
            <p className="text-[#3B3849] uppercase">{product?.category}</p>
            <p className="text-[#0E4B80] text-lg font-semibold">
              ${product?.price.toFixed(2)} USD
            </p>
          </div>
        </div>
      </Link>
      <div className="text-center">
        <Link
          href={`/`}
          className="uppercase text-lg font-semibold px-5 py-2 text-light bg-[#001439] rounded-[24px] max-w-[200px] text-center place-self-center inline-block"
        >
          order now
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
