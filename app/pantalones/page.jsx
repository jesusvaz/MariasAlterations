
import Image from 'next/image'
import foto from '../../public/pantalones.jpg'
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
            La costura de los pantalones es un elemento esencial que no solo garantiza comodidad y durabilidad, 
            sino que también define tu estilo con elegancia y modernidad. En Marias' Textile Solutions 
            entendemos que la calidad de la costura de los pantalones es crucial para lograr un look impecable y a la moda. 
            Cada puntada precisa no solo asegura un ajuste perfecto, resaltando tus mejores características, sino que también 
            refleja nuestro compromiso con la artesanía excepcional. Desde la silueta favorecedora hasta los detalles de costura, 
            cada par de pantalones que creamos es una expresión de estilo atemporal y contemporáneo. 
            Descubre la diferencia que hace una costura de pantalones excepcional en Marias' Textile Solutions, donde la moda se
             encuentra con la perfección en cada detalle. Viste con confianza, viste con nosotros.
            </div>
        </main>

    )
}

