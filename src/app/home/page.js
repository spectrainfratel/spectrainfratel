import React from 'react';
import Partners from './components/partners';
import Ceo from './components/ceo'; 

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Partners />
      <Ceo/>
    </main>
  )
}