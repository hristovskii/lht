"use client";

import { IconType } from "react-icons";
import IconComponent from "./Icon";

interface FeatureProps {
    icon: IconType;
    text: string;
}

export default function Feature({ text, icon } : FeatureProps) {
    return( 
        <article className="grid justify-items-center md:px-10 px-1 py-4 my-7">
            <IconComponent icon={icon} size="80px" color="#149414"></IconComponent>
            <h3 className="text-center text-base text-neutral-700 underline decoration-eestec decoration-2 underline-offset-4 font-medium my-1">{text}</h3>
        </article>
    )
}