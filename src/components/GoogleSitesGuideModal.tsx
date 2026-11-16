import { useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import {
  DETECTIVE_QUIZ,
  GOOGLE_SITES_STEPS,
  PAGES,
  PRE_PUBLISH_CHECKLIST,
} from '../data/canalData';

interface GoogleSitesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type GuideTab = 'architecture' | 'copy-content' | 'quiz-key' | 'steps-checklist';

const PAGE_COPY_BLOCKS: { page: string; enTitle: string; thContent: string; photoTip: string }[] = [
  {
    page: 'PAGE 01 · HOME',
    enTitle: 'CANAL DETECTIVE — THE STORY OF A CHANGING WATERWAY',
    thContent: `CANAL DETECTIVE
นักสืบคลองบางมด
THE STORY OF A CHANGING WATERWAY

"ทุกสายน้ำมีเรื่องราว ทุกการเปลี่ยนแปลงมีเบาะแส"

คลองบางมดไม่ได้เป็นเพียงเส้นทางของสายน้ำ แต่ยังเป็นพื้นที่ที่เชื่อมโยงธรรมชาติ ผู้คน และวิถีชีวิตเข้าด้วยกัน
ร่วมออกเดินทางเพื่อค้นหาเรื่องราวของคลองบางมด สำรวจความเปลี่ยนแปลงของคุณภาพน้ำ ระบบนิเวศ และวิถีชีวิตของชุมชน ผ่านหลักฐานจากการลงพื้นที่และคำบอกเล่าของผู้คนที่มีประสบการณ์กับสายน้ำแห่งนี้

MORE THAN JUST WATER
คลองบางมดมีความสัมพันธ์กับวิถีชีวิตของคนในชุมชน ทั้งการเกษตร การเดินทาง การประมงพื้นบ้าน และระบบนิเวศ
1. WATER STORIES | 2. ECOSYSTEM | 3. ORANGE GROVE | 4. COMMUNITY LIFE`,
    photoTip: 'Header เต็มความกว้าง: ภาพคลองบางมดมุมกว้างจากเอกสารภาคสนาม + 4 การ์ดหัวข้อย่อยด้านล่าง',
  },
  {
    page: 'PAGE 02 · ABOUT THE STUDY',
    enTitle: 'THE STUDY BEHIND THE STORY',
    thContent: `เกี่ยวกับการศึกษา (THE STUDY BEHIND THE STORY)

การศึกษาครั้งนี้เกิดจากความสนใจในความงามของธรรมชาติและการเปลี่ยนแปลงของคลองบางมด โดยกลุ่มนักศึกษาเลือกศึกษาประเด็นคุณภาพน้ำคลองหลังวัดพุทธบูชา เพื่อเรียนรู้ความสัมพันธ์ระหว่างคุณภาพน้ำ ระบบนิเวศ และวิถีชีวิตของชุมชน

ข้อมูลจากเอกสารภาคสนาม (กลุ่ม A3-03):
- สมาชิกทั้งหมด 12 คน (แบ่งเป็น 3 กลุ่มย่อย กลุ่มละ 4 คน)
- ผู้ให้สัมภาษณ์หลัก 4 ราย
- พื้นที่สำรวจประกอบด้วยริมคลอง บ้านเรือนชุมชน และสวนส้มของลุงสมจิตร

ขั้นตอนการทำงาน:
01. PLANNING – เตรียมคำถามและวางแผนการลงพื้นที่
02. FIELDWORK – สำรวจพื้นที่จริงและสัมภาษณ์ชุมชน
03. DOCUMENTATION – บันทึกภาพและรวบรวมข้อมูล
04. ANALYSIS – วิเคราะห์และเชื่อมโยงข้อมูล

INTERVIEW PERSPECTIVES (ไม่เปิดเผยชื่อส่วนบุคคล):
- แม่ค้าขายขนมและน้ำบริเวณวัด
- อดีตเกษตรกรสวนส้ม
- ผู้จำหน่ายปลาและอาหารปลา
- ผู้สูงอายุที่อาศัยอยู่ริมคลอง`,
    photoTip: 'วาง Layout แบบ 2 คอลัมน์: ภาพทีมลงพื้นที่/บรรยากาศวัดคู่กับขั้นตอนการทำงาน 4 ขั้นตอน',
  },
  {
    page: 'PAGE 03 · WATER STORIES',
    enTitle: 'TWO PERIODS, ONE CANAL',
    thContent: `เรื่องเล่าจากสายน้ำ (TWO PERIODS, ONE CANAL)

THE PAST (อดีต):
จากคำบอกเล่าของผู้สูงอายุในชุมชน ในอดีตน้ำคลองเคยใสสะอาดมาก สามารถตักมาใช้ซักผ้าและใช้ในชีวิตประจำวันได้ โดยใช้สารส้มช่วยให้ตะกอนตกก่อนนำน้ำไปใช้ ส่วนการดื่มน้ำอาศัยการรองน้ำฝนเก็บไว้ คลองยังเป็นเส้นทางสัญจรหลักและสนับสนุนการทำสวนส้ม การเลี้ยงปลา และการเลี้ยงกุ้ง

THE PRESENT (ปัจจุบัน):
ในปัจจุบันชาวบ้านและนักศึกษาที่ลงพื้นที่พบความแตกต่างของสภาพน้ำในบางจุด ทั้งน้ำขุ่น สีคล้ำ เศษขยะ และกิ่งไม้ที่สะสมตามบริเวณต่าง ๆ จากคำบอกเล่าของผู้ให้สัมภาษณ์ มีการกล่าวถึงน้ำเสียจากชุมชนและพื้นที่โดยรอบ รวมถึงปัญหาการระบายน้ำและประตูน้ำ

COMMUNITY VOICES:
"ต่างมาก... เปลี่ยนไปเยอะ"
(ระบุแหล่งที่มา: คำบอกเล่าของผู้สูงอายุในชุมชน ไม่ใช่ข้อความจากผลการตรวจวัด)`,
    photoTip: 'วางภาพสภาพคลองปัจจุบันจากเอกสารภาคสนามคู่กับ Pull Quote ขนาดใหญ่',
  },
  {
    page: 'PAGE 04 · WATER QUALITY',
    enTitle: 'UNDERSTANDING WATER QUALITY',
    thContent: `คุณภาพน้ำและปัจจัยการเปลี่ยนแปลง (UNDERSTANDING WATER QUALITY)

1. WATER DISCHARGE — การระบายน้ำจากชุมชนและพื้นที่โดยรอบ
คำบอกเล่าจากบทสัมภาษณ์กล่าวถึงการระบายน้ำจากหมู่บ้านจัดสรร บ้านเช่า และโรงงานในละแวกใกล้เคียงที่อาจส่งผลต่อคุณภาพน้ำคลอง (หมายเหตุ: เป็นข้อมูลจากคำบอกเล่า ไม่ใช่การระบุผู้ก่อมลพิษโดยไม่มีหลักฐาน)

2. WATER CIRCULATION — ระบบการไหลเวียนของน้ำ
ข้อมูลเกี่ยวกับน้ำขึ้นน้ำลง การเปิดและปิดประตูน้ำ บทบาทของชุมชนในการดูแลระบบน้ำในอดีต และสภาพประตูน้ำบางแห่งที่ชำรุดในปัจจุบัน

3. ENVIRONMENTAL PRESSURES — ปัจจัยที่ส่งผลต่อแหล่งน้ำ
- น้ำเสียจากกิจกรรมของมนุษย์
- การขยายตัวของหมู่บ้านจัดสรรและสิ่งปลูกสร้าง
- ขยะและสิ่งปฏิกูล
- ปัญหาน้ำเค็ม
- ปัญหาน้ำท่วมและการระบายน้ำ
(หมายเหตุ: แยกคำบอกเล่าจากข้อสังเกตนักศึกษาอย่างชัดเจน และไม่มีการสร้างค่า pH, DO, BOD ที่ไม่มีในเอกสาร)`,
    photoTip: 'แนบภาพถ่ายจุดน้ำขุ่น/ขยะสะสม และภาพประตูน้ำจริงจากเอกสาร PDF พร้อมระบุแหล่งที่มา',
  },
  {
    page: 'PAGE 05 · ECOSYSTEM',
    enTitle: 'LIFE WITHIN THE WATER',
    thContent: `ระบบนิเวศและสิ่งมีชีวิตในคลอง (LIFE WITHIN THE WATER)

AQUATIC ANIMALS: กุ้งแม่น้ำ, กุ้ง, หอย, ปู, ปลาสวาย, ปลาหมอคางดำ
AQUATIC PLANTS: ผักบุ้ง, จอกแหน, ดอกบัว, พืชน้ำชนิดต่าง ๆ ที่พบในพื้นที่สวน

BLACKCHIN TILAPIA (ปลาหมอคางดำ):
จากคำบอกเล่าของผู้จำหน่ายปลาและอาหารปลา มีการกล่าวถึงการพบปลาหมอคางดำในคลองและการลดลงของปลาสวาย ทั้งนี้ รายงานฉบับนี้ไม่สรุปว่าปลาหมอคางดำเป็นสาเหตุโดยตรงของการลดลงของปลาสวาย เพราะเอกสารไม่ได้ยืนยันความสัมพันธ์เชิงสาเหตุทางวิทยาศาสตร์`,
    photoTip: 'ใช้ภาพถ่ายสัตว์น้ำ/พืชน้ำจริงจากภาคสนาม หรือภาพประกอบสารคดีธรรมชาติพร้อมระบุคำอธิบายชัดเจน',
  },
  {
    page: 'PAGE 06 · ORANGE GROVE & COMMUNITY LIFE',
    enTitle: 'THE LEGACY OF BANG MOT ORANGE',
    thContent: `สวนส้มบางมดและวิถีชีวิตชุมชน (THE LEGACY OF BANG MOT ORANGE)

ภูมิปัญญาสวนส้มของลุงสมจิตร:
- ผู้ให้สัมภาษณ์อายุ 78 ปี เริ่มทำสวนส้มตั้งแต่อายุประมาณ 15–16 ปี
- เรียนรู้ภูมิปัญญาการทำสวนจากครอบครัว
- ใช้เทคนิคการยกร่องสวนและขุดท้องร่องเพื่อจัดการน้ำ
- ปลูกพืชหลากหลายชนิด เช่น ส้มโอ มะกรูด มะนาว มะรุม และผักสวนครัว
- ใช้วิธีขยายพันธุ์พืช เช่น การเสียบยอด การทาบกิ่ง และการติดตา

WATER MANAGEMENT (การจัดการประตูน้ำในอดีต):
- เมื่อน้ำทะเลขึ้น ชาวสวนจะปิดประตูน้ำ
- เมื่อน้ำทะเลลดลง จะเปิดประตูน้ำเพื่อระบายน้ำ

ผลกระทบต่อสวนส้ม: น้ำเสีย น้ำเค็ม น้ำท่วม และการเปลี่ยนแปลงของพื้นที่
COMMUNITY LIFE: การใช้เรือสัญจร วิถีชีวิตริมคลอง และความสัมพันธ์ระหว่างคนกับธรรมชาติ`,
    photoTip: 'ภาพถ่ายสวนส้มลุงสมจิตร ท้องร่องน้ำ และบ้านเรือนริมคลองจากเอกสารภาคสนาม',
  },
  {
    page: 'PAGE 07 · KEY FINDINGS & DETECTIVE QUIZ',
    enTitle: 'KEY FINDINGS & DETECTIVE QUIZ',
    thContent: `ข้อค้นพบสำคัญ (KEY FINDINGS):
1. คุณภาพน้ำคลองเปลี่ยนแปลงไปจากอดีตตามคำบอกเล่าของคนในชุมชน
2. ปัจจัยจากการใช้ประโยชน์พื้นที่และการระบายน้ำถูกกล่าวถึงว่าเกี่ยวข้องกับคุณภาพน้ำ
3. สัตว์น้ำพื้นถิ่นและพืชน้ำบางชนิดลดจำนวนลงตามคำบอกเล่า
4. วิถีเกษตรกรรมสวนส้มและการเลี้ยงสัตว์น้ำได้รับผลกระทบจากการเปลี่ยนแปลง
5. คลองยังคงมีความสำคัญต่อความทรงจำและความผูกพันของคนในชุมชน

บทสรุป:
การเปลี่ยนแปลงของคลองบางมดไม่ได้เป็นเพียงการเปลี่ยนแปลงของสภาพน้ำ แต่ยังสะท้อนถึงความสัมพันธ์ระหว่างธรรมชาติ ระบบนิเวศ การเกษตร และวิถีชีวิตของผู้คนในชุมชน`,
    photoTip: 'ฝัง Google Forms แบบ 10 ข้อปรนัยใต้ส่วนข้อค้นพบ (Insert → Forms)',
  },
];

export function GoogleSitesGuideModal({ isOpen, onClose }: GoogleSitesGuideModalProps) {
  const [activeTab, setActiveTab] = useState<GuideTab>('architecture');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const colorPalette = [
    { name: 'Forest Green', hex: '#173F35', role: 'Primary Text & Deep Footer / Hero Dark Surface' },
    { name: 'Sage Green', hex: '#527A64', role: 'Secondary Accents, Subheadings & Hairline Labels' },
    { name: 'Soft Mint', hex: '#B8C9B4', role: 'Muted Light Text on Dark Forest Surfaces' },
    { name: 'Champagne Gold', hex: '#C9B68C', role: 'Editorial Highlights, Dividers & Luxury Accents' },
    { name: 'Warm Ivory', hex: '#F5F1E7', role: 'Primary Archival Paper Canvas Background' },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Google Sites & Forms Implementation Guide"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#173F35]/75 p-4 backdrop-blur-xs"
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col border border-[#C9B68C]/50 bg-[#F5F1E7] text-[#173F35] shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#173F35]/15 bg-[#173F35] px-6 py-5 text-[#F5F1E7]">
          <div>
            <p className="font-serif text-xs tracking-[0.2em] text-[#C9B68C] uppercase">
              Group A3-03 Implementation Blueprint
            </p>
            <h2 className="mt-1 font-serif text-xl font-medium sm:text-2xl">
              Google Sites, Google Forms & Content Export Guide
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close guide"
            className="flex h-10 w-10 items-center justify-center border border-[#F5F1E7]/25 text-[#F5F1E7] transition-colors hover:bg-[#F5F1E7]/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-[#173F35]/15 bg-[#EFE9DC] px-6">
          {[
            { id: 'architecture', label: '1. ผังเว็บ & ชุดสี' },
            { id: 'copy-content', label: '2. คัดลอกเนื้อหา 7 หน้า' },
            { id: 'quiz-key', label: '3. เฉลย Quiz 10 ข้อ' },
            { id: 'steps-checklist', label: '4. ขั้นตอนสร้าง & Checklist' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as GuideTab)}
              className={`whitespace-nowrap border-b-2 px-4 py-3 text-xs font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'border-[#173F35] text-[#173F35]'
                  : 'border-transparent text-[#173F35]/60 hover:text-[#173F35]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {activeTab === 'architecture' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg font-medium text-[#173F35]">
                  ผังเว็บไซต์ทั้ง 7 หน้า + แกลเลอรีหลักฐาน
                </h3>
                <div className="mt-4 divide-y divide-[#173F35]/15 border border-[#173F35]/15">
                  {PAGES.map((p) => (
                    <div
                      key={p.id}
                      className="grid gap-2 px-4 py-3 text-sm sm:grid-cols-12 sm:items-center"
                    >
                      <span className="tabular-nums font-serif text-xs text-[#527A64] sm:col-span-2">
                        PAGE {p.chapter}
                      </span>
                      <span className="font-semibold text-[#173F35] sm:col-span-5">
                        {p.thTitle}
                      </span>
                      <span className="font-serif text-xs text-[#527A64] sm:col-span-5">
                        {p.enTitle}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-[#173F35]">
                  รูปแบบสี (Color Palette) และตัวอักษร (Typography)
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {colorPalette.map((c) => (
                    <div
                      key={c.hex}
                      className="flex items-center gap-4 border border-[#173F35]/15 bg-[#EFE9DC]/40 p-3"
                    >
                      <span
                        className="h-10 w-10 shrink-0 border border-[#173F35]/20"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-[#173F35]">
                          {c.name} ({c.hex})
                        </p>
                        <p className="text-[11px] text-[#527A64]">{c.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 border border-[#173F35]/15 bg-[#F5F1E7] p-4 text-xs leading-relaxed text-[#173F35]/85">
                  <strong>Typography:</strong> หัวข้อภาษาอังกฤษใช้{' '}
                  <span className="font-serif font-semibold">Playfair Display</span> ·
                  เนื้อหาภาษาไทยใช้ <span className="font-semibold">Sarabun</span> หรือ Prompt
                  (รองรับใน Google Sites โดยตรง)
                </div>
              </div>
            </div>
          )}

          {activeTab === 'copy-content' && (
            <div className="space-y-6">
              <p className="text-sm text-[#173F35]/80">
                กดปุ่ม “คัดลอกข้อความ” เพื่อนำไปวางในกล่องข้อความของ Google Sites ได้ทันทีในแต่ละหน้า
              </p>
              {PAGE_COPY_BLOCKS.map((block) => (
                <div
                  key={block.page}
                  className="border border-[#173F35]/15 bg-[#EFE9DC]/40 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#173F35]/10 pb-3">
                    <div>
                      <p className="font-serif text-xs tracking-wider text-[#527A64]">
                        {block.page}
                      </p>
                      <h4 className="font-serif text-base font-medium text-[#173F35]">
                        {block.enTitle}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(block.page, block.thContent)}
                      className="inline-flex items-center gap-1.5 border border-[#173F35] bg-[#F5F1E7] px-3 py-1.5 text-xs font-medium text-[#173F35] hover:bg-[#173F35] hover:text-[#F5F1E7]"
                    >
                      {copiedId === block.page ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>คัดลอกแล้ว</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>คัดลอกข้อความ</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="mt-3 whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#173F35]/85">
                    {block.thContent}
                  </pre>
                  <p className="mt-3 border-t border-[#173F35]/10 pt-2 text-[11px] text-[#527A64]">
                    คำแนะนำตำแหน่งภาพ: {block.photoTip}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'quiz-key' && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[#173F35]/85">
                  คำถามปรนัย 4 ตัวเลือก จำนวน 10 ข้อ (ข้อละ 1 คะแนน = 10 คะแนน) สำหรับสร้างใน Google Forms
                </p>
                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      'all-quiz',
                      DETECTIVE_QUIZ.map(
                        (q) =>
                          `${q.id}. ${q.question}\n${q.options
                            .map((o, i) => `  ${['ก.', 'ข.', 'ค.', 'ง.'][i]} ${o}`)
                            .join('\n')}\nเฉลย: ${['ก.', 'ข.', 'ค.', 'ง.'][q.correctIndex]} ${
                            q.options[q.correctIndex]
                          }\nคำอธิบาย: ${q.explanation}\n`
                      ).join('\n')
                    )
                  }
                  className="inline-flex items-center gap-1.5 bg-[#173F35] px-4 py-2 text-xs font-medium text-[#F5F1E7]"
                >
                  {copiedId === 'all-quiz' ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>คัดลอก Quiz ทั้งชุดแล้ว</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>คัดลอก Quiz ทั้ง 10 ข้อ + เฉลย</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-4">
                {DETECTIVE_QUIZ.map((q) => (
                  <div
                    key={q.id}
                    className="border border-[#173F35]/15 bg-[#EFE9DC]/40 p-4 text-xs leading-relaxed"
                  >
                    <p className="font-semibold text-[#173F35]">
                      {q.id}. {q.question}
                    </p>
                    <ul className="mt-2 space-y-1 text-[#173F35]/80">
                      {q.options.map((opt, idx) => (
                        <li
                          key={idx}
                          className={
                            idx === q.correctIndex ? 'font-semibold text-[#173F35]' : ''
                          }
                        >
                          {['ก.', 'ข.', 'ค.', 'ง.'][idx]} {opt}{' '}
                          {idx === q.correctIndex ? '(เฉลย)' : ''}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 border-t border-[#173F35]/10 pt-2 text-[#527A64]">
                      คำอธิบาย: {q.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'steps-checklist' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg font-medium text-[#173F35]">
                  ขั้นตอนสร้าง Google Drive, Google Forms และ Google Sites ทีละขั้นตอน
                </h3>
                <div className="mt-4 space-y-4">
                  {GOOGLE_SITES_STEPS.map((phase) => (
                    <div
                      key={phase.phase}
                      className="border border-[#173F35]/15 bg-[#EFE9DC]/40 p-5"
                    >
                      <p className="font-serif text-xs tracking-wider text-[#527A64] uppercase">
                        {phase.phase}
                      </p>
                      <h4 className="mt-1 text-base font-semibold text-[#173F35]">
                        {phase.title}
                      </h4>
                      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-xs leading-relaxed text-[#173F35]/85 sm:text-sm">
                        {phase.steps.map((s, idx) => (
                          <li key={idx}>{s}</li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-[#173F35]">
                  รายการตรวจสอบก่อนเผยแพร่ (Pre-Publish Checklist)
                </h3>
                <div className="mt-4 space-y-2 border border-[#173F35]/15 p-5">
                  {PRE_PUBLISH_CHECKLIST.map((item, idx) => {
                    const checked = !!checkedItems[idx];
                    return (
                      <label
                        key={idx}
                        className="flex cursor-pointer items-start gap-3 py-1.5 text-xs leading-relaxed text-[#173F35]/90 sm:text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleCheck(idx)}
                          className="mt-1 h-4 w-4 accent-[#173F35]"
                        />
                        <span className={checked ? 'line-through opacity-60' : ''}>{item}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
