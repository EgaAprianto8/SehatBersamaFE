import HeroSection from "@/components/LandingPage/HeroSection";
import JoinNow from "@/components/LandingPage/JoinNow";
import ListFitur from "@/components/LandingPage/ListFitur";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <JoinNow/>
      <ListFitur/>
    </>
  );
}
