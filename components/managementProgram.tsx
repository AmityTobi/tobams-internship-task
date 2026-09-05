import Image from "next/image";
import mgmtImg from "@/public/images/management-program.png";
import mgmtImgMobile from "@/public/images/managementProgMobile.png";

const WhiteLightningIcon = () => (
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
      stroke="#FFFFFF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ManagementProgram() {
  const items = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="w-full bg-[#571244]/10 py-10 my-6">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[64px]">
        {/* Inner Card Block */}
        <div className="w-full rounded-2xl bg-[#2C0922] text-white p-6 md:p-12 flex flex-col font-['Nunito_Sans']">
          {/* Mobile Title */}
          <h2 className="md:hidden text-[16px] font-medium leading-relaxed tracking-[0.03em] font-['Nunito'] mb-6 text-left text-[#FFFFFF]">
            Management Development Program
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 min-h-[280px] md:min-h-[440px] rounded-xl overflow-hidden shrink-0">
              <Image
                src={mgmtImgMobile}
                alt="Group of people discussing"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center block md:hidden"
              />
              <Image
                src={mgmtImg}
                alt="Group of people discussing"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center hidden md:block"
              />
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-start items-start w-full md:w-1/2 text-left">
              {/* Width constrained to 500px to match Figma paragraph line breaks & right space */}
              <div className="w-full max-w-full md:max-w-[500px]">
                {/* Desktop Title */}
                <h2 className="hidden md:block text-[28px] lg:text-[32px] font-semibold leading-tight font-['Nunito'] mb-5 text-left">
                  Management Development Program
                </h2>

                {/* Paragraph Copy */}
                <p className="text-[13px] lg:text-[15px] text-[#FFFFFF]/90 font-normal leading-[160%] mb-4 text-left">
                  Tobams Group offers a comprehensive Management Development
                  Program designed to equip corporate organisations with the
                  high-performing leaders they need to thrive.
                </p>

                <p className="text-[13px] lg:text-[15px] text-[#FFFFFF]/90 font-normal leading-[160%] mb-6 text-left">
                  Our program includes workshops, seminars, coaching sessions,
                  online courses, and experiential learning opportunities
                  designed to improve leadership, strategic thinking,
                  communication, and other essential managerial competencies for
                  corporate organisations.
                </p>

                {/* List Pills */}
                <div className="flex flex-col gap-3 w-full">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#8F6182]/80 text-white w-full"
                    >
                      <WhiteLightningIcon />
                      <span className="text-[13px] lg:text-[15px] font-medium leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
