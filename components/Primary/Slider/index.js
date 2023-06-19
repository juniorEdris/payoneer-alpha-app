/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
"use client";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { LeftNav, RightNav } from "@/utils";
import dynamic from "next/dynamic";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export default function Slider({ children, options }) {
  options = {
    ...options,
    nav: true,

    navText: [
      '<span class="text-xl flex items-center justify-center rounded-full h-12 w-12 p-4 bg-[#001439] text-light mx-4">&lsaquo;</span>',
      '<span class="text-xl flex items-center justify-center rounded-full h-12 w-12 p-4 bg-[#001439] text-light mx-4">&rsaquo;</span>',
    ],
  };
  //    navText: [
  //   '<i class="fa fa-angle-left"></i>',"<LeftNav />", "<RightNav />"
  //   '<i class="fa fa-angle-right"></i>',
  // ],
  return (
    <div>
      <OwlCarousel {...options}>{children}</OwlCarousel>
    </div>
  );
}
