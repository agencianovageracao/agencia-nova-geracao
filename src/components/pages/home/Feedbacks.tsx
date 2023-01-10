import { CaretLeft, CaretRight, Star } from 'phosphor-react'
import { Component } from 'react'

import Slider from 'react-slick'

export class Feedbacks extends Component {
  slider: any
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      centerPadding: '10px',
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    return (
      <section className="py-20 bg-green-500">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-effective max-w-lg text-black">
              O que nossos clientes falam sobre nós?
            </h1>
            <div className="flex items-center gap-5">
              <button
                onClick={() => this.previous()}
                className="w-[50px] h-[50px] flex items-center justify-center bg-gray-100 rounded-full transition-all hover:bg-gray-200"
              >
                <CaretLeft size={32} />
              </button>
              <button
                onClick={() => this.next()}
                className="w-[50px] h-[50px] flex items-center justify-center bg-gray-100 rounded-full transition-all hover:bg-gray-200"
              >
                <CaretRight size={32} />
              </button>
            </div>
          </div>
          <div className="mt-20">
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
              <div>
                <div className="p-10 bg-gray-100 rounded-lg">
                  <div>
                    <h1 className="text-4xl text-black font-effective">Nome</h1>
                    <p className="mt-2 text-gray-700">Âncora pesca</p>
                    <p className="mt-5 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis mollitia perspiciatis ipsa est assumenda quis
                      corrupti, vero voluptatum quo ut animi, adipisci beatae
                      optio explicabo velit ipsam quia facilis omnis?
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-yellow-500 mt-5">
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                    <Star size={32} weight="fill" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}
