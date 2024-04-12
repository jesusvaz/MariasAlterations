
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/marias.jpeg';
export default function contact({ params, searchParams }) {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">

            {searchParams.lang === 'sp' ? <Link href='/'>Inicio</Link> : <Link href='/'>Home</Link>}
       
            <div>
                {searchParams.lang === 'sp' ? <Link href='/'>Inicio</Link> : <Link href='/'>Home</Link>}
            </div>
        </main>

    )
}

