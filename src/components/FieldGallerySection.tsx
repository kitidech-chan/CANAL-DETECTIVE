import { useState } from 'react';
import { GALLERY_CATEGORY_SLOTS, PageId } from '../data/canalData';

interface FieldGallerySectionProps {
  onNavigate: (page: PageId) => void;
}

export function FieldGallerySection({ onNavigate }: FieldGallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const visibleSlots = selectedCategory === 'all'
    ? GALLERY_CATEGORY_SLOTS
    : GALLERY_CATEGORY_SLOTS.filter((slot) => slot.id === selectedCategory);

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Section 03 · Archive & Field Evidence
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          FIELD EVIDENCE & PHOTO GALLERY
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          ภาพถ่ายจากการลงพื้นที่ภาคสนามของกลุ่ม A3-03 ทั้ง 6 หมวดหมู่
        </p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="หมวดหมู่ภาพถ่าย">
          {[{id: 'all', enCategory: 'All Categories (6)'}, ...GALLERY_CATEGORY_SLOTS].map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`min-h-[40px] border px-4 py-2 text-xs font-medium tracking-wider transition-colors ${
                selectedCategory === category.id
                  ? 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]'
                  : 'border-[#173F35]/20 bg-[#F5F1E7] text-[#173F35]/75 hover:border-[#173F35]'
              }`}
            >
              {category.enCategory}
            </button>
          ))}
        </div>
      </header>
      <section className="py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {visibleSlots.map((slot) => (
            <article key={slot.id} className="border border-[#173F35]/15 bg-[#F5F1E7] p-6 sm:p-7">
              <p className="border-b border-[#173F35]/10 pb-3 font-serif text-xs tracking-widest text-[#527A64] uppercase">
                ARCHIVE {String(GALLERY_CATEGORY_SLOTS.indexOf(slot) + 1).padStart(2, '0')} · {slot.enCategory}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-[#173F35]">{slot.thCategory}</h2>
              <figure className="mt-5">
                <div className="aspect-[4/3] overflow-hidden border border-[#173F35]/20 bg-[#EBE5D7]">
                  <img src={slot.image} alt={slot.thCategory} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <figcaption className="mt-3 text-xs leading-relaxed text-[#527A64]">{slot.thCategory}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button type="button" onClick={() => onNavigate('findings')} className="text-sm font-medium text-[#527A64] hover:text-[#173F35]">
          ← 07 · Key Findings & Detective Quiz
        </button>
        <button type="button" onClick={() => onNavigate('home')} className="text-sm font-medium text-[#173F35] underline underline-offset-4 hover:text-[#527A64]">
          กลับสู่หน้าแรก (01 · Home) →
        </button>
      </div>
    </div>
  );
}