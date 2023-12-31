import { Github, Mail, Instagram } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./index.css"

import { Pagination, Navigation } from "swiper/modules"

export function App() {
  return (
    <div className="p-10 h-screen">
      <header className="text-xl leading-normal">
        <div className="mb-5">
          <p>Olá, meu nome é João Carlos e sou desenvolvedor front-end.</p>
          <p>Entre em contato para criarmos algo novo.</p>
        </div>

        <ul className="flex flex-wrap gap-5">
          <li>
            <a href="https://www.instagram.com/npxworld/">
              <Badge
                variant="outline"
                className="p-3 hover:bg-zinc-50 hover:text-zinc-950 shadow-inner text-base"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Badge>
            </a>
          </li>
          <li>
            <a href="mailto:cheyprivado@gmail.com">
              <Badge
                variant="outline"
                className="p-3 hover:bg-zinc-50 hover:text-zinc-950 text-base"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Badge>
            </a>
          </li>

          <li>
            <a href="https://github.com/joaonpx">
              <Badge
                variant="outline"
                className="p-3 hover:bg-zinc-50 hover:text-zinc-950 text-base "
              >
                <Github className="w-4 h-4 mr-2" />
                Github
              </Badge>
            </a>
          </li>
        </ul>
      </header>

      <main className="mt-14 columns-2 gap-0 pb-10">
        {/* <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <a
                href="https://alldesertgoods.vercel.app"
                target="_blank"
                className="select-none"
              >
                <img
                  src="https://i.imgur.com/SC8oAha.png"
                  alt="All Desert Goods Preview"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://cvcount.vercel.app"
                target="_blank"
                className="select-none"
              >
                <img
                  src="https://i.imgur.com/71BwyB5.pngg"
                  alt="CV Count Preview"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://lista-de-disciplinas.vercel.app/"
                target="_blank"
                className="select-none"
              >
                <img
                  src="https://i.imgur.com/5nJLG6Q.png"
                  alt="Lista de Disciplinas Preview"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                href="https://godoctorcare.vercel.app"
                target="_blank"
                className="select-none"
              >
                <img
                  src="https://i.imgur.com/nXxLdm3.png"
                  alt="DoctorCare Preview"
                />
              </a>
            </SwiperSlide>
          </Swiper> */}

        <a
          href="https://alldesertgoods.vercel.app"
          target="_blank"
          className=""
        >
          <img
            src="https://i.imgur.com/SC8oAha.png"
            alt="All Desert Goods Preview"
            className="w-full object-cover transition-all"
          />
        </a>
        <a href="https://cvcount.vercel.app" target="_blank" className="">
          <img
            src="https://i.imgur.com/71BwyB5.pngg"
            alt="CV Count Preview"
            className="w-full object-cover transition-all"
          />
        </a>
        <a
          href="https://lista-de-disciplinas.vercel.app/"
          target="_blank"
          className=""
        >
          <img
            src="https://i.imgur.com/5nJLG6Q.png"
            alt="Lista de Disciplinas Preview"
            className="w-full object-cover transition-all"
          />
        </a>
        <a href="https://godoctorcare.vercel.app" target="_blank" className="">
          <img
            src="https://i.imgur.com/nXxLdm3.png"
            alt="DoctorCare Preview"
            className="w-full object-cover transition-all"
          />
        </a>
      </main>
    </div>
  )
}
