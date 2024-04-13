
import Image from 'next/image'
import foto from '../../public/dobladillos.jpeg'
export default function about() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            <Image
                className="rounded-lg"
                src={foto}
                alt="Marias bout image showing textile tools"
                width={400}
                height={400}
                priority
            />
            <br />
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm l">

                La costura de los dobladillos es el toque final que transforma una prenda común en una 
                declaración de estilo y sofisticación. En Marias Textile Solutions, comprendemos que la calidad de los 
                dobladillos es esencial para lograr un aspecto impecable y a la moda. Cada puntada precisa no 
                solo garantiza la durabilidad y estructura de la prenda, sino que también contribuye a la caída perfecta 
                y al ajuste favorecedor. Los dobladillos cuidadosamente elaborados son la prueba de nuestra dedicación 
                a la excelencia en la artesanía, asegurando que cada prenda no solo luzca bien, sino que también siga las 
                últimas tendencias de la moda. Descubre el arte de la costura de dobladillos en Marias Textile Solutions, 
                donde cada detalle cuenta y cada prenda es una expresión de elegancia atemporal y estilo contemporáneo. 
                Viste con distinción, viste con nosotros.
            </div>
        </main>

    )
}

