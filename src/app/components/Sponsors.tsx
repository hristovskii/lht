"use client";

import Image from "next/image";
import base from "@/app/resources/logo/base.svg";
import base_black from "@/app/resources/logo/base-crno_1.svg";
import Heading from "./Heading";

import { RevealList } from  'next-reveal'

export default function Sponsors() {
    return(
        <section className="md:mx-6 mx-auto lg:px-36 md:px-16 px-8 mt-12 mb-20">

            <RevealList interval={100} delay={500}>
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
                <Heading heading={"Partners & Supporters"}></Heading>
                <Image src={base_black} alt="Sponsor Logo" width={600} className="mt-8 mb-8"></Image>
                {/* <Image src={CrazyLabs} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image>
                <Image src={HTec} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image> */}
            </div>
            </RevealList>
        </section>
    );
}