import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3 lg:gap-5">
        <li className="hidden md:block">
          <Link
            href={`/`}
            className="text-sm md:text-base flex items-center gap-1"
          >
            <FaRegUser className=" text-sm md:text-base lg:text-xl" />
            Account
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            href={`/`}
            className="text-sm md:text-base flex items-center gap-1"
          >
            <AiOutlineHeart className=" text-sm md:text-base lg:text-xl" />
            My items
          </Link>
        </li>
        <li className="hidden md:block relative">
          <Link href={`/`}>
            <IoBagOutline className="text-sm md:text-base lg:text-xl" />
            <span className="flex items-center justify-center h-2 w-2 absolute -top-1 -right-2 text-[9px] p-2 bg-counter-yellow text-light rounded-full">
              1
            </span>
          </Link>
        </li>
        <li className="">
          <span role="button" tabIndex={0}>
            <RxHamburgerMenu className="text-base lg:text-xl font-black" />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
