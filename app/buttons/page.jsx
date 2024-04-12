
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/marias.jpeg';
export default function buttons({params,searchParams}) {
    console.log('este Lang:',searchParams.lang)
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

       {/* botones */}
       {searchParams.lang === 'sp' ? 'En Marias Textile Solutions, nos dedicamos apasionadamente a transformar la experiencia de vestir, brindando a nuestros clientes la confianza y el atractivo que proviene de prendas impecablemente remendadas con acabados profesionales. Nuestro objetivo es realzar la belleza individual de cada persona, asegurándonos de que cada prenda/vestido no solo sea reparado, sino que resplandezca con calidad y estilo. Con nuestra atención meticulosa a los detalles y artesanía experta, te invitamos a descubrir cómo la perfección en cada puntada puede marcar la diferencia, elevando tu presencia y dejando una impresión duradera en cada ocasión.¡Viste con confianza, viste con Marias Textile Solutions!' : 'At Marias Textile Solutions, we are passionately dedicated to transforming the dressing experience, giving our customers the confidence and appeal that comes from impeccably mended garments with professional finishes. Our goal is to enhance the individual beauty of each person, ensuring that each garment/dress is not only repaired, but shines with quality and style. With our meticulous attention to detail and expert craftsmanship, we invite you to discover how perfection in every stitch can make a difference, elevating your presence and leaving a lasting impression on every occasion. Dress with confidence, dress with Marias Textile Solutions!'}
           

                
            </div>
            <div>
                {searchParams.lang === 'sp' ? <Link href='/'>Inicio</Link>: <Link href='/'>Home</Link>}
            </div>
        </main>
        
    )
}

