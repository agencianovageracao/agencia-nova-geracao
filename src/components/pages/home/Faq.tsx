import * as Accordion from '@radix-ui/react-accordion'
import { NextPage } from 'next'
import * as Icon from 'phosphor-react'
import Sticky from 'react-stickynode'

export const Faq: NextPage = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col lg:flex-row justify-between gap-8">
        <div>
          <div className="faq-title">
            <h2 className="text-3xl font-effective text-green-500">F.A.Q</h2>
            <h1 className="text-4xl text-gray-800 font-bold">
              Perguntas e respostas mais frequentes
            </h1>
          </div>
        </div>
        <div className="w-full">
          <Accordion.Root
            className="AccordionRoot flex flex-col w-full gap-6"
            type="single"
            collapsible
          >
            <Accordion.Item
              data-state="closed"
              className="rounded overflow-hidden"
              value="item-1"
            >
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-white p-5 border-2 w-full">
                <div className="chevron w-14 h-14 bg-white text-green-500 flex items-center justify-center rounded">
                  <div className="icon">
                    <Icon.Plus size={32} />
                  </div>
                </div>
                <h1 className="text-3xl font-effective text-black-500 ">
                  O que é tal coisa?
                </h1>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="faq-content bg-white">
                <div className="p-5">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit adipisci quia, natus voluptatem distinctio quisquam
                    aperiam quo architecto praesentium! Debitis autem nisi porro
                    deserunt eos omnis ab ducimus eum in?
                  </p>
                </div>
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item
              data-state="closed"
              className="rounded overflow-hidden"
              value="item-1"
            >
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-white p-5 border-2 w-full">
                <div className="chevron w-14 h-14 bg-white text-green-500 flex items-center justify-center rounded">
                  <div className="icon">
                    <Icon.Plus size={32} />
                  </div>
                </div>
                <h1 className="text-3xl font-effective text-black-500 ">
                  O que é tal coisa?
                </h1>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="faq-content bg-white">
                <div className="p-5">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit adipisci quia, natus voluptatem distinctio quisquam
                    aperiam quo architecto praesentium! Debitis autem nisi porro
                    deserunt eos omnis ab ducimus eum in?
                  </p>
                </div>
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item
              data-state="closed"
              className="rounded overflow-hidden"
              value="item-1"
            >
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-white p-5 border-2 w-full">
                <div className="chevron w-14 h-14 bg-white text-green-500 flex items-center justify-center rounded">
                  <div className="icon">
                    <Icon.Plus size={32} />
                  </div>
                </div>
                <h1 className="text-3xl font-effective text-black-500 ">
                  O que é tal coisa?
                </h1>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="faq-content bg-white">
                <div className="p-5">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit adipisci quia, natus voluptatem distinctio quisquam
                    aperiam quo architecto praesentium! Debitis autem nisi porro
                    deserunt eos omnis ab ducimus eum in?
                  </p>
                </div>
              </Accordion.AccordionContent>
            </Accordion.Item>
            <Accordion.Item
              data-state="closed"
              className="rounded overflow-hidden"
              value="item-1"
            >
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center border-white p-5 border-2 w-full">
                <div className="chevron w-14 h-14 bg-white text-green-500 flex items-center justify-center rounded">
                  <div className="icon">
                    <Icon.Plus size={32} />
                  </div>
                </div>
                <h1 className="text-3xl font-effective text-black-500 ">
                  O que é tal coisa?
                </h1>
              </Accordion.AccordionTrigger>
              <Accordion.AccordionContent className="faq-content bg-white">
                <div className="p-5">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit adipisci quia, natus voluptatem distinctio quisquam
                    aperiam quo architecto praesentium! Debitis autem nisi porro
                    deserunt eos omnis ab ducimus eum in?
                  </p>
                </div>
              </Accordion.AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
