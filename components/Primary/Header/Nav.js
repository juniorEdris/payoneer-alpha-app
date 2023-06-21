"use client";
import { FaRegUser } from "react-icons/fa";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex items-center gap-3 lg:gap-5">
        <li className="hidden md:block">
          <Link
            href={`/`}
            className="text-sm md:text-base flex items-center gap-1"
          >
            <FaRegUser className="text-sm md:text-base lg:text-xl" />
            Account
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            href={`/`}
            className="text-sm md:text-base flex items-center gap-1"
          >
            <FiHeart className="text-base md:text-lg lg:text-2xl" />
            My items
          </Link>
        </li>
        <li className="hidden md:block relative">
          <Link href={`/`}>
            <FiShoppingBag className="text-base md:text-lg lg:text-2xl" />
            <span className="h-3 w-3 flex items-center justify-center absolute -top-1 -right-2 text-[11px] p-2 bg-counter-yellow text-light rounded-full">
              1
            </span>
          </Link>
        </li>
        <li className="">
          <span role="button" tabIndex={0}>
            <RxHamburgerMenu className="text-base md:text-lg lg:text-2xl font-black" />
          </span>
        </li>
        <li className="">
          <span role="button" tabIndex={0}>
            <MdSpaceDashboard
              className="text-base md:text-lg lg:text-2xl font-black"
              onClick={() => router.push("/dashboard")}
              title="dashboard"
            />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
