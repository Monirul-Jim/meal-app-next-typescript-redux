import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import ScrollToTop from "@/Shared/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <WhyChooseUs />
      <ScrollToTop />
    </div>
  );
}
