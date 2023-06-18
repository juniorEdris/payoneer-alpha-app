import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="trending-product-card">
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
  );
};

export default ProductCard;
