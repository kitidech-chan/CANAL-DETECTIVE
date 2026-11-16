import { ChangeEvent, useEffect, useState } from 'react';
import { Camera, Trash2, Upload } from 'lucide-react';
import { GALLERY_CATEGORY_SLOTS, PageId } from '../data/canalData';

interface UploadedEvidence {
  dataUrl: string;
  caption: string;
  source: string;
  fileName: string;
}

interface FieldGallerySectionProps {
  onNavigate: (page: PageId) => void;
}

const STORAGE_KEY = 'canal_detective_field_photos_v1';

export function FieldGallerySection({ onNavigate }: FieldGallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [evidenceMap, setEvidenceMap] = useState<Record<string, UploadedEvidence>>({});
  const [uploadError, setUploadError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setEvidenceMap(JSON.parse(raw));
      }
    } catch {
      // Ignore storage read issues
    }
  }, []);

  const persistMap = (next: Record<string, UploadedEvidence>) => {
    setEvidenceMap(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      setUploadError('พื้นที่จัดเก็บชั่วคราวในเบราว์เซอร์เต็ม ภาพอาจไม่ถูกบันทึกหลังรีเฟรช');
    }
  };

  const handleFileUpload = (slotId: string, defaultCaption: string, defaultSource: string) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('กรุณาเลือกไฟล์ภาพถ่าย (.jpg, .png, .webp) เท่านั้น');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        persistMap({
          ...evidenceMap,
          [slotId]: {
            dataUrl: reader.result,
            caption: defaultCaption,
            source: defaultSource,
            fileName: file.name,
          },
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleMetaUpdate = (slotId: string, field: 'caption' | 'source', value: string) => {
    const existing = evidenceMap[slotId];
    if (!existing) return;
    persistMap({
      ...evidenceMap,
      [slotId]: {
        ...existing,
        [field]: value,
      },
    });
  };

  const handleRemove = (slotId: string) => {
    const next = { ...evidenceMap };
    delete next[slotId];
    persistMap(next);
  };

  const visibleSlots =
    selectedCategory === 'all'
      ? GALLERY_CATEGORY_SLOTS
      : GALLERY_CATEGORY_SLOTS.filter((s) => s.id === selectedCategory);

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Section 03 · Archive & Field Evidence
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          FIELD EVIDENCE & PHOTO GALLERY
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          พื้นที่รวบรวมภาพถ่ายหลักฐานจริงจากการลงพื้นที่ภาคสนามของกลุ่ม A3-03 ทั้ง 6 หมวดหมู่
          โดยยึดหลักความซื่อสัตย์ทางข้อมูล: ไม่นำภาพ stock หรือภาพที่สร้างขึ้นมากล่าวอ้างเป็นภาพถ่ายจริงจากการลงพื้นที่
        </p>

        {/* Integrity Policy Box */}
        <div className="mt-6 border border-[#173F35]/15 bg-[#EFE9DC]/65 p-5 text-xs leading-relaxed text-[#173F35]/85 sm:text-sm">
          <strong className="font-semibold text-[#173F35]">
            พื้นที่สำหรับอัปโหลดภาพถ่ายจริงจากเอกสาร PDF:
          </strong>{' '}
          เนื่องจากระบบไม่ได้รับไฟล์ PDF แนบในขั้นต้น ช่องด้านล่างจึงเว้นพื้นที่ไว้ให้สมาชิกกลุ่ม A3-03
          อัปโหลดภาพถ่ายจริงจากเอกสารทั้ง 2 ไฟล์พร้อมคำบรรยายและแหล่งที่มาของภาพได้โดยตรง
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`min-h-[40px] border px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors ${
              selectedCategory === 'all'
                ? 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]'
                : 'border-[#173F35]/20 bg-[#F5F1E7] text-[#173F35]/75 hover:border-[#173F35]'
            }`}
          >
            All Categories (6)
          </button>
          {GALLERY_CATEGORY_SLOTS.map((slot) => (
            <button
              key={slot.id}
              type="button"
              onClick={() => setSelectedCategory(slot.id)}
              className={`min-h-[40px] border px-4 py-2 text-xs font-medium tracking-wider transition-colors ${
                selectedCategory === slot.id
                  ? 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]'
                  : 'border-[#173F35]/20 bg-[#F5F1E7] text-[#173F35]/75 hover:border-[#173F35]'
              }`}
            >
              {slot.enCategory}
            </button>
          ))}
        </div>

        {uploadError && (
          <p className="mt-4 text-xs font-medium text-[#9A3412]" role="alert">
            {uploadError}
          </p>
        )}
      </header>

      {/* 6 Archival Evidence Slots */}
      <section className="py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {visibleSlots.map((slot, idx) => {
            const uploaded = evidenceMap[slot.id];

            return (
              <article
                key={slot.id}
                className="flex flex-col justify-between border border-[#173F35]/15 bg-[#F5F1E7] p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2 border-b border-[#173F35]/10 pb-3">
                    <span className="tabular-nums font-serif text-xs tracking-widest text-[#527A64] uppercase">
                      ARCHIVE 0{idx + 1} · {slot.enCategory}
                    </span>
                    <span className="text-xs text-[#527A64]">
                      {uploaded ? 'แนบภาพหลักฐานแล้ว' : 'รออัปโหลดภาพจริง'}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-semibold text-[#173F35]">{slot.thCategory}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#173F35]/80">
                    {slot.description}
                  </p>

                  {/* Image Slot / Upload Dropzone */}
                  <div className="mt-5">
                    {uploaded ? (
                      <div className="space-y-3">
                        <div className="relative aspect-[4/3] overflow-hidden border border-[#173F35]/20 bg-[#EBE5D7]">
                          <img
                            src={uploaded.dataUrl}
                            alt={uploaded.caption}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="space-y-2 border-t border-[#173F35]/10 pt-3">
                          <label className="block text-[11px] font-medium text-[#527A64]">
                            คำบรรยายใต้ภาพ (Caption)
                            <input
                              type="text"
                              value={uploaded.caption}
                              onChange={(e) => handleMetaUpdate(slot.id, 'caption', e.target.value)}
                              className="mt-1 w-full border border-[#173F35]/20 bg-[#EFE9DC]/50 px-3 py-1.5 text-xs text-[#173F35]"
                            />
                          </label>
                          <label className="block text-[11px] font-medium text-[#527A64]">
                            แหล่งที่มาของภาพ (Source Attribution)
                            <input
                              type="text"
                              value={uploaded.source}
                              onChange={(e) => handleMetaUpdate(slot.id, 'source', e.target.value)}
                              className="mt-1 w-full border border-[#173F35]/20 bg-[#EFE9DC]/50 px-3 py-1.5 text-xs text-[#173F35]"
                            />
                          </label>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="truncate text-[11px] text-[#527A64]">
                            ไฟล์: {uploaded.fileName}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemove(slot.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#9A3412] hover:underline"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            <span>ลบภาพออก</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center border border-dashed border-[#173F35]/30 bg-[#EFE9DC]/40 p-6 text-center transition-colors hover:border-[#173F35] hover:bg-[#EFE9DC]/75">
                        <Camera className="mb-3 h-7 w-7 text-[#527A64]" strokeWidth={1.35} />
                        <p className="font-serif text-base font-medium text-[#173F35]">
                          Upload Field Photograph
                        </p>
                        <p className="mt-1 max-w-xs text-xs leading-relaxed text-[#527A64]">
                          คลิกเพื่ออัปโหลดภาพถ่ายจริงจากเอกสารภาคสนามในหมวด {slot.enCategory}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 border border-[#173F35]/30 bg-[#F5F1E7] px-4 py-2 text-xs font-medium text-[#173F35]">
                          <Upload className="h-3.5 w-3.5" />
                          <span>เลือกไฟล์ภาพจากเครื่อง</span>
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload(
                            slot.id,
                            slot.suggestedCaption,
                            slot.sourcePlaceholder
                          )}
                          className="sr-only"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer Nav */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => onNavigate('findings')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 07 · Key Findings & Detective Quiz
        </button>
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-sm font-medium text-[#173F35] underline underline-offset-4 hover:text-[#527A64]"
        >
          กลับสู่หน้าแรก (01 · Home) →
        </button>
      </div>
    </div>
  );
}
