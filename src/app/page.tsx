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
    "/images/album/image-9.jpg",
    "/images/album/image-10.jpg",
    "/images/album/image-11.jpg",
    "/images/album/image-12.jpg",
    "/images/album/image-13.jpg",
    "/images/album/image-14.jpg",
    "/images/album/image-15.jpg",
    "/images/album/image-16.jpg",
    "/images/album/image-17.jpg",
    "/images/album/image-18.jpg",
    "/images/album/image-19.jpg",
    "/images/album/image-20.jpg",
    "/images/album/image-21.jpg",
    "/images/album/image-22.jpg",
    "/images/album/image-23.jpg",
    "/images/album/image-24.jpg",
    "/images/album/image-25.jpg",
    "/images/album/image-26.jpg",
    "/images/album/image-27.jpg",
    "/images/album/image-28.jpg",
    "/images/album/image-29.jpg",
    "/images/album/image-30.jpg",
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
