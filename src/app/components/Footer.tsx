"use client";

import Image from "next/image";
import LHT from "@/app/resources/logo/On_White.svg"

export default function Footer() {
    return(
        <footer className="bg-zinc-50 flex justify-center items-center p-6">
            <Image src={LHT} alt="LHT Logo" height={150} className="pt-6 pr-8 pb-6 pl-6"></Image>
        </footer>
    );
}