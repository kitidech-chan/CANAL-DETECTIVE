import { ArrowRight } from 'lucide-react';
import { INTERVIEW_PERSPECTIVES, PageId, WORKFLOW_STEPS } from '../data/canalData';

interface PageAboutProps {
  onNavigate: (page: PageId) => void;
}

export function PageAbout({ onNavigate }: PageAboutProps) {
  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const studyMetrics = [
    { value: '12', label: 'สมาชิกนักศึกษาทั้งหมด', sub: 'กลุ่มศึกษา A3-03' },
    { value: '3', label: 'กลุ่มย่อยลงพื้นที่', sub: 'แบ่งกลุ่มละ 4 คน' },
    { value: '4', label: 'ผู้ให้สัมภาษณ์หลัก', sub: 'ไม่เปิดเผยชื่อส่วนบุคคล' },
    { value: '3 จุด', label: 'พื้นที่สำรวจหลัก', sub: 'ริมคลอง · ชุมชน · สวนส้มลุงสมจิตร' },
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Chapter 02 · เกี่ยวกับการศึกษา
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          THE STUDY BEHIND THE STORY
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          การศึกษาครั้งนี้เกิดจากความสนใจในความงามของธรรมชาติและการเปลี่ยนแปลงของคลองบางมด
          โดยกลุ่มนักศึกษาเลือกศึกษาประเด็นคุณภาพน้ำคลองหลังวัดพุทธบูชา
          เพื่อเรียนรู้ความสัมพันธ์ระหว่างคุณภาพน้ำ ระบบนิเวศ และวิถีชีวิตของชุมชน
        </p>
      </header>

      {/* Fieldwork Metrics Strip */}
      <section aria-label="Fieldwork Structure" className="py-12">
        <div className="grid grid-cols-2 border border-[#173F35]/15 bg-[#EFE9DC]/50 lg:grid-cols-4">
          {studyMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`p-6 sm:p-8 ${
                idx < studyMetrics.length - 1 ? 'border-b border-r border-[#173F35]/15 lg:border-b-0' : ''
              }`}
            >
              <p className="tabular-nums font-serif text-3xl font-medium text-[#173F35] sm:text-4xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#173F35]">{metric.label}</p>
              <p className="mt-1 text-xs text-[#527A64]">{metric.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Fieldwork Workflow */}
      <section className="border-t border-[#173F35]/15 py-14">
        <div className="mb-10 max-w-2xl">
          <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
            Methodology
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
            ขั้นตอนการทำงานภาคสนาม
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STEPS.map((item) => (
            <article
              key={item.step}
              className="flex flex-col justify-between border border-[#173F35]/15 bg-[#F5F1E7] p-6"
            >
              <div>
                <p className="tabular-nums font-serif text-xs tracking-widest text-[#C9B68C]">
                  STEP {item.step}
                </p>
                <h3 className="mt-3 font-serif text-xl font-medium text-[#173F35]">
                  {item.enTitle}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#527A64]">{item.thTitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#173F35]/80">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INTERVIEW PERSPECTIVES (4 Anonymous Voices) */}
      <section className="border-t border-[#173F35]/15 py-14">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              Community Sources
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
              INTERVIEW PERSPECTIVES
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#173F35]/80">
              นำเสนอผู้ให้สัมภาษณ์หลักทั้ง 4 รายแบบไม่เปิดเผยชื่อส่วนบุคคล
              เพื่อเคารพความเป็นส่วนตัวและคงความน่าเชื่อถือของข้อมูลภาคสนาม
            </p>
          </div>
          <span className="text-xs text-[#527A64]">
            กลุ่มผู้ให้ข้อมูล: 4 บทบาทหลักในชุมชน
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {INTERVIEW_PERSPECTIVES.map((person) => (
            <article
              key={person.index}
              className="border border-[#173F35]/15 bg-[#EFE9DC]/40 p-7"
            >
              <div className="flex items-baseline justify-between gap-4 border-b border-[#173F35]/10 pb-4">
                <div>
                  <span className="tabular-nums font-serif text-xs tracking-widest text-[#527A64]">
                    INTERVIEWEE {person.index}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-[#173F35]">{person.roleTitle}</h3>
                  <p className="font-serif text-xs italic text-[#527A64]">{person.enRole}</p>
                </div>
              </div>
              <p className="mt-4 text-xs font-medium tracking-wide text-[#527A64]">
                ประเด็นหลัก: {person.focusArea}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#173F35]/85">{person.summary}</p>
              <p className="mt-4 border-t border-[#173F35]/10 pt-3 text-xs text-[#173F35]/60">
                {person.privacyNote}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Next Chapter CTA */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => navigateTo('home')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 01 · Home
        </button>
        <button
          type="button"
          onClick={() => navigateTo('stories')}
          className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
        >
          <span>Next: 03 · Water Stories</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
