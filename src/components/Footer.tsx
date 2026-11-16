import { PAGES, PageId } from '../data/canalData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenGuide: () => void;
}

export function Footer({ onNavigate, onOpenGuide }: FooterProps) {
  const handleSelect = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#C9B68C]/30 bg-[#173F35] text-[#F5F1E7]">
      <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl font-semibold tracking-wider text-[#F5F1E7]">
              CANAL DETECTIVE
            </p>
            <p className="mt-1 text-base font-medium text-[#C9B68C]">นักสืบคลองบางมด</p>
            <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-[#F5F1E7]/90">
              “ทุกสายน้ำมีเรื่องราว ทุกการเปลี่ยนแปลงมีเบาะแส”
            </p>
            <p className="mt-6 text-xs leading-relaxed text-[#B8C9B4]/80">
              โครงการกิจกรรมการเรียนรู้เพื่อศึกษาคุณภาพน้ำคลองหลังวัดพุทธบูชา ระบบนิเวศ สัตว์น้ำ พืชน้ำ
              ภูมิปัญญาสวนส้มบางมด และวิถีชีวิตชุมชน
            </p>
          </div>

          {/* 7-Page Index */}
          <div className="lg:col-span-4">
            <p className="font-serif text-xs tracking-widest text-[#C9B68C] uppercase">
              Documentary Chapters
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {PAGES.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(p.id)}
                    className="group flex items-baseline gap-2.5 text-left text-sm text-[#F5F1E7]/80 transition-colors hover:text-[#C9B68C]"
                  >
                    <span className="tabular-nums font-serif text-xs text-[#C9B68C]/70">
                      {p.chapter}
                    </span>
                    <span className="group-hover:underline underline-offset-4">{p.thTitle}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Google Sites Implementation */}
          <div className="lg:col-span-3">
            <p className="font-serif text-xs tracking-widest text-[#C9B68C] uppercase">
              Implementation & Integrity
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#F5F1E7]/80">
              เนื้อหาทั้งหมดอ้างอิงจากเอกสารภาคสนามและบทสัมภาษณ์ของกลุ่ม A3-03
              โดยไม่แต่งเติมค่าตรวจวัดทางวิทยาศาสตร์ที่ไม่มีในเอกสาร
            </p>
            <button
              type="button"
              onClick={onOpenGuide}
              className="mt-5 inline-flex items-center border border-[#C9B68C]/60 px-4 py-2.5 text-xs font-medium tracking-wider text-[#F5F1E7] transition-colors hover:bg-[#C9B68C] hover:text-[#173F35]"
            >
              Google Sites & Forms Guide
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#F5F1E7]/15 pt-8 text-xs text-[#B8C9B4] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span>Educational Project</span>
            <span aria-hidden="true">|</span>
            <span>Group A3-03</span>
          </div>
          <p className="tracking-wider">© 2026 CANAL DETECTIVE</p>
        </div>
      </div>
    </footer>
  );
}
