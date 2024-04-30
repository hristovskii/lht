"use client";

interface HeadingProps {
    heading: string;
}

export default function Heading({ heading } : HeadingProps) {
    return(
        <article className="mx-auto md:my-2 my-6">
            <h3 className="lg:text-xl text-lg text-neutral-900 underline decoration-eestec decoration-2 underline-offset-4 font-medium">{heading}</h3>
        </article>
    );
}