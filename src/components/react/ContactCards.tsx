import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const cards = [
  { icon: Mail, label: "Email", value: "cthomas330@liberty.edu", href: "mailto:cthomas330@liberty.edu" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect professionally", href: "https://www.linkedin.com/in/carolinethomas22" }
];

export default function ContactCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card, index) => {
        const Icon = card.icon;
        const content = (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="glass h-full rounded-[1.5rem] p-5"
          >
            <Icon className="text-teal" size={28} />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-gold">{card.label}</p>
            <p className="mt-2 font-semibold text-navy">{card.value}</p>
          </motion.div>
        );
        return <a key={card.label} href={card.href}>{content}</a>;
      })}
    </div>
  );
}
