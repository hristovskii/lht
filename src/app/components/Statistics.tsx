"use client";

import Numbers from "./Numbers";

export default function Statistics() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <div className="lg:flex justify-evenly items-center gap-24">
                <Numbers number={"50+"} text={"participants"}></Numbers>
                <Numbers number={"7+"} text={"Speakers"}></Numbers>
                <Numbers number={"6"} text={"Successful Events"}></Numbers>
            </div>
        </section>
    );
}