import AboutSection from "@/Compenents/About";
import ClientSingleCard from "@/Compenents/Clients/ClientCard";
import ContactSection from "@/Compenents/Contact";
import FooterSection from "@/Compenents/Footer";
import Header from "@/Compenents/Header";
import HomeSection from "@/Compenents/Home";
import ProjectsSection from "@/Compenents/Projects";
import ServicesSection from "@/Compenents/Services";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header/>
      <HomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}
