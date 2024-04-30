"use client";

import Image from "next/image";
import base from "@/app/resources/logo/base.svg";
import HTec from "@/app/resources/logo/vectorhtec-logo.svg";
import Heading from "./Heading";

export default function Sponsors() {
    return(
        <section className="md:mx-6 mx-auto lg:px-36 md:px-16 px-8 mt-12 mb-20">
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
                <Heading heading={"Partners & Supporters"}></Heading>
                <Image src={base} alt="Sponsor Logo" width={600} className="mt-8 mb-8"></Image>
                {/* <Image src={CrazyLabs} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image>
                <Image src={HTec} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image> */}
            </div>
        </section>
    );
}