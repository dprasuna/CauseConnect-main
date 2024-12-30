import React from "react"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is CauseConnect?",
    answer: "CauseConnect helps you connect with local NGOs and initiatives so you can make a positive impact in your community.",
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up to create a profile, browse through available volunteer opportunities, and start making a difference.",
  },
  {
    question: "Are there any costs involved?",
    answer: "No, CauseConnect is completely free to use for volunteers.",
  },
  {
    question: "How do I connect with NGOs?",
    answer: "Once you're signed up, you can directly contact NGOs and initiatives listed on the platform to explore volunteer opportunities.",
  },
]

const Faq: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50/50 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about volunteering with us
          </p>
        </div>

        <Accordion 
          type="single" 
          collapsible 
          className="w-full space-y-4"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group border border-purple-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger 
                className="px-6 py-4 hover:no-underline data-[state=open]:bg-indigo-50/50"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-left font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-indigo-500 transition-transform duration-300" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a 
              href="/contact" 
              className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-4 hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Faq