import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="">
      <Link href={`/`}>
        <div className="trending-product-card  bg-[#EBF9FF] hover:bg-[#e9ebf0] transition duration-75">
          <div className="p-4">
            <div className="h-36 w-full relative overflow-hidden rounded-[25px]">
              <Image
                className="object-cover"
                src={product?.thumbnail}
                fill={true}
                priority={false}
                alt={product?.title}
              />
            </div>
          </div>
          <div className="grid gap-2 p-4">
            <h3 className="text-[22px] font-semibold min-h-[66px]">
              {product?.title.substring(0, 25)}
            </h3>
            <p className="text-[#475E68]">Starting</p>
            <p className="text-price-orange">${product?.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
