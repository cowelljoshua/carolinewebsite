import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Item = { title: string; category: string; summary: string; accent: string };

export default function FeaturedCarousel({ items }: { items: Item[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const featured = items.slice(0, 5);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {featured.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="min-w-0 flex-[0_0_86%] rounded-[2rem] border border-white bg-white/82 p-6 shadow-premium sm:flex-[0_0_48%] lg:flex-[0_0_32%]"
            >
              <div className="mb-6 h-36 overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-mist via-white to-teal/20">
                <div className="h-full w-full scale-110 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,77,.34),transparent_26%),radial-gradient(circle_at_75%_65%,rgba(79,156,154,.36),transparent_32%)] transition duration-500 hover:scale-125" />
              </div>
              <p className="eyebrow">{item.category}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/67">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:-translate-y-0.5 hover:text-teal" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous featured item">
          <ArrowLeft size={18} />
        </button>
        <button className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:-translate-y-0.5 hover:text-teal" onClick={() => emblaApi?.scrollNext()} aria-label="Next featured item">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
