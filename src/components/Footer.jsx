import React from "react";

const Footer = () => {
  return (
    <footer className="md:min-h-[70vh] min-h-[90vh] w-full md:mt-10 mt-8">
      <h3 className="lg:ml-54 md:ml-10 ml-8 md:text-5xl text-3xl pt-8 md:font-bold">
        iPhone
      </h3>
      <div className="md:flex md:flex-row flex flex-col lg:ml-54 md:ml-8 gap-8 ml-8 mt-8">
        <div>
          <span className="text-sm text-zinc-500">Explore iPhone</span>
          <div className="flex flex-col gap-2 mt-3 text-xl font-semibold">
            <span>Explore All iPhone</span>
            <span>iPhone 17 Pro</span>
            <span>iPhone Air</span>
            <span>iPhone 17</span>
            <span>iPhone 16</span>
            <span>iPhone 16e</span>
          </div>
        </div>
        <div>
          <span className="text-sm text-zinc-500">Shop iPhone</span>
          <div className="flex flex-col gap-2 mt-3 font-semibold text-xs">
            <span>Shop iPhone</span>
            <span>iPhone Accessories</span>
            <span>Apple Trade In</span>
            <span>Ways to Buy</span>
          </div>
        </div>
        <div>
          <span className="text-sm text-zinc-500">More from iPhone</span>
          <div className="flex flex-col gap-2 mt-3 font-semibold text-xs">
            <span>iPhone Support</span>
            <span>AppleCare</span>
            <span>iOS 26</span>
            <span>Apple Intelligence</span>
            <span>Apps by Apple</span>
            <span>iPhone Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
