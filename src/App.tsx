/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstitutionalBar } from './components/InstitutionalBar';
import { Advantages } from './components/Advantages';
import { Methodology } from './components/Methodology';
import { Instructor } from './components/Instructor';
import { IncludedAndPricing } from './components/IncludedAndPricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LeadModal } from './components/LeadModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060c18] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Announcement Bar */}
      <TopBanner />

      {/* 2. Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Copy & Interactive Flyer Card */}
        <Hero />

        {/* 4. Institutional Endorsement (FACOP & MEC) */}
        <InstitutionalBar />

        {/* 5. Advantages / Value Proposition */}
        <Advantages />

        {/* 6. Methodology (3 Hybrid Phases) */}
        <Methodology />

        {/* 7. Coordination & Instructor (Dr. Ricardo de Marco) */}
        <Instructor />

        {/* 8. What's Included & Exclusive Turma Registration Box */}
        <IncludedAndPricing />

        {/* 9. Common Questions (FAQ Accordion) */}
        <Faq />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Sticky Floating WhatsApp Trigger */}
      <FloatingWhatsApp />

      {/* 12. Lead Capture Modal */}
      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
