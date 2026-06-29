import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

type Item = {
  title: string;
  category: string;
  summary: string;
  accent: string;
  image: string;
  tags: string[];
};

export default function PortfolioGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          whileHover={{ y: -8 }}
          className="group overflow-hidden rounded-[1.45rem] border border-white/12 bg-white/[0.075] shadow-premium backdrop-blur-2xl ring-1 ring-white/10"
        >
          <div className="h-48 overflow-hidden bg-white/5">
            <img
              src={item.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-extrabold leading-tight tracking-tight text-white">{item.title}</h2>
            <p className="mt-3 min-h-16 text-[0.95rem] leading-7 text-slate-300">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1 text-[0.68rem] font-bold text-teal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-white"
                aria-label={`View details for ${item.title}`}
              >
                View Details <ArrowRight size={15} />
              </button>
              {item.category === "Pathophysiology papers" && (
                <button
                  type="button"
                  className="mt-4 flex items-center gap-2 rounded-md border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/14"
                >
                  <Download size={14} /> Download Paper
                </button>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
