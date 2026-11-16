import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GENERATED_ARTWORK, PageId } from '../data/canalData';
import { EditorialImage } from './EditorialImage';

interface PageOrangeGroveProps {
  onNavigate: (page: PageId) => void;
}

export function PageOrangeGrove({ onNavigate }: PageOrangeGroveProps) {
  const [tideState, setTideState] = useState<'high' | 'low'>('high');

  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Chapter 06 · สวนส้มบางมดและวิถีชีวิตชุมชน
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          THE LEGACY OF BANG MOT ORANGE
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          ภูมิปัญญาการทำสวนส้มบางมดของ{' '}
          <strong className="font-semibold text-[#173F35]">ลุงสมจิตร</strong>{' '}
          ที่ผูกพันกับจังหวะน้ำขึ้นน้ำลงของลำคลอง ตลอดจนวิถีชีวิตชุมชนริมน้ำที่สืบทอดกันมาหลายทศวรรษ
        </p>
      </header>

      {/* Uncle Somchit Profile & Orchard Illustration */}
      <section className="border-b border-[#173F35]/15 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <EditorialImage
              src={GENERATED_ARTWORK.orangeGrove}
              alt="ภาพประกอบสารคดีธรรมชาติแสดงร่องสวนส้มบางมดและท้องร่องน้ำ"
              figureNumber="Plate III"
              caption="ภาพประกอบเชิงสารคดี: การยกร่องสวนและท้องร่องจัดการน้ำในสวนส้มบางมด"
              sourceLabel="Editorial Documentary Illustration · ดูภาพจริงในคลังภาพหลักฐาน"
            />
          </div>

          <div className="lg:col-span-6">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              Orchard Wisdom · บทสัมภาษณ์สวนส้มของลุงสมจิตร
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
              ภูมิปัญญาที่สืบทอดจากครอบครัว
            </h2>

            {/* Key Facts Grid */}
            <div className="mt-6 grid grid-cols-2 border border-[#173F35]/15 bg-[#EFE9DC]/50">
              <div className="border-b border-r border-[#173F35]/15 p-5">
                <p className="tabular-nums font-serif text-3xl font-medium text-[#173F35]">78 ปี</p>
                <p className="mt-1 text-xs text-[#527A64]">อายุผู้ให้สัมภาษณ์ (ลุงสมจิตร)</p>
              </div>
              <div className="border-b border-[#173F35]/15 p-5">
                <p className="tabular-nums font-serif text-3xl font-medium text-[#173F35]">15–16 ปี</p>
                <p className="mt-1 text-xs text-[#527A64]">ช่วงอายุที่เริ่มทำสวนส้ม</p>
              </div>
              <div className="border-r border-[#173F35]/15 p-5">
                <p className="font-serif text-lg font-medium text-[#173F35]">ยกร่อง & ท้องร่อง</p>
                <p className="mt-1 text-xs text-[#527A64]">เทคนิคจัดรูปแปลงเพื่อจัดการน้ำ</p>
              </div>
              <div className="p-5">
                <p className="font-serif text-lg font-medium text-[#173F35]">เสียบยอด · ทาบกิ่ง · ติดตา</p>
                <p className="mt-1 text-xs text-[#527A64]">เทคนิคการขยายพันธุ์พืชในสวน</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-[1.85] text-[#173F35]/90 sm:text-base">
              <p>
                ลุงสมจิตรเรียนรู้ภูมิปัญญาการทำสวนจากครอบครัว โดยใช้วิธี{' '}
                <strong className="font-semibold text-[#173F35]">ยกร่องสวนและขุดท้องร่อง</strong>{' '}
                เพื่อกักเก็บและระบายน้ำให้เหมาะสมกับรากไม้ผลริมคลอง
              </p>
              <p>
                ภายในพื้นที่สวนไม่ได้ปลูกเพียงส้มเท่านั้น แต่ยังปลูกพืชหลากหลายชนิดร่วมกัน ได้แก่{' '}
                <strong className="font-semibold text-[#173F35]">
                  ส้มโอ มะกรูด มะนาว มะรุม และผักสวนครัว
                </strong>{' '}
                พร้อมใช้วิธีขยายพันธุ์พืชทั้งการเสียบยอด การทาบกิ่ง และการติดตา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive WATER MANAGEMENT Section */}
      <section className="border-b border-[#173F35]/15 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              WATER MANAGEMENT
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-[#173F35]">
              การจัดการประตูน้ำในอดีต
            </h2>
            <p className="mt-4 text-sm leading-[1.85] text-[#173F35]/85 sm:text-base">
              ชาวสวนส้มบางมดในอดีตทำงานสอดคล้องกับจังหวะธรรมชาติของน้ำขึ้นน้ำลง
              ลองกดสลับสภาวะน้ำด้านล่างเพื่อดูกลไกการเปิด–ปิดประตูน้ำตามคำบอกเล่าในรายงานภาคสนาม
            </p>

            <div className="mt-6 flex gap-2">
              <button
                type="button"
                onClick={() => setTideState('high')}
                className={`min-h-[44px] flex-1 border px-4 py-2.5 text-xs font-medium tracking-wider uppercase transition-colors ${
                  tideState === 'high'
                    ? 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]'
                    : 'border-[#173F35]/25 text-[#173F35] hover:border-[#173F35]'
                }`}
              >
                เมื่อน้ำทะเลขึ้น (High Tide)
              </button>
              <button
                type="button"
                onClick={() => setTideState('low')}
                className={`min-h-[44px] flex-1 border px-4 py-2.5 text-xs font-medium tracking-wider uppercase transition-colors ${
                  tideState === 'low'
                    ? 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]'
                    : 'border-[#173F35]/25 text-[#173F35] hover:border-[#173F35]'
                }`}
              >
                เมื่อน้ำทะเลลดลง (Low Tide)
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-[#173F35]/20 bg-[#EFE9DC]/65 p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#173F35]/15 pb-4">
                <span className="font-serif text-xs tracking-widest text-[#527A64] uppercase">
                  {tideState === 'high' ? 'Sluice Gate Status: CLOSED' : 'Sluice Gate Status: OPEN'}
                </span>
                <span className="text-sm font-semibold text-[#173F35]">
                  {tideState === 'high' ? 'สถานะ: ปิดประตูน้ำ' : 'สถานะ: เปิดประตูน้ำ'}
                </span>
              </div>

              {/* Minimal Architectural Sluice Diagram */}
              <div className="my-6 grid grid-cols-3 items-center gap-3 text-center">
                <div className="border border-[#173F35]/15 bg-[#F5F1E7] p-4">
                  <p className="text-xs text-[#527A64]">ฝั่งคลอง / น้ำทะเล</p>
                  <p className="mt-1 font-serif text-lg font-medium text-[#173F35]">
                    {tideState === 'high' ? 'ระดับน้ำสูงขึ้น' : 'ระดับน้ำลดลง'}
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center p-2">
                  <div
                    className={`h-16 w-4 border-2 transition-transform duration-300 ${
                      tideState === 'high'
                        ? 'translate-y-0 border-[#173F35] bg-[#173F35]'
                        : '-translate-y-4 border-[#527A64] bg-[#B8C9B4]/50'
                    }`}
                  />
                  <span className="mt-2 text-xs font-semibold text-[#173F35]">
                    {tideState === 'high' ? 'ปิดประตูน้ำ' : 'เปิดประตูน้ำ'}
                  </span>
                </div>

                <div className="border border-[#173F35]/15 bg-[#F5F1E7] p-4">
                  <p className="text-xs text-[#527A64]">ฝั่งท้องร่องสวน</p>
                  <p className="mt-1 font-serif text-lg font-medium text-[#173F35]">
                    {tideState === 'high' ? 'กั้นน้ำไม่ให้ล้นเข้า' : 'ระบายน้ำออกจากสวน'}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#173F35]/90">
                {tideState === 'high'
                  ? 'เมื่อน้ำทะเลขึ้น ชาวสวนจะปิดประตูน้ำ เพื่อควบคุมระดับน้ำและป้องกันผลกระทบจากน้ำภายนอกเข้าสู่ร่องสวนส้ม'
                  : 'เมื่อน้ำทะเลลดลง ชาวสวนจะเปิดประตูน้ำ เพื่อระบายน้ำออกจากร่องสวน ช่วยให้ระบบน้ำในสวนหมุนเวียนได้อย่างสมดุล'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pressures on the Orchard & COMMUNITY LIFE */}
      <section className="py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="border border-[#173F35]/15 bg-[#F5F1E7] p-8">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              Orchard Challenges
            </p>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[#173F35]">
              ผลกระทบต่อสวนส้มบางมด
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-[#173F35]/85 sm:text-base">
              จากการสัมภาษณ์และข้อมูลภาคสนาม การทำสวนส้มบางมดต้องเผชิญกับความท้าทายที่เปลี่ยนแปลงสภาพแวดล้อมการเพาะปลูก ได้แก่
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-[#173F35]/15 pt-5 text-sm text-[#173F35]/90">
              <li className="flex gap-3">
                <span className="tabular-nums font-serif text-xs text-[#527A64]">01</span>
                <span>น้ำเสียจากชุมชนและพื้นที่โดยรอบ</span>
              </li>
              <li className="flex gap-3">
                <span className="tabular-nums font-serif text-xs text-[#527A64]">02</span>
                <span>ปัญหาน้ำเค็มที่ส่งผลต่อพืชผลในร่องสวน</span>
              </li>
              <li className="flex gap-3">
                <span className="tabular-nums font-serif text-xs text-[#527A64]">03</span>
                <span>ปัญหาน้ำท่วมและการระบายน้ำเมื่อประตูน้ำบางแห่งชำรุด</span>
              </li>
              <li className="flex gap-3">
                <span className="tabular-nums font-serif text-xs text-[#527A64]">04</span>
                <span>การเปลี่ยนแปลงของพื้นที่และสิ่งปลูกสร้างโดยรอบสวน</span>
              </li>
            </ul>
          </article>

          <article className="border border-[#173F35]/15 bg-[#EFE9DC]/55 p-8">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              COMMUNITY LIFE
            </p>
            <h3 className="mt-2 font-serif text-2xl font-medium text-[#173F35]">
              วิถีชีวิตริมคลองและความผูกพันกับธรรมชาติ
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-[1.85] text-[#173F35]/85 sm:text-base">
              <p>
                คลองบางมดเคยเป็นหัวใจของการเดินทางและการคมนาคมทางน้ำ
                ชาวบ้านใช้เรือสัญจรไปมาหาสู่กัน ค้าขายผลผลิตจากสวน และใช้สายน้ำเป็นส่วนหนึ่งของชีวิตประจำวันรอบวัดพุทธบูชา
              </p>
              <p>
                แม้รูปแบบการเดินทางและสภาพแวดล้อมรอบคลองจะเปลี่ยนแปลงไปตามยุคสมัย
                แต่เรื่องราวของเรือไม้ ร่องสวน และความทรงจำริมคลองยังคงสะท้อนความสัมพันธ์อันแนบแน่นระหว่างผู้คนกับสายน้ำ
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer Chapter Nav */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => navigateTo('ecosystem')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 05 · Ecosystem
        </button>
        <button
          type="button"
          onClick={() => navigateTo('findings')}
          className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
        >
          <span>Next: 07 · Key Findings & Detective Quiz</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
