import React from 'react';
import Partners from './components/partners';
import Ceo from './components/ceo'; 
import FAQ from './components/faq';
import Works from './components/works';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Partners />
      <Works/>
      <Ceo/>
      <FAQ/>
    </main>
  )
}