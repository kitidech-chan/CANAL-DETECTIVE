/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PageId } from './data/canalData';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { PageHome } from './components/PageHome';
import { PageAbout } from './components/PageAbout';
import { PageWaterStories } from './components/PageWaterStories';
import { PageWaterQuality } from './components/PageWaterQuality';
import { PageEcosystem } from './components/PageEcosystem';
import { PageOrangeGrove } from './components/PageOrangeGrove';
import { PageFindingsQuiz } from './components/PageFindingsQuiz';
import { FieldGallerySection } from './components/FieldGallerySection';
import { GoogleSitesGuideModal } from './components/GoogleSitesGuideModal';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [guideOpen, setGuideOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F1E7] text-[#173F35]">
      <TopBar
        activePage={activePage}
        onNavigate={setActivePage}
        onOpenGuide={() => setGuideOpen(true)}
      />

      <main className="flex-1">
        {activePage === 'home' && <PageHome onNavigate={setActivePage} />}
        {activePage === 'about' && <PageAbout onNavigate={setActivePage} />}
        {activePage === 'stories' && <PageWaterStories onNavigate={setActivePage} />}
        {activePage === 'quality' && <PageWaterQuality onNavigate={setActivePage} />}
        {activePage === 'ecosystem' && <PageEcosystem onNavigate={setActivePage} />}
        {activePage === 'orchard' && <PageOrangeGrove onNavigate={setActivePage} />}
        {activePage === 'findings' && (
          <PageFindingsQuiz
            onNavigate={setActivePage}
            onOpenGuide={() => setGuideOpen(true)}
          />
        )}
        {activePage === 'gallery' && <FieldGallerySection onNavigate={setActivePage} />}
      </main>

      <Footer onNavigate={setActivePage} onOpenGuide={() => setGuideOpen(true)} />

      <GoogleSitesGuideModal isOpen={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}
