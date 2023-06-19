import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const FooterLists = () => {
  return (
    <section className="bg-[#0E4B80] py-8">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-light">
          <div className="">
            <h1 className="text-[22px] font-bold py-4">Shop</h1>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Gift cards
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Snipshop blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-[22px] font-bold py-4">Sell</h1>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Sell on SnipShop
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-[22px] font-bold py-4">About</h1>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  SnipShop, Inc.
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Impact
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-[22px] font-bold py-4">Help</h1>
            <ul className="grid gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Trust and safety
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:opacity-80 transition duration-75"
                >
                  Privacy settings
                </Link>
              </li>
              <li>
                <div className="">
                  <Link
                    href="/"
                    className="border border-light rounded-full py-1 px-3 text-sm inline-flex items-center gap-2"
                  >
                    <Image
                      src={`/assets/images/footer/favicon.png`}
                      height={22}
                      width={22}
                      alt="favicon"
                    />
                    Download the SnipShop App
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterLists;
