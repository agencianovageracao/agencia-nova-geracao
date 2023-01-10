import * as Accordion from '@radix-ui/react-accordion'
import { NextPage } from 'next'
import * as Icon from 'phosphor-react'
import Sticky from 'react-stickynode'

export const Faq: NextPage = () => {
  return (
    <section className="py-20">
      <div className="container flex justify-between gap-8">
        <Sticky
          top={80}
          bottomBoundary={4200}
          className="max-w-[850px] w-full "
        >
          <div className="w-full">
            <h2 className="text-3xl font-effective text-green-500">F.A.Q</h2>
            <h1 className="text-4xl text-gray-800 font-bold">
              Perguntas e respostas mais frequentes
            </h1>
          </div>
        </Sticky>
        <div className="w-full">
          <Accordion.Root
            className="AccordionRoot flex flex-col w-full gap-6"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <Accordion.Item className="rounded overflow-hidden" value="item-1">
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
            <Accordion.Item className="rounded overflow-hidden" value="item-2">
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center p-5 border-white border-2 w-full">
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
            <Accordion.Item className="rounded overflow-hidden" value="item-3">
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center p-5 border-white border-2 w-full">
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
            <Accordion.Item className="rounded overflow-hidden" value="item-4">
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center p-5 border-white border-2 w-full">
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
            <Accordion.Item className="rounded overflow-hidden" value="item-5">
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center p-5 border-white border-2 w-full">
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
            <Accordion.Item className="rounded overflow-hidden" value="item-6">
              <Accordion.AccordionTrigger className="faq-trigger flex gap-4 items-center p-5 border-white border-2 w-full">
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
