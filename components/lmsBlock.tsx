import Image from "next/image";
import lmsImg from "@/public/images/lms.png";

export default function LMSBlock() {
  const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
  ];

  return (
    <main className="w-full bg-white my-[40px]">
      <section className="w-full max-w-[1440px] mx-auto min-h-[1113px] md:min-h-[664px] bg-[#571244]/10 pt-6 px-6 pb-6 md:px-[64px] md:py-[48px] flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-[80px] font-['Nunito_Sans'] border-none md:border-1 md:border-solid md:border-black">
        {/* Mobile Title */}
        <h2 className="block md:hidden w-full text-[20px] sm:text-[24px] font-semibold text-[#571244] leading-tight text-center whitespace-nowrap font-['Nunito']">
          Learning Management System
        </h2>

        {/* Circle Image Wrapper */}
        <div className="relative w-[327px] h-[327px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden shrink-0 shadow-md mx-auto md:mx-0">
          <Image
            src={lmsImg}
            alt="A man and a woman in corporate attire"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </div>

        {/* Text Content Block */}
        <div className="flex flex-col items-center md:items-start justify-center text-left w-full max-w-[327px] md:max-w-none mx-auto md:mx-0">
          {/* Desktop Title */}
          <h2 className="hidden md:block text-[36px] font-semibold text-[#571244] leading-relaxed mb-4 font-['Nunito']">
            Learning Management System
          </h2>

          {/* Inner Faint Background Box (Centered 327px container on mobile, left-aligned content & button) */}
          <div className="bg-[#571244]/10 p-4 rounded-md w-full max-w-[327px] md:max-w-none mx-auto md:mx-0 mb-0 md:mb-2 flex flex-col items-start text-left">
            <p className="w-full md:max-w-[627px] text-[14px] md:text-lg font-normal leading-relaxed mb-6 text-[#151515]">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey. From
              technical courses covering the latest programming languages and
              development frameworks to soft skills training in leadership,
              effective communication and project management, TG Academy offers
              a wide range of courses to cater to diverse learning needs. With
              accessible and interactive learning materials, individuals can
              enhance their skills and stay ahead in today's competitive tech
              landscape.
            </p>

            <p className="w-full text-[14px] md:text-[18px] font-bold text-[#571244] mb-3">
              Some of our courses include:
            </p>

            {/* Course Bullet List */}
            <div className="w-full md:w-[627.12px] md:min-h-[60px] flex flex-col md:flex-row md:flex-wrap items-start content-start gap-[12px] p-0 my-3">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-[14px] md:text-[16px] text-[#151515] font-normal leading-relaxed"
                >
                  <span className="text-[14px] text-[#151515]">●</span>
                  <span>{course}</span>
                </div>
              ))}
            </div>

            {/* Button inside faint background on Mobile (Left-aligned) */}
            <div className="block md:hidden pt-2 w-full text-left">
              <button
                type="button"
                className="bg-[#571244] hover:bg-[#430e35] text-white font-semibold text-sm px-6 py-3 rounded-md flex items-center gap-2 transition-all shadow-md"
              >
                Learn More <span className="text-lg">↗</span>
              </button>
            </div>
          </div>

          {/* Button outside faint background on Desktop */}
          <button
            type="button"
            className="hidden md:flex bg-[#571244] hover:bg-[#430e35] text-white font-semibold text-lg px-6 py-3 rounded-md items-center gap-2 transition-all shadow-md mt-4"
          >
            Learn More <span className="text-lg">↗</span>
          </button>
        </div>
      </section>
    </main>
  );
}
