"use client";
import React, { useState } from "react";

const ArticleTabsBar = () => {
  const [activeTab, setActiveTab] = useState("Activités");
  const articleTags: { name: string }[] = [
    {
      name: "Activités",
    },
    {
      name: "Général",
    },
  ];
  return (
    <div className="w-full max-w-[80rem] flex gap-4 my-6 md:my-10 mx-auto">
      {articleTags.map((tab) => (
        <p
          onClick={() => {
            setActiveTab(tab.name);
          }}
          className={`${
            activeTab === tab.name
              ? "bg-accent text-primary"
              : "bg-[#E8E8E8] text-primary"
          } w-max flex items-center px-[0.5rem] py-[0.5rem] cursor-pointer`}
        >
          {tab.name}
        </p>
      ))}
    </div>
  );
};

export default ArticleTabsBar;
