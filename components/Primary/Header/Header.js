import Image from "next/image";
import Container from "../Container";
import Search from "./Search";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <section className="bg-header-blue min-h-[78px] flex items-center">
      <Container>
        <section className="grid grid-cols-2 md:grid-cols-[280px_1fr_1fr] py-3 text-light">
          <div className="md:place-self-center">
            <Link href="/">
              <Image
                src={`/assets/images/logo.png`}
                alt="logo"
                height={26}
                width={96}
                priority={true}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <Search />
          </div>
          <div className="flex items-center justify-end md:block md:place-self-center">
            <Nav />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Header;
