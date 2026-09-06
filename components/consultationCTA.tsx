export default function ConsultationCTA() {
  return (
    <section className="flex flex-col items-center justify-center mx-auto mt-6 px-6 py-8 md:px-16 md:py-8 w-[323px] md:w-[1134px] h-auto md:min-h-[204px] bg-[#571244] rounded-lg text-white font-['Nunito_Sans']">
      {/* Mobile Heading */}
      <h2 className="md:hidden text-[16px] text-center font-semibold font-['Nunito'] tracking-[0.03em] leading-[150%] w-full max-w-[279px] min-h-[96px] mb-8">
        Don't just dream it—let's build it! Click now and start your project
        with Tobams Group. Your journey to digital excellence begins here.
      </h2>

      {/* Desktop Heading */}
      <h2 className="hidden md:block text-[20px] text-center font-semibold font-['Nunito'] tracking-[0.03em] leading-[150%] w-full max-w-[1006px] min-h-[60px] mb-8">
        Want to accelerate professional growth and development at your
        organisation?
        <br className="hidden md:inline" /> See how we can help.
      </h2>

      {/* CTA Button */}
      <button
        type="button"
        className="bg-white text-[#571244] hover:bg-gray-100 font-semibold text-[14px] md:text-[18px] font-['Nunito'] tracking-[0.03em] leading-[150%] md:leading-[120%] md:tracking-normal px-6 py-3 rounded gap-[10px] transition-all shadow-md"
      >
        Book a Consultation
      </button>
    </section>
  );
}
