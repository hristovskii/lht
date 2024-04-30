"use client";

interface SubheadingProps {
    subheader: string;
}

export default function Subheading({ subheader } : SubheadingProps) {
    return(
        <article className="pb-10">
            <p className="lg:text-sm text-xs text-neutral-800 text-balance">{subheader}</p>
        </article>
    );
}