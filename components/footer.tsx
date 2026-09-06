import Image from "next/image";
import footerLogo from "../public/images/tobams-logo.png";
import Link from "next/link";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutions = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

function LinkedinIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="white" />
      <path
        d="M14.47 13.0005C14.4697 13.5309 14.2588 14.0395 13.8835 14.4144C13.5082 14.7893 12.9994 14.9998 12.469 14.9995C11.9386 14.9992 11.43 14.7883 11.0551 14.413C10.6802 14.0378 10.4697 13.5289 10.47 12.9985C10.4703 12.4681 10.6812 11.9595 11.0565 11.5846C11.4318 11.2097 11.9406 10.9992 12.471 10.9995C13.0014 10.9998 13.51 11.2107 13.8849 11.586C14.2598 11.9613 14.4703 12.4701 14.47 13.0005ZM14.53 16.4805H10.53V29.0005H14.53V16.4805ZM20.85 16.4805H16.87V29.0005H20.81V22.4305C20.81 18.7705 25.58 18.4305 25.58 22.4305V29.0005H29.53V21.0705C29.53 14.9005 22.47 15.1305 20.81 18.1605L20.85 16.4805Z"
        fill="#151515"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="white" />
      <path
        d="M21.0281 10.0007C21.7578 9.99794 22.4875 10.0053 23.2171 10.0227L23.4111 10.0297C23.6351 10.0377 23.8561 10.0477 24.1231 10.0597C25.1871 10.1097 25.9131 10.2777 26.5501 10.5247C27.2101 10.7787 27.7661 11.1227 28.3221 11.6787C28.8304 12.1783 29.2239 12.7827 29.4751 13.4497C29.7221 14.0867 29.8901 14.8137 29.9401 15.8777C29.9521 16.1437 29.9621 16.3657 29.9701 16.5897L29.9761 16.7837C29.9938 17.5129 30.0015 18.2423 29.9991 18.9717L30.0001 19.7177V21.0277C30.0025 21.7575 29.9949 22.4872 29.9771 23.2167L29.9711 23.4107C29.9631 23.6347 29.9531 23.8557 29.9411 24.1227C29.8911 25.1867 29.7211 25.9127 29.4751 26.5497C29.2247 27.2175 28.8312 27.8223 28.3221 28.3217C27.822 28.8301 27.2174 29.2235 26.5501 29.4747C25.9131 29.7217 25.1871 29.8897 24.1231 29.9397C23.8561 29.9517 23.6351 29.9617 23.4111 29.9697L23.2171 29.9757C22.4875 29.9935 21.7578 30.0012 21.0281 29.9987L20.2821 29.9997H18.9731C18.2433 30.0022 17.5136 29.9945 16.7841 29.9767L16.5901 29.9707C16.3527 29.9621 16.1153 29.9521 15.8781 29.9407C14.8141 29.8907 14.0881 29.7207 13.4501 29.4747C12.7827 29.2241 12.1783 28.8306 11.6791 28.3217C11.1701 27.822 10.7763 27.2173 10.5251 26.5497C10.2781 25.9127 10.1101 25.1867 10.0601 24.1227C10.0489 23.8855 10.0389 23.6481 10.0301 23.4107L10.0251 23.2167C10.0066 22.4872 9.99829 21.7575 10.0001 21.0277V18.9717C9.99727 18.2423 10.0046 17.5129 10.0221 16.7837L10.0291 16.5897C10.0371 16.3657 10.0471 16.1437 10.0591 15.8777C10.1091 14.8127 10.2771 14.0877 10.5241 13.4497C10.7754 12.7824 11.17 12.1782 11.6801 11.6797C12.179 11.1705 12.783 10.7763 13.4501 10.5247C14.0881 10.2777 14.8131 10.1097 15.8781 10.0597L16.5901 10.0297L16.7841 10.0247C17.5132 10.0063 18.2426 9.99798 18.9721 9.99974L21.0281 10.0007ZM20.0001 15.0007C19.3376 14.9914 18.6798 15.1138 18.065 15.3608C17.4503 15.6079 16.8907 15.9746 16.4189 16.4398C15.9471 16.905 15.5725 17.4593 15.3167 18.0705C15.061 18.6817 14.9293 19.3377 14.9293 20.0002C14.9293 20.6628 15.061 21.3188 15.3167 21.93C15.5725 22.5412 15.9471 23.0955 16.4189 23.5607C16.8907 24.0259 17.4503 24.3926 18.065 24.6397C18.6798 24.8867 19.3376 25.0091 20.0001 24.9997C21.3261 24.9997 22.5979 24.473 23.5356 23.5353C24.4733 22.5976 25.0001 21.3258 25.0001 19.9997C25.0001 18.6737 24.4733 17.4019 23.5356 16.4642C22.5979 15.5265 21.3261 15.0007 20.0001 15.0007ZM20.0001 17.0007C20.3986 16.9934 20.7945 17.0655 21.1649 17.2129C21.5352 17.3604 21.8724 17.5801 22.1568 17.8593C22.4413 18.1385 22.6672 18.4716 22.8215 18.8391C22.9758 19.2066 23.0553 19.6012 23.0553 19.9997C23.0554 20.3983 22.976 20.7929 22.8219 21.1605C22.6677 21.528 22.4419 21.8612 22.1576 22.1405C21.8732 22.4198 21.536 22.6396 21.1658 22.7871C20.7955 22.9347 20.3996 23.007 20.0011 22.9997C19.2054 22.9997 18.4423 22.6837 17.8797 22.1211C17.3171 21.5585 17.0011 20.7954 17.0011 19.9997C17.0011 19.2041 17.3171 18.441 17.8797 17.8784C18.4423 17.3158 19.2054 16.9997 20.0011 16.9997L20.0001 17.0007ZM25.2501 13.5007C24.9275 13.5137 24.6224 13.6509 24.3987 13.8837C24.175 14.1165 24.05 14.4269 24.05 14.7497C24.05 15.0726 24.175 15.3829 24.3987 15.6158C24.6224 15.8486 24.9275 15.9858 25.2501 15.9987C25.5816 15.9987 25.8995 15.867 26.1339 15.6326C26.3684 15.3982 26.5001 15.0803 26.5001 14.7487C26.5001 14.4172 26.3684 14.0993 26.1339 13.8649C25.8995 13.6304 25.5816 13.4987 25.2501 13.4987V13.5007Z"
        fill="#151515"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="white" />
      <path d="M9 10H11.5L26.5 30H24L9 10Z" fill="#151515" />
      <path d="M13.5 10H16L31 30H28.5L13.5 10Z" fill="#151515" />
      <path d="M11 10H16V12H11V10Z" fill="#151515" />
      <path d="M24 30H29V28H24V30Z" fill="#151515" />
      <path d="M26.5 10H30L13 30H9.5L26.5 10Z" fill="#151515" />
    </svg>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-5 text-lg lg:text-xl font-bold lg:font-['Nunito']">
        {title}
      </h3>

      <ul className="space-y-3 text-sm lg:text-base lg:font-['Nunito']">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="transition-opacity hover:opacity-70">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#11040E] text-white font-['Nunito_Sans']">
      <section className="border-b border-[#C4C4C4] bg-[#1D0617]">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-6 px-6 py-7 lg:flex-row lg:items-center lg:justify-between lg:px-0 lg:py-10">
          <div>
            <p className="mb-4 text-sm lg:text-lg">
              Ready to be a part of something extraordinary?
            </p>

            <h2 className="max-w-[700px] text-xl font-semibold font-['Nunito'] leading-[130%] lg:text-[32px]">
              Let&apos;s work together to create a difference
            </h2>
          </div>

          <Link
            href="/contact"
            className="w-fit rounded bg-[#571244] px-6 py-3 text-sm font-semibold font-['Nunito'] transition-opacity hover:opacity-80 lg:px-7 lg:text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-[1312px] px-6 pt-14 lg:px-0">
        <div className="grid gap-9 lg:grid-cols-[1.35fr_1.1fr_.6fr_.9fr] lg:gap-16">
          <div>
            <Image
              src={footerLogo}
              alt="Tobams Group Logo"
              width={180}
              height={60}
              className="h-auto w-[180px]"
            />

            <p className="mt-6 max-w-[380px] text-sm leading-6 text-[#F8F8F8] lg:text-base lg:tracking-[3%]  font-['Nunito'] text-left">
              Tobams Group is an innovative consultancy{" "}
              <br className="hidden lg:inline" />
              firm reshaping the future of tech talent development in Africa,
              specializing in talent acquisition, internships, and skill
              development with a global perspective.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <Link href="#" aria-label="LinkedIn">
                <LinkedinIcon />
              </Link>

              <Link href="#" aria-label="Instagram">
                <InstagramIcon />
              </Link>

              <Link href="#" aria-label="X">
                <XIcon />
              </Link>
            </div>
          </div>

          <FooterColumn title="What We Do" links={whatWeDo} />
          <FooterColumn title="Company" links={company} />
          <FooterColumn title="Solution" links={solutions} />
        </div>

        <div className="mt-10 border-t border-[#DDD0DA]/12  pt-5 lg:mt-16 lg:border-none lg:pt-0">
          <div className="rounded-lg bg-[#FFFFFF]/6 p-4 lg:grid lg:grid-cols-[1fr_1px_1fr_1px_.55fr] lg:px-6 lg:py-6">
            <div className="lg:order-5 lg:pl-6">
              <h3 className="mb-5 text-lg font-bold lg:text-xl lg:font-['Nunito] ">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm lg:text-base">
                <a
                  href="mailto:theteam@tobamsgroup.com"
                  className="flex items-center gap-4"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                      fill="#EF4353"
                    />
                  </svg>

                  <span>theteam@tobamsgroup.com</span>
                </a>

                <a href="tel:+447886600748" className="flex items-center gap-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.23 15.2598L16.69 14.9698C16.3914 14.9347 16.0886 14.9678 15.8046 15.0665C15.5206 15.1652 15.2626 15.327 15.05 15.5398L13.21 17.3798C10.3712 15.936 8.06382 13.6286 6.62004 10.7898L8.47004 8.93977C8.90004 8.50977 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.69335 4.29194 8.45923 3.842 8.09228 3.51561C7.72532 3.18923 7.25115 3.00918 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
                      fill="#EF4353"
                    />
                  </svg>

                  <span>+447886600748</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:order-4 lg:block lg:h-full lg:w-px lg:bg-[#DDD0DA]/12" />

            <div className="lg:order-1 lg:col-span-3">
              <h3 className="mb-4 text-lg font-bold lg:text-xl lg:font-['Nunito]">
                Registered Offices
              </h3>

              <div className="grid gap-9 lg:grid-cols-2 lg:gap-6">
                <div className="lg:border-r lg:border-[#DDD0DA]/12 lg:pr-6">
                  <p className="mb-1 text-[#EF4353]">United Kingdom</p>

                  <p className="text-sm leading-6 lg:text-base">
                    07451196 (Registered by Company House)
                    <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-[#EF4353]">Nigeria</p>

                  <p className="text-sm leading-6 lg:text-base">
                    RC 1048722 (Registered by the Corporate Affairs Commission)
                    <br />
                    4, Muaz Close, Angwari-Rimi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#DDD0DA]/12 pt-5 pb-6 lg:mt-10 lg:flex lg:items-center lg:justify-between lg:pt-8 lg:pb-10">
          {/* Mobile links */}
          <div className="flex flex-wrap justify-center gap-x-6 text-sm font-light leading-9 underline lg:hidden">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookies Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </div>

          {/* Desktop copyright */}
          <p className="mt-3 text-center text-sm font-light leading-6 lg:order-1 lg:mt-0 lg:text-left lg:text-base">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>

          {/* Desktop links */}
          <div className="hidden gap-x-10 text-base font-light underline lg:order-2 lg:flex lg:justify-end leading-9">
            <Link href="/terms">Terms and Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/cookies">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
