import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Component() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>nebula protocol</title>
      </Head>
      <section className="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Get more out of your identities
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Supercharge your identities with a single protocol that works everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}