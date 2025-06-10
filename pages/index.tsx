import Image from "next/image";
import { myImages, IMAGE_PATHS } from "@/constants/images";
import PropertyListing from "@/components/common/PropertyListing";
import FilterSection from "@/components/layout/Filter";

const Home = () => {
  return (
    <main>
      <section className="w-full min-h-screen">
        <div className="hero-section p-[3em] md:py-[8em] lg:py-[14em] mx-4 md:mx-8 rounded-2xl">
          <div className="text-center text-white max-w-[100%]">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">
              Find your favorite place here!
            </h1>
            <p className="text-xs md:text-lg lg:text-2xl">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
        <FilterSection />
        <PropertyListing />
      </section>
    </main>
  );
};

export default Home;
