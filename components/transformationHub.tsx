import Image from "next/image";
import hubImg from "@/public/images/hubImg.png";

const DarkLightningIcon = () => (
  <svg
    width="14"
    height="18"
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M7.87301 0.761963V6.98419H13.2063L6.09523 16.762V10.5397H0.761902L7.87301 0.761963Z"
      fill="#FFFFFF"
      stroke="#480F39"
      strokeWidth="1.52381"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TransformationHub() {
  const items = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-[64px] my-6">
      <div className="w-full rounded-2xl bg-[#EF4353]/20 text-[#151515] p-6 md:p-12 flex flex-col font-['Nunito_Sans']">
        {/* Subtitle & Title */}
        <div className="mb-6 text-left">
          <p className="text-[14px] md:text-[20px] md:leading-[130%] font-['Nunito'] text-[#1671D9] font-semibold mb-1 md:italic">
            Learning With Our CEO:
          </p>
          <h2 className="text-[20px] md:text-[32px] font-semibold leading-tight font-['Nunito'] text-[#571244] italic">
            Transformation Hub With Jite Newton
          </h2>
        </div>

        <p className="text-[14px] md:text-[18px] text-[#151515] font-normal leading-relaxed mb-8 md:text-left">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>

        {/* Changed items-stretch to items-center to keep both columns vertically centered */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Image */}
          <div className="relative w-full md:w-1/2 h-[320px] md:h-[380px] rounded-xl overflow-hidden shrink-0">
            <Image
              src={hubImg}
              alt="AI image of lady"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Grid Pills & Button Container: Changed justify-between to justify-start/center */}
          <div className="flex flex-col justify-center w-full md:w-1/2 gap-4 bg-[#EF4353]/5 p-4 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white text-[#151515] shadow-sm"
                >
                  <DarkLightningIcon />
                  <span className="text-[14px] font-normal">{item}</span>
                </div>
              ))}
            </div>

            {/* Button sits right below the grid with controlled top spacing */}
            <div className="text-left mt-1">
              <button
                type="button"
                className="bg-[#571244] hover:bg-[#430e35] text-white font-semibold text-sm px-8 py-2.5 rounded-md inline-flex items-center gap-2 transition-all shadow-md"
              >
                Learn More{" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 7L7 17M17 16V7H8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
