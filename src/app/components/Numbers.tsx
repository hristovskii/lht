"use client";

interface NumberProps {
    number: string;
    text: string;
}

export default function Numbers({ number, text } : NumberProps) {
    return( 
        <article className="grid px-1 justify-center my-16">
            <h3 className="text-center text-8xl text-eestec font-black">{number}</h3>
            <p className="text-center text-base font-medium text-neutral-700">{text}</p>
        </article>
    )
}