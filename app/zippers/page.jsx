
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/zipper.jpeg';
export default function zippers({params,searchParams}) {
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
            {searchParams.lang === 'sp' ? 'La costura de un zipper no es simplemente una tarea técnica, sino un arte que transforma tus prendas y define tu estilo. En Marias Textile Solutions,entendemos que la perfección en la costura del zipper es esencial para lograr un look impecable y a la moda. Un zipper bien cosido no solo asegura la funcionalidad de tu ropa,sino que también aporta un toque de sofisticación y precisión a tu estilo personal.Es el detalle que marca la diferencia entre una prenda común y una pieza de moda destacada.Con nuestra dedicación a la artesanía exquisita, te invitamos a descubrir cómo la costura experta de un zipper puede elevar tu presencia, asegurando que cada cierre sea un elemento destacado de tu estilo distintivo. En Marias Textile Solutions, la moda se fusiona con la perfección de la costura del zipper para que luzcas impecable y a la vanguardia de las tendencias.' : 'Sewing a zipper is not simply a technical task, but an art that transforms your garments and defines your style. At Marias Textile Solutions, we understand that perfection in zipper sewing is essential to achieve an impeccable and fashionable look. A well-stitched zipper not only ensures the functionality of your clothing, but also adds a touch of sophistication and precision to your personal style. It is the detail that makes the difference between an ordinary garment and a standout fashion piece. With our dedication to exquisite craftsmanship, we invite you to discover how the expert stitching of a zipper can elevate your presence, ensuring that each zipper is a standout element of your distinctive style. At Marias Textile Solutions, fashion merges with the perfection of zipper sewing so that you look impeccable and at the forefront of trends.'}
              
            </div>
            <div>
                {searchParams.lang === 'sp' ? <Link href='/'>Inicio</Link>: <Link href='/'>Home</Link>}
            </div>
        </main>

    )
}

