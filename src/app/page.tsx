import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { clsx } from 'clsx';
import Link from "next/link";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.002]">
    <HeroSection/>
     <FeaturedCourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpcomingWebinars/>
     <Instructors/>
     <Footer/>
   </main>
  );
}
