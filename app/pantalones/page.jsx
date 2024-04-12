
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/pantalones.jpg';
export default function pantalones({params,searchParams}) {
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
           
            {searchParams.lang === 'sp' ? 'La costura de los pantalones es un elemento esencial que no solo garantiza comodidad y durabilidad, sino que también define tu estilo con elegancia y modernidad. En Marias Textile Solutions entendemos que la calidad de la costura de los pantalones es crucial para lograr un look impecable y a la moda.Cada puntada precisa no solo asegura un ajuste perfecto, resaltando tus mejores características, sino que también refleja nuestro compromiso con la artesanía excepcional. Desde la silueta favorecedora hasta los detalles de costura, cada par de pantalones que creamos es una expresión de estilo atemporal y contemporáneo. Descubre la diferencia que hace una costura de pantalones excepcional en Marias Textile Solutions, donde la moda seencuentra con la perfección en cada detalle. Viste con confianza, viste con nosotros.' : 'English this is The stitching of the pants is an essential element that not only guarantees comfort and durability,but also defines your style with elegance and modernity. At Marias Textile Solutions We understand that the quality of the sewing of the pants is crucial to achieve a flawless and fashionable look.Each precise stitch not only ensures a perfect fit, highlighting your best features, but also reflects our commitment to exceptional craftsmanship. From the flattering silhouette to the stitching details,Every pair of pants we create is an expression of timeless and contemporary style.Discover the difference exceptional trouser sewing makes at Marias Textile Solutions, where fashion meets find perfection in every detail. Dress with confidence, dress with us.'}
           
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>

    )
}

