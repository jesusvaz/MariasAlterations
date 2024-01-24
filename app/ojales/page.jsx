
import Image from 'next/image'
import foto from '../../public/ojales.jpeg'
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
                La costura de ojales es la joya oculta que añade un toque de distinción y funcionalidad a tus prendas, 
                elevándolas a nuevos niveles de estilo y elegancia. En Marias' Textile Solutions, reconocemos que la calidad 
                de los ojales no solo garantiza la durabilidad de la prenda, sino que también aporta un elemento de 
                sofisticación esencial para lucir bien y a la moda. Cada ojal meticulosamente cosido no solo es un 
                testimonio de nuestra atención al detalle, sino que también destaca la versatilidad y modernidad de tu 
                vestuario. Descubre la excelencia en la artesanía de la costura de ojales en Marias' Textile Solutions,
                 donde cada prenda es una fusión de funcionalidad y moda, permitiéndote destacar con estilo y confianza 
                 en cualquier ocasión. Viste con elegancia, viste con nosotros.
            </div>
        </main>

    )
}

