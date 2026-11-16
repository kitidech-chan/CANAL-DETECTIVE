import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PAGES, PageId } from '../data/canalData';

interface TopBarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenGuide: () => void;
}

export function TopBar({ activePage, onNavigate, onOpenGuide }: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'The Study' },
    { id: 'stories', label: 'Water Stories' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'orchard', label: 'Orange Grove' },
  ];

  const handleSelect = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F5F1E7]">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 border-b border-[#173F35]/15 bg-[#F5F1E7]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-5 py-4 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleSelect('home')}
            className="whitespace-nowrap shrink-0 font-serif text-lg font-semibold tracking-wider text-[#173F35] transition-opacity hover:opacity-80 sm:text-xl"
          >
            CANAL DETECTIVE
          </button>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-6 lg:flex"
          >
            {primaryLinks.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`whitespace-nowrap shrink-0 border-b py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-[#173F35] text-[#173F35]'
                      : 'border-transparent text-[#173F35]/70 hover:border-[#C9B68C] hover:text-[#173F35]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary CTA + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleSelect('findings')}
              className="hidden whitespace-nowrap shrink-0 bg-[#173F35] px-5 py-2.5 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64] sm:inline-flex"
            >
              Take the Quiz
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center border border-[#173F35]/20 text-[#173F35] transition-colors hover:bg-[#173F35]/5 lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#173F35]/15 bg-[#F5F1E7] px-5 py-5 lg:hidden">
            <div className="mx-auto max-w-[1200px] space-y-1">
              {PAGES.map((page) => {
                const isActive = activePage === page.id;
                return (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => handleSelect(page.id)}
                    className={`flex min-h-[44px] w-full items-center justify-between border-b border-[#173F35]/10 px-2 py-2.5 text-left transition-colors ${
                      isActive ? 'bg-[#173F35] text-[#F5F1E7]' : 'text-[#173F35] hover:bg-[#EBE5D7]'
                    }`}
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="tabular-nums font-serif text-xs opacity-70">
                        {page.chapter}
                      </span>
                      <span className="text-sm font-medium">{page.thTitle}</span>
                    </span>
                    <span className="font-serif text-xs opacity-75">{page.shortLabel}</span>
                  </button>
                );
              })}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGuide();
                  }}
                  className="min-h-[44px] w-full border border-[#173F35] px-4 py-2.5 text-center text-sm font-medium text-[#173F35] transition-colors hover:bg-[#173F35] hover:text-[#F5F1E7]"
                >
                  Google Sites & Quiz Blueprint
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Non-sticky Exhibition Chapter Ribbon for all 7 Pages + Field Gallery */}
      <div className="border-b border-[#173F35]/10 bg-[#EFE9DC]/70">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 overflow-x-auto px-5 py-2.5 lg:px-8">
          <div className="flex items-center gap-5">
            {PAGES.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  type="button"
                  onClick={() => handleSelect(page.id)}
                  className={`whitespace-nowrap shrink-0 text-xs transition-colors ${
                    isActive
                      ? 'font-semibold text-[#173F35] underline decoration-[#C9B68C] decoration-2 underline-offset-4'
                      : 'text-[#173F35]/65 hover:text-[#173F35]'
                  }`}
                >
                  <span className="tabular-nums font-serif mr-1.5 text-[#527A64]">
                    {page.chapter}
                  </span>
                  <span>{page.shortLabel}</span>
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onOpenGuide}
            className="hidden whitespace-nowrap shrink-0 text-xs font-medium text-[#527A64] underline decoration-[#C9B68C]/70 underline-offset-4 transition-colors hover:text-[#173F35] md:inline-block"
          >
            Google Sites Guide
          </button>
        </div>
      </div>
    </div>
  );
}
