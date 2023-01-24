import PlainLayout from 'layouts/PlainLayout';

function Home() {
  return (
    <PlainLayout>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Set a Vibe!
        </h1>
      </main>
    </PlainLayout>
  )
}

export default Home;