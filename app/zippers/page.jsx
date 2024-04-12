
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/zipper.jpeg';
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
                La costura de un zipper no es simplemente una tarea técnica, sino un arte
                que transforma tus prendas y define tu estilo. En Marias' Textile Solutions,
                entendemos que la perfección en la costura del zipper es esencial para lograr
                un look impecable y a la moda. Un zipper bien cosido no solo asegura la funcionalidad de tu ropa,
                sino que también aporta un toque de sofisticación y precisión a tu estilo personal.
                Es el detalle que marca la diferencia entre una prenda común y una pieza de moda destacada.
                Con nuestra dedicación a la artesanía exquisita, te invitamos a descubrir cómo la costura experta
                de un zipper puede elevar tu presencia, asegurando que cada cierre sea un elemento destacado de tu
                estilo distintivo. En Marias' Textile Solutions, la moda se fusiona con la perfección de la costura del
                zipper para que luzcas impecable y a la vanguardia de las tendencias.
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>

    )
}

