"use client";

import { IconType } from "react-icons";
import IconComponent from "./Icon";

interface ButtonProps {
    text: string;
    icon: IconType;
}

export default function Button({ text, icon } : ButtonProps) {
    return(
        <button className="rounded-full bg-eestec px-6 py-2 my-6 flex justify-center items-center gap-3">
            <span className="text-white">{text}</span>
            <IconComponent icon={icon} color="white" size="19px"></IconComponent>
        </button>
    )
}