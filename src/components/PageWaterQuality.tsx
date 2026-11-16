import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId, WATER_QUALITY_TOPICS } from '../data/canalData';

interface PageWaterQualityProps {
  onNavigate: (page: PageId) => void;
}

type SourceFilter = 'all' | 'interview' | 'observation';

export function PageWaterQuality({ onNavigate }: PageWaterQualityProps) {
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('all');

  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Chapter 04 · คุณภาพน้ำและปัจจัยการเปลี่ยนแปลง
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          UNDERSTANDING WATER QUALITY
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          วิเคราะห์ปัจจัยที่เกี่ยวข้องกับคุณภาพน้ำคลองหลังวัดพุทธบูชาออกเป็น 3 ประเด็นหลัก
          โดยแยกข้อมูลจากคำบอกเล่าของผู้ให้สัมภาษณ์ออกจากข้อสังเกตภาคสนามของนักศึกษาอย่างชัดเจน
        </p>

        {/* Source Transparency Notice & Interactive Filter */}
        <div className="mt-8 flex flex-col justify-between gap-4 border border-[#173F35]/15 bg-[#EFE9DC]/65 p-5 lg:flex-row lg:items-center">
          <div className="max-w-xl text-xs leading-relaxed text-[#173F35]/85">
            <strong className="font-semibold text-[#173F35]">
              ข้อกำหนดความถูกต้องของแหล่งข้อมูล:
            </strong>{' '}
            รายงานนี้ไม่สร้างค่าวิเคราะห์ทางวิทยาศาสตร์ (เช่น pH, DO หรือ BOD) ที่ไม่มีในเอกสารหลัก
            และไม่กล่าวหาบุคคลหรือหน่วยงานใดโดยไม่มีหลักฐานยืนยัน
          </div>

          <div
            role="group"
            aria-label="Filter evidence source type"
            className="flex shrink-0 items-center gap-1 border border-[#173F35]/20 bg-[#F5F1E7] p-1"
          >
            <button
              type="button"
              onClick={() => setSourceFilter('all')}
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium transition-colors ${
                sourceFilter === 'all'
                  ? 'bg-[#173F35] text-[#F5F1E7]'
                  : 'text-[#173F35]/70 hover:text-[#173F35]'
              }`}
            >
              แสดงทั้งหมด
            </button>
            <button
              type="button"
              onClick={() => setSourceFilter('interview')}
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium transition-colors ${
                sourceFilter === 'interview'
                  ? 'bg-[#173F35] text-[#F5F1E7]'
                  : 'text-[#173F35]/70 hover:text-[#173F35]'
              }`}
            >
              คำบอกเล่าสัมภาษณ์
            </button>
            <button
              type="button"
              onClick={() => setSourceFilter('observation')}
              className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium transition-colors ${
                sourceFilter === 'observation'
                  ? 'bg-[#173F35] text-[#F5F1E7]'
                  : 'text-[#173F35]/70 hover:text-[#173F35]'
              }`}
            >
              ข้อสังเกตนักศึกษา
            </button>
          </div>
        </div>
      </header>

      {/* 3 Core Water Quality Issues */}
      <section className="divide-y divide-[#173F35]/15">
        {WATER_QUALITY_TOPICS.map((topic) => (
          <article key={topic.index} className="py-12">
            <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <span className="tabular-nums font-serif text-xs tracking-widest text-[#527A64]">
                  ISSUE {topic.index}
                </span>
                <h2 className="mt-1 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
                  {topic.enTitle}
                </h2>
                <p className="mt-1 text-base font-semibold text-[#527A64]">{topic.thTitle}</p>
              </div>
              <span className="text-xs text-[#527A64]">{topic.cautionNote}</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {(sourceFilter === 'all' || sourceFilter === 'interview') && (
                <div className="border border-[#173F35]/15 bg-[#EFE9DC]/45 p-7">
                  <p className="font-serif text-xs tracking-[0.18em] text-[#527A64] uppercase">
                    Interview Accounts · คำบอกเล่าจากการสัมภาษณ์
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#173F35]/90 sm:text-base">
                    {topic.interviewEvidence.map((line, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="tabular-nums font-serif text-xs text-[#C9B68C] mt-1">
                          0{i + 1}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(sourceFilter === 'all' || sourceFilter === 'observation') && (
                <div className="border border-[#173F35]/15 bg-[#F5F1E7] p-7">
                  <p className="font-serif text-xs tracking-[0.18em] text-[#173F35] uppercase">
                    Student Observations · ข้อสังเกตภาคสนามของนักศึกษา
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#173F35]/90 sm:text-base">
                    {topic.fieldObservation.map((line, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="tabular-nums font-serif text-xs text-[#527A64] mt-1">
                          0{i + 1}
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Environmental Pressures 5-Point Summary */}
      <section className="border-t border-[#173F35]/15 py-12">
        <div className="border border-[#173F35]/20 bg-[#173F35] p-8 text-[#F5F1E7] sm:p-10">
          <p className="font-serif text-xs tracking-[0.2em] text-[#C9B68C] uppercase">
            5 Pressure Factors Identified in Fieldwork
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-[#F5F1E7]">
            ประเด็นปัจจัยที่ส่งผลต่อแหล่งน้ำจากการรวบรวมข้อมูล
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              'น้ำเสียจากกิจกรรมของมนุษย์',
              'การขยายตัวของหมู่บ้านจัดสรรและสิ่งปลูกสร้าง',
              'ขยะและสิ่งปฏิกูลในลำคลอง',
              'ปัญหาน้ำเค็มรุกล้ำ',
              'ปัญหาน้ำท่วมและการระบายน้ำ',
            ].map((item, idx) => (
              <div key={item} className="border border-[#F5F1E7]/15 p-4">
                <p className="tabular-nums font-serif text-xs text-[#C9B68C]">0{idx + 1}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#F5F1E7]/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Chapter Nav */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => navigateTo('stories')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 03 · Water Stories
        </button>
        <button
          type="button"
          onClick={() => navigateTo('ecosystem')}
          className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
        >
          <span>Next: 05 · Ecosystem</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
