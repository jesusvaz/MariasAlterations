import { Cinzel } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({ subsets: ['latin'] })

export const metadata = {
  title: 'Marias',
  description: 'Generated by Sahuaro tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={cinzel.className}>
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-5xl fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
       
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            Home{' '}
          </Link> */}
        </div>
      </div>
      {children}
    </body>
  </html>
  )
}
