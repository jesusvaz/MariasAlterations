
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/mangas.jpeg';
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
                La costura de las mangas no es solo un detalle funcional,
                sino la esencia de la elegancia y el estilo que define tu
                presencia. En Marias' Textile Solutions, entendemos que una costura de mangas impecable no
                solo asegura la durabilidad de tus prendas, sino que también es crucial para lograr un aspecto
                sofisticado y a la moda. Las mangas perfectamente cosidas no solo proporcionan comodidad y movilidad,
                sino que también resaltan la atención al detalle que caracteriza tu sentido de la moda. Cada
                puntada cuidadosa es un testimonio de nuestra dedicación a la excelencia en la artesanía,
                asegurando que cada prenda no solo luzca bien, sino que también refleje tu estilo personal distintivo.
                En Marias' Textile Solutions, creamos no solo ropa, sino obras maestras de moda
                onde la costura de las mangas es la clave para tu presencia impecable y a la vanguardia de las
                tendencias. Vive la experiencia de la elegancia con nosotros.
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>

    )
}

