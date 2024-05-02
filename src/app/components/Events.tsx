"use client";

import Image from "next/image";
import img1 from "@/app/resources/lht1.jpg";
import img2 from "@/app/resources/lht2.jpg";
import img3 from "@/app/resources/lht3.jpg";
import img4 from "@/app/resources/lht4.jpg";
import img5 from "@/app/resources/lht5.jpg";
import img6 from "@/app/resources/lht6.jpg";
import Heading from "./Heading";

export default function Events() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Latest Events"}></Heading>
            </div>
            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img6} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
                <Image src={img5} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
                <Image src={img4} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
            </div>

            <div className="lg:flex justify-evenly items-center gap-14">
                <Image src={img3} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
                <Image src={img2} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
                <Image src={img1} alt="Sponsor Logo" height={400} className="mt-8 mb-8"></Image>
            </div>
        </section>
    );
}