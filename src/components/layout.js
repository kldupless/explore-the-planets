import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  return (
    <div class="bg-star-pattern bg-cover bg-repeat bg-DarkestBlue text-White font-spartan font-normal py-2">
    <header class="flex flex-row justify-between items-center px-6 py-4">
    <p class="font-antonio text-lg uppercase">The Planets</p>
    </header>
    <nav class="border-y border-White/20 px-6 py-4">
    <ul class="flex flex-row justify-between items-center uppercase text-xxs tracking-widest font-bold">
      <li>Overview</li>
      <li>Structure</li>
      <li>Surface</li>
    </ul>
  </nav>
  <main>
    <article class="flex flex-col items-center justify-start px-6 py-4">
      <figure id="planet__img" class="w-28 py-24"><img src="./assets/planet-mercury.svg"/></figure>
      <section id="planet__info" class="flex flex-col justify-between items-center w-full">
        <h1 class="font-antonio text-xl uppercase mb-3">Mercury</h1>
        <p class="text-center text-xs leading-5 mb-5">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
        <p class="text-White/50 text-sm">Source: <a href="#" class="font-bold">Wikipedia</a></p>
      </section>
      <section id="planet__stats" class="w-full">
        <ul class="flex flex-col uppercase">
          <li class="flex flex-row items-center justify-between border border-White/20 px-4 py-2 my-1"><p class="text-xxs text-White/50 tracking-widest font-bold">Rotation Time</p><p class="font-antonio font-normal tracking-tight text-lg">58.6 days</p></li>
          <li class="flex flex-row items-center justify-between border border-White/20 px-4 py-2 my-1"><p class="text-xxs text-White/50 tracking-widest font-bold">Revolution Time</p><p class="font-antonio font-normal tracking-tight text-lg">87.97 days</p></li>
          <li class="flex flex-row items-center justify-between border border-White/20 px-4 py-2 my-1"><p class="text-xxs text-White/50 tracking-widest font-bold">Radius</p><p class="font-antonio font-normal tracking-tight text-lg">2,439.7 km</p></li>
          <li class="flex flex-row items-center justify-between border border-White/20 px-4 py-2 my-1"><p class="text-xxs text-White/50 tracking-widest font-bold">Average Temp.</p><p class="font-antonio font-normal tracking-tight text-lg">430 C</p></li>
        </ul>
      </section>
    </article>
  </main>
    </div>
  )
}

export default Layout