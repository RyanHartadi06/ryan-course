import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
