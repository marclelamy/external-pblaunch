"use client"

import { useReveal } from "../../hooks/use-reveal"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export function FAQSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [faqs, setFaqs] = useState<any[]>([])

  useEffect(() => {
    fetch("/7-faq.json")
      .then(r => r.json())
      .then(data => setFaqs(data.faqs))
  }, [])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-3xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground/95 md:text-6xl lg:text-7xl">
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className={`border-foreground/20 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <AccordionTrigger className="text-left font-sans text-lg font-light hover:text-[#c4ff00] transition-colors text-foreground/95">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/85 leading-relaxed font-normal">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

