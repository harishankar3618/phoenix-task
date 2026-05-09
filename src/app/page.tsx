import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <main className="bg-brand-black min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <section className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-semibold">Next sections: ProgrammeGrid, Stats, Approvals...</h2>
      </section>
    </main>
  )
}
