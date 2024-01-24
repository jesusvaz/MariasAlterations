
import Image from 'next/image'
import foto from '../../public/blusas.jpeg'
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
            La costura de las blusas es el elemento crucial que eleva tu estilo y define tu presencia en el mundo 
            de la moda. En Marias' Textile Solutions, reconocemos que cada puntada cuenta, y es por eso que nos 
            esforzamos por ofrecer costuras impecables que marcan la diferencia en tu apariencia. Una costura 
            precisa no solo garantiza la durabilidad de la prenda, sino que también contribuye a una silueta 
            favorecedora, realzando tus mejores características. Además, nuestras costuras están diseñadas con 
            un ojo experto en las tendencias de moda, asegurando que te veas no solo bien, sino también a la 
            vanguardia del estilo. Descubre la excelencia en la artesanía de la moda en Marias' Textile Solutions, d
            onde cada blusa cosida es una declaración de elegancia, confianza y un sentido innato de la moda. Viste 
            con distinción, viste con nosotros.
            </div>
        </main>

    )
}

