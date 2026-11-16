import { ArrowRight } from 'lucide-react';
import { GENERATED_ARTWORK, PageId } from '../data/canalData';
import { EditorialImage } from './EditorialImage';

interface PageEcosystemProps {
  onNavigate: (page: PageId) => void;
}

export function PageEcosystem({ onNavigate }: PageEcosystemProps) {
  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aquaticAnimals = [
    { name: 'กุ้งแม่น้ำ', note: 'สัตว์น้ำที่เคยพบในระบบนิเวศคลองจากคำบอกเล่าในอดีต' },
    { name: 'กุ้ง', note: 'เกี่ยวข้องกับการเลี้ยงกุ้งและการอยู่อาศัยตามแนวคลองในอดีต' },
    { name: 'หอย', note: 'สิ่งมีชีวิตพื้นท้องน้ำที่พบตามคำบอกเล่าและการสำรวจ' },
    { name: 'ปู', note: 'สัตว์น้ำบริเวณตลิ่งและร่องสวนริมคลอง' },
    { name: 'ปลาสวาย', note: 'ปลาพื้นถิ่นที่ผู้จำหน่ายปลาและอาหารปลากล่าวถึงว่ามีจำนวนลดลง' },
    { name: 'ปลาหมอคางดำ', note: 'ปลาที่พบในคลองตามคำบอกเล่าของผู้จำหน่ายปลาและอาหารปลา' },
  ];

  const aquaticPlants = [
    { name: 'ผักบุ้ง', note: 'พืชน้ำที่ขึ้นตามแนวตลิ่งและร่องน้ำในพื้นที่คลองบางมด' },
    { name: 'จอกแหน', note: 'พืชน้ำลอยผิวที่ปรากฏในแหล่งน้ำและร่องสวน' },
    { name: 'ดอกบัว', note: 'พืชน้ำที่พบในบริเวณคลองและพื้นที่สวนในชุมชน' },
    { name: 'พืชน้ำชนิดต่าง ๆ', note: 'พรรณไม้น้ำหลากหลายชนิดที่พบในพื้นที่สวนและแนวคลอง' },
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Chapter 05 · ระบบนิเวศและสิ่งมีชีวิตในคลอง
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          LIFE WITHIN THE WATER
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          สำรวจความหลากหลายของสัตว์น้ำและพืชน้ำในคลองบางมดและพื้นที่สวน
          จากการรวบรวมคำบอกเล่าของคนในชุมชนและการสังเกตภาคสนามของนักศึกษากลุ่ม A3-03
        </p>
      </header>

      {/* Section 1: AQUATIC ANIMALS + Naturalist Plate */}
      <section className="border-b border-[#173F35]/15 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              01 · Fauna Inventory
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-[#173F35]">
              AQUATIC ANIMALS
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#527A64]">สัตว์น้ำที่พบจากข้อมูลภาคสนาม</p>

            <dl className="mt-8 divide-y divide-[#173F35]/15 border-y border-[#173F35]/15">
              {aquaticAnimals.map((animal, idx) => (
                <div key={animal.name} className="grid grid-cols-12 gap-4 py-4">
                  <dt className="col-span-5 flex items-baseline gap-2.5 text-base font-semibold text-[#173F35]">
                    <span className="tabular-nums font-serif text-xs text-[#527A64]">
                      0{idx + 1}
                    </span>
                    <span>{animal.name}</span>
                  </dt>
                  <dd className="col-span-7 text-sm leading-relaxed text-[#173F35]/80">
                    {animal.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <EditorialImage
              src={GENERATED_ARTWORK.faunaPlate}
              alt="ภาพวาดประกอบสารคดีธรรมชาติแสดงลักษณะปลาสวาย ปลาหมอคางดำ และกุ้งแม่น้ำ"
              figureNumber="Plate I"
              caption="ภาพประกอบเชิงสารคดีธรรมชาติ: ปลาสวาย ปลาหมอคางดำ และกุ้งแม่น้ำ"
              sourceLabel="Editorial Naturalist Illustration · ไม่ใช่ภาพถ่ายภาคสนาม"
            />
          </div>
        </div>
      </section>

      {/* Section 2: AQUATIC PLANTS + Botanical Plate */}
      <section className="border-b border-[#173F35]/15 py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <EditorialImage
              src={GENERATED_ARTWORK.floraPlate}
              alt="ภาพวาดพฤกษศาสตร์สารคดีธรรมชาติแสดงผักบุ้ง จอกแหน และดอกบัว"
              figureNumber="Plate II"
              caption="ภาพประกอบเชิงพฤกษศาสตร์: ผักบุ้ง จอกแหน และดอกบัว"
              sourceLabel="Editorial Botanical Illustration · ไม่ใช่ภาพถ่ายภาคสนาม"
            />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              02 · Flora Inventory
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-[#173F35]">
              AQUATIC PLANTS
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#527A64]">พืชน้ำที่พบในคลองและพื้นที่สวน</p>

            <dl className="mt-8 divide-y divide-[#173F35]/15 border-y border-[#173F35]/15">
              {aquaticPlants.map((plant, idx) => (
                <div key={plant.name} className="grid grid-cols-12 gap-4 py-4">
                  <dt className="col-span-5 flex items-baseline gap-2.5 text-base font-semibold text-[#173F35]">
                    <span className="tabular-nums font-serif text-xs text-[#527A64]">
                      0{idx + 1}
                    </span>
                    <span>{plant.name}</span>
                  </dt>
                  <dd className="col-span-7 text-sm leading-relaxed text-[#173F35]/80">
                    {plant.note}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border border-[#173F35]/15 bg-[#EFE9DC]/55 p-6">
              <p className="font-serif text-xs tracking-widest text-[#527A64] uppercase">
                Ecological Shift
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#173F35]/90">
                <strong className="font-semibold text-[#173F35]">การเปลี่ยนแปลงจากอดีตสู่ปัจจุบัน:</strong>{' '}
                ในอดีตลำคลองเคยเอื้อต่อการเลี้ยงปลาและการเลี้ยงกุ้ง รวมถึงมีความอุดมสมบูรณ์ของสัตว์น้ำและพืชน้ำพื้นถิ่น
                ขณะที่ในปัจจุบันคำบอกเล่าจากผู้คนในชุมชนสะท้อนว่าสัตว์น้ำพื้นถิ่นและพืชน้ำบางชนิดมีจำนวนลดลง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Section: BLACKCHIN TILAPIA */}
      <section className="py-14">
        <div className="border border-[#173F35]/20 bg-[#173F35] p-8 text-[#F5F1E7] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="font-serif text-xs tracking-[0.22em] text-[#C9B68C] uppercase">
                Special Ecological Focus
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-[#F5F1E7]">
                BLACKCHIN TILAPIA
              </h2>
              <p className="mt-1 text-base font-medium text-[#C9B68C]">
                ปลาหมอคางดำและคำบอกเล่าจากพื้นที่
              </p>
            </div>

            <div className="space-y-5 text-sm leading-[1.85] text-[#F5F1E7]/90 sm:text-base lg:col-span-7">
              <p>
                จากการสัมภาษณ์{' '}
                <strong className="font-semibold text-[#C9B68C]">
                  ผู้จำหน่ายปลาและอาหารปลา
                </strong>{' '}
                ในพื้นที่ มีการกล่าวถึงการพบเห็น{' '}
                <strong className="font-semibold text-[#F5F1E7]">ปลาหมอคางดำ</strong>{' '}
                ภายในคลองบางมด ควบคู่กับข้อสังเกตจากประสบการณ์ตรงว่าจำนวน{' '}
                <strong className="font-semibold text-[#F5F1E7]">ปลาสวาย</strong>{' '}
                ในบริเวณดังกล่าวลดลงเมื่อเทียบกับช่วงเวลาที่ผ่านมา
              </p>

              <div className="border border-[#C9B68C]/40 bg-[#F5F1E7]/5 p-5">
                <p className="font-serif text-xs tracking-widest text-[#C9B68C] uppercase">
                  ข้อจำกัดด้านหลักฐานทางวิทยาศาสตร์
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#B8C9B4] sm:text-sm">
                  ข้อมูลข้างต้นเป็นคำบอกเล่าจากผู้ให้สัมภาษณ์ในชุมชน
                  รายงานฉบับนี้ <strong className="text-[#F5F1E7]">ไม่สรุปว่าปลาหมอคางดำเป็นสาเหตุโดยตรงของการลดลงของปลาสวาย</strong>{' '}
                  เนื่องจากเอกสารภาคสนามไม่ได้มีการศึกษาหรือยืนยันความสัมพันธ์เชิงสาเหตุทางวิทยาศาสตร์ระหว่างสัตว์น้ำทั้งสองชนิด
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Chapter Nav */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => navigateTo('quality')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 04 · Water Quality
        </button>
        <button
          type="button"
          onClick={() => navigateTo('orchard')}
          className="inline-flex min-h-[44px] items-center gap-2 bg-[#173F35] px-6 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
        >
          <span>Next: 06 · Orange Grove & Community</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
