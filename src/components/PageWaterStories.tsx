import { ArrowRight } from 'lucide-react';
import { PageId } from '../data/canalData';

interface PageWaterStoriesProps {
  onNavigate: (page: PageId) => void;
}

export function PageWaterStories({ onNavigate }: PageWaterStoriesProps) {
  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Chapter 03 · เรื่องเล่าจากสายน้ำ
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          TWO PERIODS, ONE CANAL
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          การเปลี่ยนแปลงของคลองบางมดจากอดีตสู่ปัจจุบัน ผ่านคำบอกเล่าความทรงจำของคนในชุมชน
          เทียบเคียงกับสิ่งที่ทีมนักศึกษาลงพื้นที่สังเกตเห็นจริงบริเวณคลองหลังวัดพุทธบูชา
        </p>
      </header>

      {/* THE PAST vs THE PRESENT Asymmetric Editorial Grid */}
      <section className="py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* THE PAST */}
          <article className="flex flex-col justify-between border border-[#173F35]/20 bg-[#EFE9DC]/65 p-8 sm:p-10">
            <div>
              <div className="flex items-baseline justify-between border-b border-[#173F35]/15 pb-4">
                <span className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
                  Era I · คำบอกเล่าจากความทรงจำ
                </span>
                <span className="text-xs text-[#527A64]">คำบอกเล่าผู้สูงอายุ</span>
              </div>

              <h2 className="mt-6 font-serif text-3xl font-medium text-[#173F35]">THE PAST</h2>
              <p className="mt-1 text-sm font-semibold text-[#527A64]">คลองบางมดในอดีต</p>

              <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#173F35]/90">
                <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-4xl first-letter:font-semibold first-letter:text-[#173F35]">
                  จากคำบอกเล่าของผู้สูงอายุในชุมชน ในอดีตน้ำคลองเคยใสสะอาดมาก
                  สามารถตักมาใช้ซักผ้าและใช้ในชีวิตประจำวันได้
                  โดยใช้สารส้มช่วยให้ตะกอนตกก่อนนำน้ำไปใช้ ส่วนการดื่มน้ำอาศัยการรองน้ำฝนเก็บไว้
                </p>
                <p>
                  นอกจากบทบาทด้านอุปโภคแล้ว คลองยังเป็นเส้นทางสัญจรหลักของคนในพื้นที่
                  และเป็นแหล่งน้ำสำคัญที่สนับสนุนการทำสวนส้ม การเลี้ยงปลา และการเลี้ยงกุ้งของชุมชน
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#173F35]/15 pt-5 text-xs leading-relaxed text-[#527A64]">
              ลักษณะเด่นตามคำบอกเล่า: น้ำใส · ใช้สารส้มตกตะกอน · รองน้ำฝนดื่ม · เส้นทางเรือ · สวนส้มและสัตว์น้ำ
            </div>
          </article>

          {/* THE PRESENT */}
          <article className="flex flex-col justify-between border border-[#173F35]/20 bg-[#173F35] p-8 text-[#F5F1E7] sm:p-10">
            <div>
              <div className="flex items-baseline justify-between border-b border-[#F5F1E7]/15 pb-4">
                <span className="font-serif text-xs tracking-[0.2em] text-[#C9B68C] uppercase">
                  Era II · สภาพการณ์ภาคสนาม
                </span>
                <span className="text-xs text-[#B8C9B4]">คำบอกเล่า + ข้อสังเกตนักศึกษา</span>
              </div>

              <h2 className="mt-6 font-serif text-3xl font-medium text-[#F5F1E7]">THE PRESENT</h2>
              <p className="mt-1 text-sm font-semibold text-[#C9B68C]">คลองบางมดในปัจจุบัน</p>

              <div className="mt-6 space-y-5 text-base leading-[1.85] text-[#F5F1E7]/90">
                <p>
                  ในปัจจุบันชาวบ้านและนักศึกษาที่ลงพื้นที่พบความแตกต่างของสภาพน้ำในบางจุดของคลองหลังวัดพุทธบูชา
                  ทั้งลักษณะน้ำขุ่น สีคล้ำ เศษขยะ และกิ่งไม้ที่สะสมอยู่ตามบริเวณต่าง ๆ
                </p>
                <p>
                  จากคำบอกเล่าของผู้ให้สัมภาษณ์ มีการกล่าวถึงน้ำเสียจากชุมชนและพื้นที่โดยรอบ
                  รวมถึงปัญหาการระบายน้ำและประตูน้ำที่ส่งผลต่อสภาพคลองในปัจจุบัน
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#F5F1E7]/15 pt-5 text-xs leading-relaxed text-[#B8C9B4]">
              ข้อสังเกตและคำบอกเล่า: น้ำขุ่นและสีคล้ำบางจุด · เศษขยะและกิ่งไม้ · น้ำเสียโดยรอบ · ปัญหาการระบายน้ำ
            </div>
          </article>
        </div>
      </section>

      {/* COMMUNITY VOICES Pull Quote */}
      <section className="border-y border-[#173F35]/15 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
            COMMUNITY VOICES
          </p>
          <blockquote className="mt-6 font-serif text-3xl font-medium italic leading-relaxed text-[#173F35] sm:text-5xl">
            “ต่างมาก... เปลี่ยนไปเยอะ”
          </blockquote>
          <p className="mt-6 text-sm font-medium text-[#173F35]">
            — คำบอกเล่าของผู้สูงอายุที่อาศัยอยู่ริมคลอง
          </p>
          <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-[#527A64]">
            หมายเหตุความถูกต้องทางวิชาการ: ข้อความข้างต้นเป็นความรู้สึกและความทรงจำเชิงคุณภาพจากบทสัมภาษณ์ผู้สูงอายุในชุมชน
            ไม่ใช่ผลสรุปจากการตรวจวัดค่าทางห้องปฏิบัติการ
          </p>
        </div>
      </section>

      {/* Link to Field Evidence Slot */}
      <section className="py-12">
        <div className="flex flex-col justify-between gap-6 border border-[#173F35]/15 bg-[#EFE9DC]/40 p-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#173F35]">
              หลักฐานภาพถ่ายเปรียบเทียบสภาพคลองจากพื้นที่จริง
            </p>
            <p className="mt-1 text-xs leading-relaxed text-[#527A64]">
              สามารถแนบภาพถ่ายจริงจากเอกสาร PDF ของกลุ่ม A3-03 ในหมวด Canal Environment เพื่อประกอบเรื่องเล่าจากสายน้ำ
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('gallery')}
            className="shrink-0 border border-[#173F35] px-5 py-2.5 text-xs font-medium tracking-wider text-[#173F35] uppercase transition-colors hover:bg-[#173F35] hover:text-[#F5F1E7]"
          >
            ไปยังคลังภาพหลักฐาน
          </button>
        </div>
      </section>

      {/* Footer Chapter Nav */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => navigateTo('about')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 02 · About The Study
        </button>
        <button
          type="button"
          onClick={() => navigateTo('quality')}
          className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
        >
          <span>Next: 04 · Water Quality</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
