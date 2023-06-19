import { spectralFont } from "@/app/layout";
import Container from "@/components/Primary/Container";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const SocialSection = () => {
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen py-12 bg-secondary-bg">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 place-content-center min-h-screen">
          <div className="flex flex-col gap-2 justify-center">
            <h1
              className={`text-left text-4xl font-bold ${spectralFont.className}`}
            >
              Sell Easily on Socialmedia
            </h1>
            <p className="text-left text-lg  max-w-[384px]">
              Life is hard enough already. Let us make it a little easier.
            </p>
            <div className="mt-9 text-left">
              <Link
                href={`/`}
                className="flex items-center gap-1 hover:opacity-75 transition duration-75"
              >
                See all <BiRightArrowAlt />
              </Link>
            </div>
          </div>
          <div className="grid">
            <div className="">
              <div className="h-[718px] w-[718px] relative overflow-hidden">
                <Image
                  className="object-cover"
                  src={`/assets/images/social/sc-bg.png`}
                  fill={true}
                  priority={false}
                  alt={"social"}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialSection;
