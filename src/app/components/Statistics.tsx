"use client";

import { RevealList } from "next-reveal";
import Numbers from "./Numbers";

export default function Statistics() {
    return(
        <section className="my-10 md:mx-28 mx-12">

        <RevealList interval={100} delay={500}>
            <div className="lg:flex justify-evenly items-center gap-24">
                <Numbers number={"50+"} text={"participants"}></Numbers>
                <Numbers number={"7+"} text={"Speakers"}></Numbers>
                <Numbers number={"6"} text={"Successful Events"}></Numbers>
            </div>
        </RevealList>
        </section>
    );
}