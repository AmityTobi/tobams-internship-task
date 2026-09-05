import FeatureRow from "@/components/featureRow";
import corporateImg from "@/public/images/corporateImg.png";
import personalImg from "@/public/images/individual-training.png";
import capacityImg from "@/public/images/capacity-dev.png";

export default function ServicesSection() {
  return (
    <section className="w-full bg-white my-[40px] flex flex-col gap-6 md:gap-16">
      {/* 1. Corporate Trainings */}
      <FeatureRow
        title="Corporate Trainings"
        description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
        items={[
          "Leadership Training",
          "Strategic Planning and Implementation",
          "Project Management",
          "Sustainability Training",
          "Customised Training",
        ]}
        imageSrc={corporateImg}
        imageAlt="Corporate training session with facilitators"
        reverse={true}
      />

      {/* 2. Personalised Individual Training (Z-Pattern Reversed) */}
      <FeatureRow
        title="Personalised Individual Training"
        description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
        items={[
          "Leadership Development",
          "Soft Skills Development",
          "Industry Specific Knowledge",
          "Technical Skills Enhancement",
          "Time Management and Productivity",
          "Career Development",
        ]}
        imageSrc={personalImg}
        imageAlt="Women participating in a personalised training session"
        reverse={false}
      />

      {/* 3. Capacity Development */}
      <FeatureRow
        title="Capacity Development"
        description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
        items={[
          "Tailored Training Programs",
          "Expert-Led Workshops",
          "Personalized Mentorship",
          "Technical Skills Enhancement",
          "Collaborative Learning Environment",
          "Ongoing Support and Resources",
        ]}
        imageSrc={capacityImg}
        imageAlt="Team presentation and capacity building workshop"
        reverse={true}
      />
    </section>
  );
}
