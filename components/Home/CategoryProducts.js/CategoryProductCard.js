import Image from "next/image";
import { BsPlusCircle } from "react-icons/bs";

const ProductCard = ({ product }) => {
  return (
    <div className="category-product-card hover:shadow-hover">
      <div className="p-9">
        <div className="h-[162px] w-full relative overflow-hidden rounded-[12px] border border-card-border">
          <Image
            className="object-cover"
            src={product?.thumbnail}
            fill={true}
            priority={false}
            alt={product?.title}
          />
        </div>
      </div>
      <div className="flex items-center justify-between pr-9 pl-9 pb-9">
        <div className="grid gap-8">
          <h3 className="text-lg font-semibold min-h-[66px]l">
            {product?.title.substring(0, 19)}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-[#475E68] text-lg">
              ${product?.price.toFixed(2)}
            </p>
            <p className="text-price-orange line-through text-lg">
              ${(product?.price - 100 * product?.discountPercentage).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex self-center">
          <div
            className="bg-[#F0F0F0] p-4 rounded-full text-2xl"
            role="button"
            tabIndex={0}
          >
            <BsPlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
