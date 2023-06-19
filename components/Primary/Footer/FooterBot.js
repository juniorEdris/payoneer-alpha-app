import Link from "next/link";
import Container from "../Container";

const Bottom = () => {
  return (
    <section className="bg-[#232347] py-2 text-light">
      <Container>
        <div className="flex items-center justify-between">
          <div className="">
            <p>&copy; 2021-2023 SnipShop.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href={`/`}>Terms of use</Link>
            <Link href={`/`}>Privacy</Link>
            <Link href={`/`}>Interest-based ads</Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bottom;
