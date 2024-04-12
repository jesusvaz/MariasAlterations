'use client'
import Image from 'next/image'
import Link from 'next/link'
import Blusas from '../public/blusas.jpeg'
import Dobldillos from '../public/dobladillos.jpeg'
import Zipper from '../public/zipper.jpeg'
import Mangas from '../public/mangas.jpeg'
import React, { useState } from 'react'

export default function Home() {

  const [lang, setLang] = useState('en')

  function handleSelect(e) {
    e.preventDefault();
    //console.log('Value:',e.target.value);
    setLang(e.target.value);
    // document.getElementById("mySelect").selectedIndex = "1";
  }

  //document.getElementById("mySelect").selectedIndex = "2";

  return (
    <main className="flex min-h-screen flex-col items-center  ">

      <label for="cars">Language:</label>
      <select
        className='text-black'
        onChange={handleSelect}
      >
        <option sdelected value="en">English / Ingles</option>
        <option value="sp">Spanish / Español</option>

      </select>

      <br /><br />
      <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Image src={Blusas} alt="Image 1" class="w-full h-64 object-cover rounded-lg shadow-lg" />
        <Image src={Zipper} alt="Image 2" class="w-full h-64 object-cover rounded-lg shadow-lg" />
        <Image src={Mangas} alt="Image 3" class="w-full h-64 object-cover rounded-lg shadow-lg" />
        <Image src={Dobldillos} alt="Image 4" class="w-full h-64 object-cover rounded-lg shadow-lg" />
      </div>
      <br />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="text-5xl">

          {lang === 'sp' ? 'Alteraciones Maria' : 'Marias Alterations Solutions'}
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href={{
            pathname:'/bastillas',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Bastillas' : 'Trouser Hem '}


          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? 'Una bastilla perfecta no es simplemente un detalle...' : ' A perfect hem is not just a detail...'}
          </p>
        </Link>

        <Link
          href={{
            pathname:'/zippers',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

          rel="noopener noreferrer"
        >

          
          <h2 className={`mb-3 text-2xl font-semibold`}>
          {lang === 'sp' ? 'Cremallera' : 'Zippers'}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {lang === 'sp' ? 'La costura de un zipper no es simplemente una tarea técnica, sino un arte..' : 'Sewing a zipper is not simply a technical task, but an art...'}
          </p>
        </Link>

        {/* <Link
          href="/zippers"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Cremallera' : 'Zippers'}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? 'La costura de un zipper no es simplemente una tarea técnica, sino un arte..' : 'Sewing a zipper is not simply a technical task, but an art...'}
          </p>
        </Link> */}

<Link
          href={{
            pathname:'/buttons',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

          rel="noopener noreferrer"
        >

          
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Botones' : 'Buttons'}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? 'En Marias Textile Solutions, nos dedicamos apasionadamente a transformar...' : 'At Marias Textile Solutions, we are passionately dedicated to transforming...'}
          </p>
        </Link>

        <Link
          href="/sleeves"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Mangas' : 'Sleeves'}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? 'La costura de las mangas no es solo un detalle funcional...' : 'The sleeve seam is not just a functional detail...'}

          </p>
        </Link>

        <Link
          href={{
            pathname:'/blusas',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Blusas' : 'Blouses'}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? ' La costura de las blusas es el elemento crucial que eleva tu estilo y define tu presencia en el mundo...' : 'Blouse stitching is the crucial element that elevates your style and defines your presence in the world....'}

          </p>
        </Link>

        <Link
          href={{
            pathname:'/vestidos',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          {lang === 'sp' ? 'Vestidos' : 'Dresses'}


          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {lang === 'sp' ? 'La costura de los vestidos es la piedra angular de un estilo impactante y a la moda que no solo...' : 'The sewing of dresses is the cornerstone of a striking and fashionable style that not only...'}
          </p>
        </Link>
        {/* <Link
          href="/vestidos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Vestidos' : 'Dresses'}

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? 'La costura de los vestidos es la piedra angular de un estilo impactante y a la moda que no solo...' : 'The sewing of dresses is the cornerstone of a striking and fashionable style that not only...'}
          </p>
        </Link> */}


<Link
          href={{
            pathname:'/ojales',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

          rel="noopener noreferrer"
        >
       
          <h2 className={`mb-3 text-2xl font-semibold`}>
          {lang === 'sp' ? 'Ojales' : 'Eyelets'}

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {lang === 'sp' ? ' La costura de ojales es la joya oculta que añade un toque de distinción y funcionalidad a tus prendas...' : 'Eyelet sewing is the hidden gem that adds a touch of class and functionality to your garments....'}
          </p>
        </Link>


        {/* <Link
          href="/ojales"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Ojales' : 'Eyelets'}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? ' La costura de ojales es la joya oculta que añade un toque de distinción y funcionalidad a tus prendas...' : 'Eyelet sewing is the hidden gem that adds a touch of class and functionality to your garments....'}

          </p>
        </Link> */}

        <Link
          href={{
            pathname:'/pantalones',
            query:{lang}          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

          rel="noopener noreferrer"
        >
        {/* <Link
          // href="/pantalones"

          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        > */}
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {lang === 'sp' ? 'Pantalones' : 'Pants'}

          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {lang === 'sp' ? 'La costura de los pantalones es un elemento esencial que no solo garantiza comodidad y durabilidad...' : 'The stitching of the pants is an essential element that not only guarantees comfort and durability...'}
          </p>
        </Link>



      </div>

      <Link
        href="/contact"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Contact{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {lang === 'sp' ? '¡Desbloquea posibilidades y conéctate con nosotros! Únase a nuestra red para vivir una experiencia enriquecedora que abre puertas a la colaboración y el éxito.' : ' Unlock possibilities and connect with us! Join our network for an enriching experience that opens doors to collaboration and success.'}
        </p>
      </Link>
    </main>
  )
}
