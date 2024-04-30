"use client";

import { IconType } from "react-icons";
import IconComponent from "./Icon";

interface SecondaryButtonProps {
    text: string;
    icon: IconType;
}

export default function SecondaryButton({ text, icon } : SecondaryButtonProps) {
    return(
        <button className="rounded-full bg-white border-2 border-eestec px-6 py-2 my-6 flex justify-center items-center gap-3">
            <span className="text-eestec">{text}</span>
            <IconComponent icon={icon} color="#149414" size="19px"></IconComponent>
        </button>
    )
}