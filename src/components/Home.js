import React from "react"
import image from "../country.JPG";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Old Faithful" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gray-50 sm:mt-8 lg:mt-32 font-bold text-opacity-90 cursive leading-loose lg:leading-snug">Hi! I'm Jason.</h1>
            </section>
        </main>
    )
}