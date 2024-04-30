"use client";

import { MdElectricBolt } from "react-icons/md";
import SecondaryButton from "./SecondaryButton";

export default function Promo() {
    return(
        <section className="my-10 md:mx-12 mx-auto px-8">
            <div className="rounded bg-eestec md:px-12 py-6 px-8">
                <h3 className="lg:text-6xl text-5xl text-white font-eestec font-semibold mt-6 mb-2">Want more <span>workshops</span> like this?</h3>
                <p className="text-white font-eestec font-light mb-8">Join EESTEC LC Skopje and be the first to know about our upcoming events.</p>
                <SecondaryButton text={"Get Involved Now!"} icon={MdElectricBolt}></SecondaryButton>

            </div>
        </section>
    );
}