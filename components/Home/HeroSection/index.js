import Image from "next/image";
import Container from "../../Primary/Container";
import Link from "next/link";
import { spectralFont } from "@/app/layout";

const HeroSection = () => {
  const sliderImages = [
    {
      id: 1,
      image: "/assets/images/hero/product-1.png",
      title: "Fuji 14mm Lens",
    },
    {
      id: 2,
      image: "/assets/images/hero/product-2.png",
      title: "Camera Stand",
    },
  ];
  return (
    <section className="bg-hero bg-no-repeat bg-center">
      <Container>
        <div className="grid md:grid-cols-[1fr_auto]">
          <div className="grid grid-cols-2">
            <div className="grid gap-1 place-content-center min-h-screen">
              <p className={`text-sm ${spectralFont.className}`}>
                100% QUALITY, 100% SATISFACTION
              </p>
              <h1 className="text-[68px] leading-[74px] font-extrabold">
                Where the world comes to shop.
              </h1>
              <p className="md:text-lg opacity-70">
                Life is hard enough already. Let us make it a little easier,
                Vision of Snipshop for a better outlook.
              </p>

              <div className="py-4 flex items-center justify-between">
                <div>
                  <Link
                    href={"/shop"}
                    className="uppercase bg-button-bg text-light text-xs py-3 px-8 rounded-full"
                  >
                    Shop now
                  </Link>
                </div>

                <div>
                  <p className="text-sm text-secondary-dark font-medium">
                    Starts from
                  </p>
                  <h3 className="text-3xl text-price-dark font-semibold">
                    110.00$
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid place-content-center min-h-screen">
              <Image
                src={`/assets/images/hero/hero.png`}
                alt="image"
                height={418}
                width={418}
                priority={true}
              />
            </div>
          </div>
          <div className="grid place-content-center min-h-screen">
            {sliderImages?.map((image) => (
              <div key={image?.id} className="grid gap-2 py-2">
                <Image
                  src={image?.image}
                  height={130}
                  width={130}
                  alt="image"
                />
                <p className="text-sm font-medium text-center">
                  {image?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
