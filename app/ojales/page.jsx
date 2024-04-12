
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/ojales.jpeg';
export default function ojales({params,searchParams}) {
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
            {searchParams.lang === 'sp' ? 'La costura de ojales es la joya oculta que añade un toque de distinción y funcionalidad a tus prendas, elevándolas a nuevos niveles de estilo y elegancia. En Marias Textile Solutions, reconocemos que la calidad de los ojales no solo garantiza la durabilidad de la prenda, sino que también aporta un elemento de sofisticación esencial para lucir bien y a la moda. Cada ojal meticulosamente cosido no solo es un testimonio de nuestra atención al detalle, sino que también destaca la versatilidad y modernidad de tu vestuario. Descubre la excelencia en la artesanía de la costura de ojales en Marias Textile Solutions, donde cada prenda es una fusión de funcionalidad y moda, permitiéndote destacar con estilo y confianza en cualquier ocasión. Viste con elegancia, viste con nosotros.' : 'Eyelet stitching is the hidden gem that adds a touch of class and functionality to your garments, elevating them to new levels of style and elegance. At Marias Textile Solutions, we recognize that the quality of eyelets not only ensures the durability of the garment, but also provides an essential element of sophistication to look good and fashionable. Each meticulously sewn buttonhole is not only a testament to our attention to detail, but also highlights the versatility and modernity of your wardrobe. Discover excellence in the craftsmanship of buttonhole sewing at Marias Textile Solutions, where each garment is a fusion of function and fashion, allowing you to stand out with style and confidence on any occasion. Dress with elegance, dress with us.'}
            </div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>

    )
}

