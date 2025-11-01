"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border rounded-lg overflow-hidden bg-card">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-accent/5 transition font-medium text-left"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 transition ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === idx && (
            <div className="px-6 py-4 border-t bg-foreground/2 text-foreground/80">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
