import SectionHeader from "@/src/components/SectionHeader";
import TestimonialSlider from "@/src/components/ui/Testimonial/TestimonialSlider";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Patient",
    content:
      "The best dental experience I've ever had. The staff is professional and the treatment was painless. Highly recommended!",
    rating: 5,
  },
  {
    name: "James Miller",
    role: "Patient",
    content:
      "I was nervous about my root canal, but Dr. Johnson made me feel at ease. The technology they use is truly impressive.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Patient",
    content:
      "My teeth whitening results are incredible! I finally have the confidence to smile in photos again. Thank you SmileCare!",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Patient",
    content:
      "Exceptional service! The dental implants look and feel completely natural. It has changed my life.",
    rating: 5,
  },
  {
    name: "Linda Wilson",
    role: "Patient",
    content:
      "The pediatric care here is amazing. My kids actually look forward to their dental appointments now!",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="What Our Patients Say"
          subtitle="Don't just take our word for it. Here is what our satisfied patients have to say about their experience."
        />

        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
