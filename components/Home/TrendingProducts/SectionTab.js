"use client";
import { useState } from "react";

const allTabs = [
  { id: 1, label: "fashion" },
  { id: 2, label: "technology" },
  { id: 3, label: "interior" },
  { id: 4, label: "food & drink" },
];
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("fashion");

  return (
    <section className="">
      <div className="flex gap-[19px] items-center justify-center">
        {allTabs?.map((tab) => (
          <span
            key={tab?.id}
            className={`${
              activeTab === tab?.label
                ? "border-b-4 border-b-dark"
                : "border-b-4 border-b-transparent "
            } capitalize leading-[28px]`}
            role="button"
            tabIndex={0}
            onClick={() => setActiveTab(tab?.label)}
          >
            {tab?.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
