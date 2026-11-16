import { useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { DETECTIVE_QUIZ, PageId } from '../data/canalData';

interface PageFindingsQuizProps {
  onNavigate: (page: PageId) => void;
  onOpenGuide: () => void;
}

export function PageFindingsQuiz({ onNavigate, onOpenGuide }: PageFindingsQuizProps) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [googleFormEmbedUrl, setGoogleFormEmbedUrl] = useState('');
  const [quizViewMode, setQuizViewMode] = useState<'interactive' | 'google-form'>('interactive');

  const keyFindings = [
    'คุณภาพน้ำคลองเปลี่ยนแปลงไปจากอดีตตามคำบอกเล่าของคนในชุมชน',
    'ปัจจัยจากการใช้ประโยชน์พื้นที่และการระบายน้ำถูกกล่าวถึงว่าเกี่ยวข้องกับคุณภาพน้ำ',
    'สัตว์น้ำพื้นถิ่นและพืชน้ำบางชนิดลดจำนวนลงตามคำบอกเล่า',
    'วิถีเกษตรกรรมสวนส้มและการเลี้ยงสัตว์น้ำได้รับผลกระทบจากการเปลี่ยนแปลง',
    'คลองยังคงมีความสำคัญต่อความทรงจำและความผูกพันของคนในชุมชน',
  ];

  const answeredCount = Object.keys(answers).length;
  const score = DETECTIVE_QUIZ.reduce((total, q) => {
    return total + (answers[q.id] === q.correctIndex ? 1 : 0);
  }, 0);

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    const quizEl = document.getElementById('quiz-result-banner');
    if (quizEl) {
      quizEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const navigateTo = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-14 lg:px-8 lg:py-20">
      {/* Page Header */}
      <header className="border-b border-[#173F35]/15 pb-10">
        <p className="font-serif text-xs tracking-[0.22em] text-[#527A64] uppercase">
          Chapter 07 · ข้อค้นพบสำคัญและแบบทดสอบนักสืบ
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#173F35] sm:text-5xl">
          KEY FINDINGS & DETECTIVE QUIZ
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-[1.85] text-[#173F35]/85 sm:text-lg">
          สรุปข้อค้นพบจากการสำรวจคลองหลังวัดพุทธบูชาโดยกลุ่ม A3-03
          พร้อมแบบทดสอบนักสืบคลองบางมด 10 ข้อเพื่อทบทวนความรู้จากข้อมูลภาคสนาม
        </p>
      </header>

      {/* PART 1: KEY FINDINGS */}
      <section className="border-b border-[#173F35]/15 py-14">
        <div className="mb-8">
          <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
            Part I · Synthesis
          </p>
          <h2 className="mt-2 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
            KEY FINDINGS · ข้อค้นพบสำคัญจากการลงพื้นที่
          </h2>
        </div>

        <ol className="divide-y divide-[#173F35]/15 border-y border-[#173F35]/15">
          {keyFindings.map((finding, idx) => (
            <li key={finding} className="grid gap-3 py-5 sm:grid-cols-12 sm:items-baseline">
              <span className="tabular-nums font-serif text-xl font-medium text-[#527A64] sm:col-span-2">
                0{idx + 1}
              </span>
              <p className="text-base leading-relaxed text-[#173F35] sm:col-span-10 sm:text-lg">
                {finding}
              </p>
            </li>
          ))}
        </ol>

        {/* Conclusion Statement */}
        <div className="mt-10 border border-[#173F35]/20 bg-[#173F35] p-8 text-[#F5F1E7] sm:p-10">
          <p className="font-serif text-xs tracking-[0.2em] text-[#C9B68C] uppercase">
            Conclusion · บทสรุป
          </p>
          <p className="mt-3 font-serif text-xl leading-relaxed text-[#F5F1E7] sm:text-2xl">
            “การเปลี่ยนแปลงของคลองบางมดไม่ได้เป็นเพียงการเปลี่ยนแปลงของสภาพน้ำ
            แต่ยังสะท้อนถึงความสัมพันธ์ระหว่างธรรมชาติ ระบบนิเวศ การเกษตร และวิถีชีวิตของผู้คนในชุมชน”
          </p>
        </div>
      </section>

      {/* PART 2: DETECTIVE QUIZ */}
      <section className="py-14">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-serif text-xs tracking-[0.2em] text-[#527A64] uppercase">
              Part II · Interactive Assessment
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[#173F35] sm:text-3xl">
              DETECTIVE QUIZ · แบบทดสอบนักสืบคลองบางมด
            </h2>
            <p className="mt-2 text-sm text-[#173F35]/80">
              ปรนัย 4 ตัวเลือก · 10 ข้อ · ข้อละ 1 คะแนน (คะแนนเต็ม 10 คะแนน) · แสดงคะแนน เฉลย และคำอธิบายหลังส่งคำตอบ
            </p>
          </div>

          <div
            role="group"
            aria-label="Quiz view mode"
            className="flex shrink-0 items-center gap-1 border border-[#173F35]/20 bg-[#EFE9DC] p-1"
          >
            <button
              type="button"
              onClick={() => setQuizViewMode('interactive')}
              className={`whitespace-nowrap px-3.5 py-2 text-xs font-medium transition-colors ${
                quizViewMode === 'interactive'
                  ? 'bg-[#173F35] text-[#F5F1E7]'
                  : 'text-[#173F35]/75 hover:text-[#173F35]'
              }`}
            >
              ทำแบบทดสอบบนเว็บ
            </button>
            <button
              type="button"
              onClick={() => setQuizViewMode('google-form')}
              className={`whitespace-nowrap px-3.5 py-2 text-xs font-medium transition-colors ${
                quizViewMode === 'google-form'
                  ? 'bg-[#173F35] text-[#F5F1E7]'
                  : 'text-[#173F35]/75 hover:text-[#173F35]'
              }`}
            >
              Google Forms Embed
            </button>
          </div>
        </div>

        {quizViewMode === 'google-form' ? (
          <div className="border border-[#173F35]/15 bg-[#EFE9DC]/50 p-6 sm:p-8">
            <h3 className="font-serif text-xl font-medium text-[#173F35]">
              พื้นที่ฝัง Google Forms Quiz สำหรับ Google Sites
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#173F35]/80">
              เมื่อกลุ่ม A3-03 สร้างแบบทดสอบใน Google Forms ตามคู่มือเรียบร้อยแล้ว
              สามารถนำลิงก์ Embed (`https://docs.google.com/forms/.../viewform?embedded=true`)
              มาทดสอบแสดงผลที่นี่ หรือฝังโดยตรงผ่านเมนู Insert → Forms ใน Google Sites
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="url"
                value={googleFormEmbedUrl}
                onChange={(e) => setGoogleFormEmbedUrl(e.target.value)}
                placeholder="วางลิงก์ Google Forms Embed URL ที่นี่ (เช่น https://docs.google.com/forms/...)"
                className="min-h-[44px] flex-1 border border-[#173F35]/25 bg-[#F5F1E7] px-4 py-2 text-sm text-[#173F35] placeholder:text-[#173F35]/40"
              />
              <button
                type="button"
                onClick={onOpenGuide}
                className="min-h-[44px] shrink-0 border border-[#173F35] px-5 py-2 text-xs font-medium tracking-wider text-[#173F35] uppercase hover:bg-[#173F35] hover:text-[#F5F1E7]"
              >
                ดูวิธีสร้าง Google Forms
              </button>
            </div>

            {googleFormEmbedUrl.startsWith('https://docs.google.com/forms/') ? (
              <div className="mt-6 border border-[#173F35]/20 bg-white">
                <iframe
                  src={googleFormEmbedUrl}
                  title="CANAL DETECTIVE Google Forms Quiz"
                  className="h-[680px] w-full"
                />
              </div>
            ) : (
              <div className="mt-6 border border-dashed border-[#173F35]/30 bg-[#F5F1E7] p-8 text-center">
                <p className="text-sm text-[#173F35]/75">
                  ยังไม่ได้วางลิงก์ Google Forms — คุณสามารถสลับไปใช้{' '}
                  <button
                    type="button"
                    onClick={() => setQuizViewMode('interactive')}
                    className="font-semibold text-[#173F35] underline underline-offset-4"
                  >
                    ทำแบบทดสอบบนเว็บ
                  </button>{' '}
                  เพื่อทดลองตอบคำถามทั้ง 10 ข้อพร้อมตรวจเฉลยทันที
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            {/* Score Summary Banner after Submit */}
            {submitted && (
              <div
                id="quiz-result-banner"
                className="mb-8 flex flex-col justify-between gap-6 border border-[#173F35] bg-[#173F35] p-8 text-[#F5F1E7] sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-serif text-xs tracking-[0.2em] text-[#C9B68C] uppercase">
                    Assessment Complete · ผลการทำแบบทดสอบ
                  </p>
                  <p className="mt-2 font-serif text-3xl font-medium sm:text-4xl">
                    คะแนนของคุณ:{' '}
                    <span className="tabular-nums text-[#C9B68C]">{score} / 10</span> คะแนน
                  </p>
                  <p className="mt-2 text-sm text-[#B8C9B4]">
                    {score >= 8
                      ? 'ยอดเยี่ยม! คุณมีความเข้าใจอย่างลึกซึ้งต่อข้อมูลภาคสนามของคลองบางมด'
                      : score >= 5
                      ? 'ดีมาก! สามารถเลื่อนอ่านเฉลยและคำอธิบายด้านล่างเพื่อทบทวนรายละเอียดเพิ่มเติม'
                      : 'ลองทบทวนเนื้อหาจากบทความทั้ง 6 บทและเฉลยด้านล่าง แล้วทดลองทำแบบทดสอบอีกครั้ง'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetQuiz}
                  className="inline-flex min-h-[44px] shrink-0 items-center gap-2 border border-[#C9B68C] px-5 py-2.5 text-xs font-medium tracking-wider text-[#F5F1E7] uppercase transition-colors hover:bg-[#C9B68C] hover:text-[#173F35]"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>ทำแบบทดสอบใหม่</span>
                </button>
              </div>
            )}

            {/* 10 Questions */}
            <div className="space-y-6">
              {DETECTIVE_QUIZ.map((q) => {
                const userAnswer = answers[q.id];
                const isCorrect = userAnswer === q.correctIndex;

                return (
                  <article
                    key={q.id}
                    className="border border-[#173F35]/15 bg-[#F5F1E7] p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#173F35]/10 pb-3">
                      <span className="tabular-nums font-serif text-xs tracking-widest text-[#527A64] uppercase">
                        Question {q.id < 10 ? `0${q.id}` : q.id} · 1 คะแนน
                      </span>
                      <span className="text-xs text-[#527A64]">{q.topic}</span>
                    </div>

                    <h3 className="mt-4 text-base font-semibold leading-relaxed text-[#173F35] sm:text-lg">
                      {q.id}. {q.question}
                    </h3>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswer === optIdx;
                        const isRightOption = q.correctIndex === optIdx;

                        let buttonStyle =
                          'border-[#173F35]/20 bg-[#F5F1E7] text-[#173F35] hover:border-[#173F35]';

                        if (!submitted && isSelected) {
                          buttonStyle = 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]';
                        } else if (submitted && isRightOption) {
                          buttonStyle = 'border-[#173F35] bg-[#173F35] text-[#F5F1E7]';
                        } else if (submitted && isSelected && !isRightOption) {
                          buttonStyle = 'border-[#9A3412] bg-[#9A3412]/10 text-[#9A3412]';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            disabled={submitted}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`flex min-h-[48px] items-start gap-3 border p-4 text-left text-sm leading-relaxed transition-colors ${buttonStyle}`}
                          >
                            <span className="tabular-nums shrink-0 font-serif text-xs opacity-75 mt-0.5">
                              {['ก.', 'ข.', 'ค.', 'ง.'][optIdx]}
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className="mt-5 border-t border-[#173F35]/15 bg-[#EFE9DC]/65 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="h-4 w-4 text-[#173F35]" />
                              <span className="text-[#173F35]">
                                คำตอบถูกต้อง (+1 คะแนน)
                              </span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 text-[#9A3412]" />
                              <span className="text-[#9A3412]">
                                ยังไม่ถูกต้อง — เฉลยที่ถูกต้องคือข้อ{' '}
                                {['ก', 'ข', 'ค', 'ง'][q.correctIndex]}
                              </span>
                            </>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-[#173F35]/85">
                          <strong className="font-semibold text-[#173F35]">คำอธิบาย: </strong>
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            {!submitted && (
              <div className="mt-8 flex flex-col items-start justify-between gap-4 border border-[#173F35]/15 bg-[#EFE9DC]/65 p-6 sm:flex-row sm:items-center">
                <p className="text-sm text-[#173F35]">
                  ตอบแล้ว{' '}
                  <strong className="tabular-nums font-serif text-base">
                    {answeredCount} / {DETECTIVE_QUIZ.length}
                  </strong>{' '}
                  ข้อ
                </p>
                <button
                  type="button"
                  onClick={handleSubmitQuiz}
                  className="min-h-[44px] bg-[#173F35] px-8 py-3 text-xs font-medium tracking-widest text-[#F5F1E7] uppercase transition-colors hover:bg-[#527A64]"
                >
                  ส่งคำตอบและตรวจคะแนน
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Footer Nav */}
      <div className="flex items-center justify-between border-t border-[#173F35]/15 pt-10">
        <button
          type="button"
          onClick={() => navigateTo('orchard')}
          className="text-sm font-medium text-[#527A64] hover:text-[#173F35]"
        >
          ← 06 · Orange Grove & Community
        </button>
        <button
          type="button"
          onClick={() => navigateTo('gallery')}
          className="text-sm font-medium text-[#173F35] underline underline-offset-4 hover:text-[#527A64]"
        >
          08 · Field Evidence & Photo Gallery →
        </button>
      </div>
    </div>
  );
}
