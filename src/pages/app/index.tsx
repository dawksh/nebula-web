import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/component/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {
    return (
        <div className={`${inter.className}`}>
            <Head>
                <title>ens identity | nebula protocol</title>
                <script async defer data-website-id="e9daa61b-40bb-416b-a6d6-a28ec06ee6b7" src="https://analytics.dakshk.xyz/umami.js"></script>
            </Head>
            <section className="w-full h-screen py-8 md:py-4 lg:py-8 xl:py-16 bg-black">
                <Navbar />
                <div className="container px-4 mx-auto md:px-6">
                    <div className="grid gap-6 items-center">
                        <div className="flex flex-col justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold my-4 sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent text-gradient">
                                    ENS Identity
                                </h1>
                                <p className={`max-w-[600px] m-8 text-lg md:text-md flex text-zinc-100 mx-auto ${inter.className}`}>
                                    get your ENS atom identity issued using your ENS name.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}