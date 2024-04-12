
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/vestidos.jpg';
export default function vestidos({params,searchParams}) {
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
            {searchParams.lang === 'sp' ? ' La costura de los vestidos es la piedra angular de un estilo impactante y a la moda que no solo  0refleja tu personalidad, sino que también resalta tu belleza única. En Marias Textile Solutions, entendemos que la calidad de la costura es fundamental para lograr un look impecable. Cada puntada experta no solo garantiza la durabilidad y comodidad, sino que también contribuye a la silueta y caída perfecta de la prenda. Nuestra atención meticulosa a los detalles en la costura de vestidos no solo habla de calidad, sino que también marca la pauta para estar al día con las últimas tendencias. En cada vestido que creamos, fusionamos arte y moda para que luzcas no solo bien, sino excepcionalmente a la moda. Descubre la magia de una costura excepcional en Marias Textile Solutions, donde cada vestido es una expresión de elegancia, estilo y tu propia narrativa de moda. Viste con confianza, viste con nosotros.' : 'The sewing of dresses is the cornerstone of a striking and fashionable style that not onlyreflects your personality, but also highlights your unique beauty. At Marias Textile Solutions, We understand that the quality of sewing is essential to achieve an impeccable look. every stitch Expert not only ensures durability and comfort, but also contributes to the silhouette and drape perfect garment. Our meticulous attention to detail in dress sewing not only speaks of quality, but also sets the standard for keeping up with the latest trends. In each dress we create, we fuse art and fashion so that you look not only good, but exceptionally fashionable.Discover the magic of exceptional tailoring at Marias Textile Solutions, where each dress is an expression of elegance, style and your own fashion narrative. Dress with confidence, dress with us.'}
            
           
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>

    )
}

