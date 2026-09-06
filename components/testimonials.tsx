export default function Testimonials() {
  const testimonials = [
    {
      name: "Aisha Yusuf",
      role: "Founder, CraftHub NG",
      avatar:
        "https://ccraftbd.com/wp-content/uploads/2026/02/client-img-6.png",
      text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    },
    {
      name: "John Davies",
      role: "Marketing Manager, E-Commerce Emporium",
      avatar:
        "https://cdn.prod.website-files.com/64e476e038312428b75c1c7e/64ef1609356d155116f18419_man.webp",
      text: "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    },
    {
      name: "Chinonso Nwankwo",
      role: "HR Director, FutureTech Solutions",
      avatar: "https://nobleamaipa.com/wp-content/uploads/Frame-142-3.png",
      text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 font-['Nunito_Sans']">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[64px]">
        <h2 className="text-[20px] md:text-[40px] font-bold text-[#151515] font-['Nunito'] leading-[130%]  text-center mb-12">
          Testimonials
        </h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx > 0 ? "hidden md:flex" : "flex"
              } border-l-2 border-[#EF4353] rounded-2xl p-6 flex-col justify-between text-left bg-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[14px] md:text-[16px] md:italic font-semibold leading-[150%] text-[#151515]">
                      {item.name}
                    </h3>
                    <p className="text-[12px]  md:text-[14px] text-[#696969] font-normal leading-[150%]">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-[14px]  md:text-[18px] text-[#151515] font-normal leading-[150%]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end gap-3">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="28"
              rx="4"
              fill="#F04354"
              fill-opacity="0.1"
            />
            <path
              d="M12.6327 13.9999L18.4077 19.7749L16.758 21.4257L9.33337 13.9999L16.758 6.5752L18.4077 8.22486L12.6327 13.9999Z"
              fill="#EF4353"
            />
          </svg>

          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="28"
              height="28"
              rx="4"
              transform="matrix(-1 0 0 1 28 0)"
              fill="#F04354"
              fill-opacity="0.1"
            />
            <path
              d="M15.3673 13.9999L9.59229 19.7749L11.242 21.4257L18.6666 13.9999L11.242 6.5752L9.59229 8.22486L15.3673 13.9999Z"
              fill="#EF4353"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
