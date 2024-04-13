
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/marias.jpeg';
export default function contact({ params, searchParams }) {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">

            {searchParams.lang === 'sp' ? <h3>Telefono</h3>: <h3>Phone</h3>} 801-691-6241
            <br />
            {searchParams.lang === 'sp' ? <h3>Correo electronico</h3>: <h3>Email</h3>} 
            carrill_o@hotmail.com

            <div>
                {searchParams.lang === 'sp' ? <Link href='/'>Inicio</Link> : <Link href='/'>Home</Link>}
            </div>
        </main>

    )
}

