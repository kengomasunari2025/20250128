import React from "react";
import Header from "./Header/Header";
import SlickSlider from "./SlickSlider/SlickSlider";
import Footer from "./Footer/Footer";
// git clone https://github.com/kengomasunari2025/20250128.git
// cd 20250128
// git config --global user.name "Your Name"
// git config --global user.email "your_email@example.com"
// git push origin main
// git pull origin main

const Kengo = () => {
  return (
    <div className="bg-white">
      <Header/>
      <SlickSlider />
      <Footer />
    </div>
  );
};
export default Kengo;
