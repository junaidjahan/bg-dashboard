import React, { useState } from "react";
import AboutMe from "./Admin/AboutMe";

const Tabs = () => {
  const [open, setOpen] = useState("about-me");

  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="rounded-[10px] bg-white p-6 shadow-card">
              <div className="border-b border-stroke">
                <div className="-mx-5 flex flex-col md:flex-row">
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("about-me")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-[#8469f4] hover:text-[#8469f4] ${
                        open === "about-me"
                          ? "text-primary border-[#8469f4]"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      About me
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("my-matches")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-[#8469f4] hover:text-[#8469f4] ${
                        open === "my-matches"
                          ? "text-primary border-[#8469f4]"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      My Macthes
                    </button>
                  </div>
                  <div className="px-5">
                    <button
                      onClick={() => handleTabOpen("settings")}
                      className={`-mb-[1px] w-full border-b-2 py-2 text-base font-medium text-black hover:border-[#8469f4] hover:text-[#8469f4] ${
                        open === "settings"
                          ? "text-primary border-[#8469f4]"
                          : "border-stroke md:border-transparent"
                      }`}
                    >
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            { open == 'about-me' ? <AboutMe/> : '' }
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;

const TabContent = ({ open, tabCategory, details,children }) => {
  return (
    <div>
      <div
        className={`mt-8 text-base text-body-color ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {children}
      </div>
    </div>
  );
};
