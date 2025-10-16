import React from 'react';
import Partners from './components/partners';
import Ceo from './components/ceo'; 
import FAQ from './components/faq';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Partners />
      <Ceo/>
      <FAQ/>
    </main>
  )
}