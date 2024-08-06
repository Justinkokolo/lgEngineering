import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LG Egineering",
  description: "This is Home for LG",
  // other metadata
};

export default function Home() {
  const images = [
    "/images/album/image-1.jpg",
    "/images/album/image-2.jpg",
    "/images/album/image-3.jpg",
    "/images/album/image-4.jpg",
    "/images/album/image-5.jpg",
    "/images/album/image-6.jpg",
    "/images/album/image-7.jpg",
    "/images/album/image-8.jpg",
  ];
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <ImageCarousel images={images} interval={3000} />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
