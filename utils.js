import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const NavButton = ({ Icon }) => (
  <span className="h-5 w-5 p-2 bg-[#001439] text-light">{<Icon />}</span>
);

export const RightNav = () => <NavButton Icon={IoIosArrowForward} />;

export const LeftNav = () => <NavButton Icon={IoIosArrowBack} />;
