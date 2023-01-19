import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Set a Vibe</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-slate-800">
        <div className="text-3xl font-bold p-4">
          <h1 className="text-slate-900 dark:text-white tracking-tight">Set a vibe</h1>
        </div>
      </main>
    </>
  )
}
