import { ArrowRight } from 'lucide-react';
import { GENERATED_ARTWORK, PageId } from '../data/canalData';

interface PageHomeProps {
  onNavigate: (page: PageId) => void;
}

export function PageHome({ onNavigate }: PageHomeProps) {
  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredCards: {
    chapter: string;
    enTitle: string;
    thTitle: string;
    summary: string;
    target: PageId;
  }[] = [
    {
      chapter: '03',
      enTitle: 'WATER STORIES',
      thTitle: 'เรื่องเล่าจากสายน้ำ',
      summary:
        'เปรียบเทียบความทรงจำจากอดีตที่น้ำคลองใสสะอาดจนตักใช้ได้ กับสภาพน้ำในปัจจุบันจากมุมมองคนริมคลอง',
      target: 'stories',
    },
    {
      chapter: '05',
      enTitle: 'ECOSYSTEM',
      thTitle: 'ระบบนิเวศและสิ่งมีชีวิตในคลอง',
      summary:
        'สำรวจสัตว์น้ำและพืชน้ำพื้นถิ่น ตั้งแต่กุ้งแม่น้ำ หอย ปู ปลาสวาย ผักบุ้ง จอกแหน ไปจนถึงการพบปลาหมอคางดำ',
      target: 'ecosystem',
    },
    {
      chapter: '06',
      enTitle: 'ORANGE GROVE',
      thTitle: 'ภูมิปัญญาสวนส้มบางมด',
      summary:
        'เรียนรู้การยกร่องสวน ขุดท้องร่อง การขยายพันธุ์ และระบบประตูน้ำตามจังหวะน้ำขึ้นน้ำลงจากสวนลุงสมจิตร',
      target: 'orchard',
    },
    {
      chapter: '06',
      enTitle: 'COMMUNITY LIFE',
      thTitle: 'วิถีชีวิตชุมชนริมคลอง',
      summary:
        'ความผูกพันระหว่างผู้คนกับสายน้ำ การใช้เรือสัญจรในอดีต และบทเรียนความเปลี่ยนแปลงของพื้นที่หลังวัดพุทธบูชา',
      target: 'orchard',
    },
  ];

  return (
    <div>
      {/* Full-Width Documentary Hero */}
      <section className="relative overflow-hidden border-b border-[#173F35]/15 bg-[#173F35] text-[#F5F1E7]">
        <div className="relative mx-auto max-w-[1440px]">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-[16/7]">
            <img
              src={GENERATED_ARTWORK.heroCanal}
              alt="ภาพประกอบสารคดีธรรมชาติจำลองบรรยากาศคลองบางมด บ้านเรือนริมน้ำ และเรือสัญจร"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173F35] via-[#173F35]/55 to-[#173F35]/20" />
          </div>

          <div className="relative mx-auto -mt-28 max-w-[1200px] px-5 pb-16 sm:-mt-36 lg:-mt-44 lg:px-8 lg:pb-20">
            <p className="font-serif text-xs tracking-[0.22em] text-[#C9B68C] uppercase">
              Educational Documentary Project · Group A3-03 · Bang Mot Canal
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#F5F1E7] sm:text-5xl lg:text-6xl">
              CANAL DETECTIVE
            </h1>
            <p className="mt-2 text-2xl font-medium text-[#C9B68C] sm:text-3xl">
              นักสืบคลองบางมด
            </p>
            <p className="mt-3 font-serif text-sm tracking-[0.18em] text-[#B8C9B4] uppercase">
              THE STORY OF A CHANGING WATERWAY
            </p>

            <div className="mt-8 border-t border-[#F5F1E7]/20 pt-8">
              <p className="font-serif text-xl italic text-[#F5F1E7] sm:text-2xl">
                “ทุกสายน้ำมีเรื่องราว ทุกการเปลี่ยนแปลงมีเบาะแส”
              </p>
              <p className="mt-2 text-xs text-[#B8C9B4]/85">
                ภาพประกอบด้านบนเป็นงานศิลป์เชิงสารคดีเพื่อสื่อบรรยากาศพื้นที่ (ดูภาพถ่ายภาคสนามจริงในหมวด Field Evidence Gallery)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Introduction & 3 Primary Actions */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              01 · Introduction
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-[#173F35] sm:text-3xl">
              คุณภาพน้ำคลองหลังวัดพุทธบูชา
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#527A64]">
              ข้อมูลทั้งหมดเรียบเรียงจากบันทึกการลงพื้นที่ภาคสนามและคำบอกเล่าของผู้คนในชุมชน
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-6 text-base leading-[1.85] text-[#173F35]/90 sm:text-lg">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:text-[#173F35]">
                คลองบางมดไม่ได้เป็นเพียงเส้นทางของสายน้ำ แต่ยังเป็นพื้นที่ที่เชื่อมโยงธรรมชาติ ผู้คน
                และวิถีชีวิตเข้าด้วยกัน
              </p>
              <p>
                ร่วมออกเดินทางเพื่อค้นหาเรื่องราวของคลองบางมด สำรวจความเปลี่ยนแปลงของคุณภาพน้ำ
                ระบบนิเวศ และวิถีชีวิตของชุมชน ผ่านหลักฐานจากการลงพื้นที่และคำบอกเล่าของผู้คนที่มีประสบการณ์กับสายน้ำแห่งนี้
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigateTo('quality')}
                className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
              >
                <span>EXPLORE THE CANAL</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigateTo('stories')}
                className="inline-flex min-h-[44px] items-center gap-2 border border-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#173F35] uppercase transition-colors hover:bg-[#173F35] hover:text-[#F5F1E7]"
              >
                <span>DISCOVER THE STORY</span>
              </button>
              <button
                type="button"
                onClick={() => navigateTo('findings')}
                className="inline-flex min-h-[44px] items-center gap-2 border border-[#C9B68C] bg-[#EFE9DC] px-6 py-3 text-xs font-medium tracking-widest text-[#173F35] uppercase transition-colors hover:bg-[#C9B68C]/35"
              >
                <span>TAKE THE QUIZ</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MORE THAN JUST WATER + 4 Topic Cards */}
      <section className="border-y border-[#173F35]/15 bg-[#EFE9DC]/65">
        <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              Project Overview
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-[#173F35] sm:text-4xl">
              MORE THAN JUST WATER
            </h2>
            <p className="mt-4 text-base leading-[1.85] text-[#173F35]/85">
              คลองบางมดมีความสัมพันธ์อย่างลึกซึ้งกับวิถีชีวิตของคนในชุมชนหลังวัดพุทธบูชา
              ทั้งการเกษตรสวนส้ม การเดินทางสัญจรทางเรือ การประมงและสัตว์น้ำพื้นบ้าน
              ตลอดจนระบบนิเวศที่เปลี่ยนแปลงไปตามกาลเวลา
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-[#173F35]/15 bg-[#173F35]/15 sm:grid-cols-2 lg:grid-cols-4">
            {featuredCards.map((card, idx) => (
              <button
                key={card.enTitle}
                type="button"
                onClick={() => navigateTo(card.target)}
                className="group flex flex-col justify-between bg-[#F5F1E7] p-7 text-left transition-colors hover:bg-[#173F35] hover:text-[#F5F1E7]"
              >
                <div>
                  <span className="tabular-nums font-serif text-xs tracking-widest text-[#527A64] group-hover:text-[#C9B68C]">
                    0{idx + 1} · CHAPTER {card.chapter}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-medium tracking-wide text-[#173F35] group-hover:text-[#F5F1E7]">
                    {card.enTitle}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#527A64] group-hover:text-[#C9B68C]">
                    {card.thTitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#173F35]/80 group-hover:text-[#F5F1E7]/85">
                    {card.summary}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-medium tracking-wider text-[#173F35] uppercase group-hover:text-[#C9B68C]">
                  <span>อ่านบทความ</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Invitation Band */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-8 border border-[#173F35]/15 bg-[#F5F1E7] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              Begin Your Investigation
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
              เริ่มต้นสืบค้นเบาะแสของสายน้ำบางมด
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#173F35]/80 sm:text-base">
              ติดตามกระบวนการทำงานภาคสนามของกลุ่ม A3-03 ทั้ง 12 คน สำรวจหลักฐานจากชุมชน
              และร่วมทดสอบความเข้าใจผ่านแบบทดสอบนักสืบคลองบางมด
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              type="button"
              onClick={() => navigateTo('about')}
              className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
            >
              <span>02 · About The Study</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => navigateTo('gallery')}
              className="inline-flex min-h-[44px] items-center gap-2 border border-[#173F35]/30 px-6 py-3 text-xs font-medium tracking-widest text-[#173F35] uppercase transition-colors hover:border-[#173F35]"
            >
              <span>Field Evidence Gallery</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
