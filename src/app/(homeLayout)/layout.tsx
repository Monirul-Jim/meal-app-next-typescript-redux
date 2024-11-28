import Footer from "@/Shared/Footer/Footer";
import Navbar from "@/Shared/Navbar/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container	mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
