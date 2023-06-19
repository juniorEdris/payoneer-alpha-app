import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="widescreen:min-h-screen tallscreen:min-h-screen pt-20">
      <div className="grid md:grid-cols-2">
        <div className="bg-[#CEF0FF] rounded-tr-2xl rounded-br-2xl">
          <Image
            className="text-right m-0"
            src={`/assets/images/social/guy.png`}
            width={350}
            height={150}
            priority={true}
            alt={"brands"}
          />
        </div>
        <div className="grid place-content-center p-8 gap-4">
          <div className={`grid gap-2`}>
            <h4 className="text-xl font-semibold">Justin Timberlake</h4>
            <p className="text-sm text-[#7E7E7E]">Product Seller</p>
          </div>
          <div className={``}>
            <p className={`font-medium italic text-lg`}>
              “In 2 years, my business went from just me and my Shop site to 40
              employees, my own fulfillment center and over 22 million dollars
              in revenue.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
