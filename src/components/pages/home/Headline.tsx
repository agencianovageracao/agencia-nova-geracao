import { NextPage } from 'next'

import Slider from 'react-slick'

export const Headline: NextPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <section className="bg-green-500 w-screen min-h-screen h-full flex flex-col items-center justify-center mt-20">
      <div className="container">
        <h1 className="text-5xl font-effective text-black">
          Nossos cases de sucesso
        </h1>
        <div className="mt-40 mb-10 h-fit">
          <Slider {...settings}>
            <div className="pb-20">
              <div className="flex justify-between items-center gap-20">
                <div className="max-w-[700px] h-full max-h-[483px] relative flex items-center justify-center">
                  <img
                    className="absolute first-letter:bottom-0 top-0"
                    src="/illustrations/border.svg"
                    alt="none"
                  />
                  <img
                    className="aspect-video w-[90%] mt-[8%]"
                    src="https://i.imgur.com/KXlgmnn.png"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-effective">Nova Geração</h1>
                  <p className="text-lg mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt suscipit repellat doloremque. Maiores optio
                    suscipit ipsum omnis, vero quis ab praesentium totam
                    quisquam consequuntur eius asperiores ex fugit quae saepe.
                  </p>
                  <button className="custom-button bg-black py-3 px-10 mt-5 text-lg font-effective text-white uppercase transition-all hover:bg-gray-900 ">
                    Visitar
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex justify-between items-center gap-20">
                <div className="max-w-[700px] h-full max-h-[483px] relative flex items-center justify-center">
                  <img
                    className="absolute first-letter:bottom-0 top-0"
                    src="/illustrations/border.svg"
                    alt="none"
                  />
                  <img
                    className="aspect-video w-[90%] mt-[8%]"
                    src="https://i.imgur.com/KXlgmnn.png"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-effective">Nova Geração</h1>
                  <p className="text-lg mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt suscipit repellat doloremque. Maiores optio
                    suscipit ipsum omnis, vero quis ab praesentium totam
                    quisquam consequuntur eius asperiores ex fugit quae saepe.
                  </p>
                  <button className="custom-button bg-black py-3 px-10 mt-5 text-lg font-effective text-white uppercase transition-all hover:bg-gray-900 ">
                    Visitar
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex justify-between items-center gap-20">
                <div className="max-w-[700px] h-full max-h-[483px] relative flex items-center justify-center">
                  <img
                    className="absolute first-letter:bottom-0 top-0"
                    src="/illustrations/border.svg"
                    alt="none"
                  />
                  <img
                    className="aspect-video w-[90%] mt-[8%]"
                    src="https://i.imgur.com/KXlgmnn.png"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-effective">Nova Geração</h1>
                  <p className="text-lg mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt suscipit repellat doloremque. Maiores optio
                    suscipit ipsum omnis, vero quis ab praesentium totam
                    quisquam consequuntur eius asperiores ex fugit quae saepe.
                  </p>
                  <button className="custom-button bg-black py-3 px-10 mt-5 text-lg font-effective text-white uppercase transition-all hover:bg-gray-900 ">
                    Visitar
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex justify-between items-center gap-20">
                <div className="max-w-[700px] h-full max-h-[483px] relative flex items-center justify-center">
                  <img
                    className="absolute first-letter:bottom-0 top-0"
                    src="/illustrations/border.svg"
                    alt="none"
                  />
                  <img
                    className="aspect-video w-[90%] mt-[8%]"
                    src="https://i.imgur.com/KXlgmnn.png"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-effective">Nova Geração</h1>
                  <p className="text-lg mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt suscipit repellat doloremque. Maiores optio
                    suscipit ipsum omnis, vero quis ab praesentium totam
                    quisquam consequuntur eius asperiores ex fugit quae saepe.
                  </p>
                  <button className="custom-button bg-black py-3 px-10 mt-5 text-lg font-effective text-white uppercase transition-all hover:bg-gray-900 ">
                    Visitar
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex justify-between items-center gap-20">
                <div className="max-w-[700px] h-full max-h-[483px] relative flex items-center justify-center">
                  <img
                    className="absolute first-letter:bottom-0 top-0"
                    src="/illustrations/border.svg"
                    alt="none"
                  />
                  <img
                    className="aspect-video w-[90%] mt-[8%]"
                    src="https://i.imgur.com/KXlgmnn.png"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-effective">Nova Geração</h1>
                  <p className="text-lg mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt suscipit repellat doloremque. Maiores optio
                    suscipit ipsum omnis, vero quis ab praesentium totam
                    quisquam consequuntur eius asperiores ex fugit quae saepe.
                  </p>
                  <button className="custom-button bg-black py-3 px-10 mt-5 text-lg font-effective text-white uppercase transition-all hover:bg-gray-900 ">
                    Visitar
                  </button>
                </div>
              </div>
            </div>
            <div className="pb-20">
              <div className="flex justify-between items-center gap-20">
                <div className="max-w-[700px] h-full max-h-[483px] relative flex items-center justify-center">
                  <img
                    className="absolute first-letter:bottom-0 top-0"
                    src="/illustrations/border.svg"
                    alt="none"
                  />
                  <img
                    className="aspect-video w-[90%] mt-[8%]"
                    src="https://i.imgur.com/KXlgmnn.png"
                  />
                </div>
                <div className="w-full">
                  <h1 className="text-4xl font-effective">Nova Geração</h1>
                  <p className="text-lg mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt suscipit repellat doloremque. Maiores optio
                    suscipit ipsum omnis, vero quis ab praesentium totam
                    quisquam consequuntur eius asperiores ex fugit quae saepe.
                  </p>
                  <button className="custom-button bg-black py-3 px-10 mt-5 text-lg font-effective text-white uppercase transition-all hover:bg-gray-900 ">
                    Visitar
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}
