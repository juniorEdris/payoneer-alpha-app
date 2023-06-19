import { spectralFont } from "@/app/layout";
import Container from "@/components/Primary/Container";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const BrandSection = () => {
  const brands = [
    { id: 1, image: "/assets/images/brands/adidas.png" },
    { id: 2, image: "/assets/images/brands/apple.png" },
    { id: 3, image: "/assets/images/brands/bmw.png" },
    { id: 4, image: "/assets/images/brands/fila.png" },
    { id: 5, image: "/assets/images/brands/mi.png" },
    { id: 6, image: "/assets/images/brands/nike.png" },
  ];
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen py-12 bg-secondary-bg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 place-content-center min-h-screen">
          <div className="bg-brand bg-no-repeat grid grid-cols-2 lg:grid-cols-3 gap-4">
            {brands?.map((item) => (
              <div className="" key={item?.id}>
                <div className="h-[208px] w-[208px] relative overflow-hidden rounded-[12px] border border-card-border">
                  <Image
                    className="object-cover"
                    src={item.image}
                    fill={true}
                    priority={false}
                    alt={"brands"}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end gap-2 justify-center">
            <h1
              className={`text-left text-4xl font-bold ${spectralFont.className} max-w-[390px]`}
            >
              Explore Most Popular Brands
            </h1>
            <p className="text-left text-lg max-w-[384px]">
              Life is hard enough already. Let us make it a little easier.
            </p>
            <div className="text-left max-w-[382px] mt-9">
              <Link
                href={`/`}
                className="flex items-center gap-1 hover:opacity-75 transition duration-75"
              >
                See all <BiRightArrowAlt />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrandSection;
