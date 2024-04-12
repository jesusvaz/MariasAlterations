
import Image from 'next/image';
import Link from 'next/link';
import foto from '../../public/marias.jpeg';
export default function contact() {
    return (
        <main className="flex min-h-screen flex-col items-center  p-4">
            Connect with us today! Reach us by phone at Marias' Textile Solutionsand 
            <br/>801-691-6241<br/>
            explore more on our social platforms: 
            <br/>Facebook, 
            <br/>Instagram, 
            <br/>X. 
            <br/>We look forward to engaging with you!"
            <div>
                <Link href='/'>Home</Link>
            </div>
        </main>
        
    )
}

