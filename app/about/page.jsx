
import Image from 'next/image'
import foto from '../../public/marias.jpeg'
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
            <br/>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm l">

                En Marias' Textile Solutions, nos dedicamos apasionadamente a transformar
                la experiencia de vestir, brindando a nuestros clientes la confianza
                y el atractivo que proviene de prendas impecablemente remendadas con acabados
                profesionales. Nuestro objetivo es realzar la belleza individual de cada persona,
                asegurándonos de que cada prenda/vestido no solo sea reparado, sino que resplandezca
                con calidad y estilo. Con nuestra atención meticulosa a los detalles y artesanía experta,
                te invitamos a descubrir cómo la perfección en cada puntada puede marcar la diferencia,
                elevando tu presencia y dejando una impresión duradera en cada ocasión.
                ¡Viste con confianza, viste con Marias' Textile Solutions!
            </div>
        </main>
        
    )
}

