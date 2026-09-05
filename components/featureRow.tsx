import Image, { StaticImageData } from "next/image";

export interface FeatureRowProps {
  title: string;
  description: string;
  items: string[];
  imageSrc: StaticImageData | string;
  imageAlt: string;
  reverse?: boolean;
}

const LightningIcon = () => (
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
      fill="#1D0617"
      stroke="#480F39"
      strokeWidth="1.52381"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FeatureRow({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto py-3 px-6 md:px-[64px] flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between gap-6 md:gap-[80px]`}
    >
      {/* Mobile-Only Left-Aligned Title */}
      <h2 className="block md:hidden w-full max-w-[327px] mx-auto text-[22px] sm:text-[26px] font-semibold text-[#151515] leading-tight text-left font-['Nunito']">
        {title}
      </h2>

      {/* Image Block */}
      <div className="relative w-[327px] h-[240px] md:w-1/2 md:h-[400px] rounded-2xl overflow-hidden shadow-sm shrink-0 mx-auto md:mx-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 327px, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* Content Block */}
      <div className="flex flex-col items-start justify-center w-full max-w-[327px] md:max-w-none md:w-1/2 text-left mx-auto md:mx-0 font-['Nunito_Sans']">
        {/* Desktop Title */}
        <h2 className="hidden md:block text-[36px] font-semibold text-[#151515] leading-tight mb-4 font-['Nunito']">
          {title}
        </h2>

        {/* Description Writeup */}
        <p className="w-full text-[14px] md:text-[18px] text-[#696969] font-normal leading-relaxed mb-6 ">
          {description}
        </p>

        {/* List Items */}
        <div className="flex flex-col gap-1.5 w-full md:ml-[30px]">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <LightningIcon />
              <span className="text-[14px] md:text-[16px] text-[#696969] font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
