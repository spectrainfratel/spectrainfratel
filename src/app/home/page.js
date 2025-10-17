import React from 'react';
import Partners from './components/partners';
import Ceo from './components/ceo'; 
import FAQ from './components/faq';
import Works from './components/works';
import Services from './components/services';
import About from './components/about';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <About/>
      <Services/>
      <Partners />
      <Works/>
      <Ceo/>
      <FAQ/>
    </main>
  )
}