export default function TrainingConsultant() {
  const features = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="w-full bg-[#571244]/10 py-12 md:py-16 font-['Nunito_Sans']">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[64px]">
        {/* Header Block */}
        <div className="mb-6 text-left">
          <h2 className="text-[24px] md:text-[36px] leading-[130%] font-bold text-[#571244] font-['Nunito'] mb-2">
            Training The Consultant
          </h2>
          <p className="text-[16px] md:text-[18px] leading-[150%] font-semibold text-[#571244] mb-3">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-[14px] md:text-[16px] text-[#151515] font-normal leading-[150%] max-w-[1312px] h-auto text-left">
            With the help of our Business Analysis Training Consultants program,
            take a revolutionary step toward becoming a distinguished certified
            trainer. Learn from <br className="hidden md:inline" />
            professionals in the field, immerse yourself in a thorough
            curriculum, and hone your training methods through interactive
            workshops. Participating in our program
            <br className="hidden md:inline" /> will enable you to gain
            expertise in Business Analysis while also developing the abilities
            to mentor and encourage others in their career advancement.
          </p>
        </div>

        {/* Dark Purple Container Grid (2x2 Layout) */}
        <div className="w-full rounded-2xl bg-[#571244] text-white p-6 md:p-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[32px]">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start text-left gap-1.5"
              >
                <h3 className="text-[16px] md:text-[18px] leading-[150%] font-bold text-white font-['Nunito']">
                  {item.title}
                </h3>
                <p className="text-[14px] md:text-[18px] text-[#FFFFFF] text-left font-normal leading-[150%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-left">
          <button
            type="button"
            className="bg-[#571244] hover:bg-[#3A0C2E] text-white font-semibold text-sm md:text-[16px] px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-all shadow-md"
          >
            Learn More{" "}
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.536 23.6319C11.3154 23.4027 11.1949 23.0953 11.2009 22.7773C11.2069 22.4593 11.3389 22.1566 11.568 21.9359L17.8688 15.9999L11.568 10.0639C11.449 9.95602 11.3529 9.82534 11.2854 9.67962C11.2179 9.53391 11.1803 9.37613 11.1749 9.21562C11.1695 9.05511 11.1963 8.89515 11.2538 8.74521C11.3114 8.59527 11.3984 8.45841 11.5098 8.34273C11.6212 8.22705 11.7547 8.1349 11.9024 8.07175C12.05 8.00861 12.2088 7.97574 12.3694 7.97511C12.53 7.97447 12.6891 8.00608 12.8373 8.06806C12.9854 8.13003 13.1197 8.22112 13.232 8.33591L20.432 15.1359C20.5481 15.2479 20.6405 15.3821 20.7036 15.5305C20.7667 15.679 20.7992 15.8386 20.7992 15.9999C20.7992 16.1612 20.7667 16.3209 20.7036 16.4693C20.6405 16.6178 20.5481 16.752 20.432 16.8639L13.232 23.6639C13.0028 23.8844 12.6954 24.0049 12.3773 23.9989C12.0593 23.9929 11.7567 23.8609 11.536 23.6319Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
