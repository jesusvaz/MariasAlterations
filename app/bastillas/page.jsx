import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/vastilla.jpeg'
export default function bastillas({params,searchParams}) {
    console.log('search:',searchParams);
    console.log('lang:',searchParams.lang);
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


            {searchParams.lang === 'sp' ? 'Una bastilla perfecta no es simplemente un detalle, sino la esencia misma de la elegancia y la moda refinada. En Marias Textile Solutions, comprendemos que una bastilla expertamente realizada no solo garantiza la durabilidad de tu ropa, sino que también transforma por completo tu apariencia. Es el toque final que añade estructura y sofisticación a cada prenda, asegurando que tus atuendos se ajusten a la perfección. Una bastillacuidadosamente elaborada no solo demuestra tu compromiso con la calidad, sino que también refleja tu sentido nnato de estilo y atención al detalle. En un mundo impulsado por la moda, la elegancia de una buena bastillaes la clave para destacar, asegurándote de lucir impecable y a la vanguardia de las tendencias. Entra en el mundo de la moda con confianza y distinción, donde cada bastilla es una obra maestra en Marias Textile Solutions.' : 'A perfect hem is not simply a detail, but the very essence of elegance and refined fashion. At Marias Textile Solutions, we understand that an expertly made hem not only ensures the durability of your clothing, but also completely transforms your appearance. It is the finishing touch that adds structure and sophistication to each garment, ensuring your outfits fit perfectly. A carefully crafted hemline not only demonstrates your commitment to quality, but also reflects your innate sense of style and attention to detail. In a world driven by fashion, the elegance of a good hemline is the key to standing out, ensuring you look impeccable and at the forefront of trends. Enter the world of fashion with confidence and distinction, where every hem is a masterpiece at Marias Textile Solutions.'}
          

            </div>

            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>

    )
}

