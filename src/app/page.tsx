"use client"

import Footer from "@/components/front-end/Footer";
import Head1 from "@/components/front-end/Head1";
import Head2 from "@/components/front-end/Head2";
import Header from "@/components/front-end/Header";
import Navbar from "@/components/front-end/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar />
   <br />
    <Header />
    <br />
    <Head1 />
    <Head2 />
    <Footer />
    </div>
  );
}
