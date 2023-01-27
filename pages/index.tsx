import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Home
        </h1>
      </main>
    </div>
  )
}

export default HomePage;