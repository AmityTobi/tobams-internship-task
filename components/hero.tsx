import Image from "next/image";
import heroImg from "@/public/images/heroImg.png";
import heroImgMobile from "@/public/images/heroImgMobile.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[393px] md:h-[511px] overflow-hidden flex items-center justify-center font-['Nunito_Sans']">
      <Image
        src={heroImgMobile}
        alt="Lady staring at a screen"
        fill
        priority
        quality={100}
        className="object-cover object-center -z-30 block md:hidden"
      />

      <Image
        src={heroImg}
        alt="Lady staring at a screen"
        fill
        priority
        quality={100}
        className="object-cover object-center -z-30 hidden md:block"
      />

      <div className="absolute inset-0 -z-20 bg-black/70" />

      <div className="max-w-[1440px] w-full h-full mx-auto px-6 md:px-16 py-8 md:py-[112px] flex flex-col items-center justify-center text-center text-white relative z-10">
        <div className="bg-[#2D2A2C]/70 backdrop-blur-md px-6 py-1.5 rounded-full text-sm leading-relaxed font-semibold tracking-wider uppercase mb-3 md:mb-5 border border-white/10 text-white">
          WHAT WE DO
        </div>

        <h1 className="w-[327px] md:w-auto h-auto text-[24px] md:text-[56px] font-bold leading-[130%] tracking-tight text-center text-white mb-3 md:mb-4">
          Training and Development
        </h1>

        <p className="w-[327px] md:w-[1077px] h-auto text-[14px] md:text-[18px] font-semibold leading-[150%] text-center text-gray-200 mb-6 md:mb-8">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <button
          type="button"
          className="bg-[#571244] hover:bg-[#450e36] text-white text-base font-semibold px-6 py-2.5 leading-relaxed rounded-md transition-all shadow-md"
        >
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
