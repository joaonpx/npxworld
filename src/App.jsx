import { Globe, List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Project } from "./components/Project/";
import wdotDemo from "./assets/wdot-demo.png";
import allDesertGoodsDemo from "./assets/alldesertgoods-demo.png";

import "./app.css";

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAbountOpen, setIsAboutOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY >= creative.offsetTop);
    });
  }, []);

  return (
    <>
      <div className="wrapper h-screen bg-zinc-100">
        <nav
          id="navigationbar"
          className={
            scrollPosition
              ? "w-full fixed flex items-center justify-between py-8 px-7 text-zinc-950 z-40"
              : "w-full fixed flex items-center justify-between py-8 px-7 text-zinc-100 z-40"
          }
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            href="#home"
            className="z-50 hover:scale-110 ease-out duration-300"
            onClick={() => {
              setIsNavOpen(false);
              setIsAboutOpen(false);
            }}
          >
            <Globe
              id="logo"
              size={48}
              weight="fill"
              className={
                scrollPosition
                  ? "fill-zinc-950 ease-out duration-300"
                  : "fill-zinc-100 ease-out duration-300"
              }
            />
          </Link>

          <div
            id="menu"
            className={
              isNavOpen
                ? "h-full w-full fixed block text-4xl top-0 left-0 backdrop-blur-md pt-40 px-7"
                : "hidden lg:block"
            }
          >
            <ul className="flex flex-col gap-4 lg:flex-row ">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="#home"
                  className={
                    isAbountOpen
                      ? "opacity-50"
                      : "hover:opacity-50 ease-out duration-300"
                  }
                  onClick={() => {
                    setIsAboutOpen((current) => !current);
                  }}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="creative"
                  spy={true}
                  smooth={true}
                  duration={500}
                  href="#creative"
                  className={
                    scrollPosition
                      ? "opacity-50"
                      : "hover:opacity-50 ease-out duration-300"
                  }
                  onClick={() => {
                    setIsNavOpen(false);
                    setIsAboutOpen(false);
                  }}
                >
                  Criativo
                </Link>
              </li>
              <li>
                <Link
                  to="social"
                  href="#social"
                  className="hover:opacity-50 ease-out duration-300"
                  onClick={() => {
                    setIsNavOpen(false);
                    setIsAboutOpen(false);
                  }}
                >
                  Social
                </Link>
              </li>
            </ul>
          </div>

          <button
            id="open-button"
            className={isNavOpen ? "hidden" : "block z-50 lg:hidden"}
            onClick={() => setIsNavOpen(true)}
          >
            <List
              size={36}
              className={
                scrollPosition
                  ? "fill-zinc-950 ease-out duration-300"
                  : "fill-zinc-100 ease-out duration-300"
              }
            />
          </button>

          <button
            id="close-button"
            className={isNavOpen ? "block z-50" : "hidden"}
            onClick={() => {
              setIsNavOpen(false);
              setIsAboutOpen(false);
            }}
          >
            <X
              size={36}
              className={
                scrollPosition
                  ? "fill-zinc-950 ease-out duration-300"
                  : "fill-zinc-100 ease-out duration-300"
              }
            />
          </button>
        </nav>

        <section
          id="home"
          className="h-full w-full bg-hero-bg bg-center bg-zinc-950 text-zinc-100 lg:bg-cover pb-8 flex flex-col justify-between"
        >
          <main className="h-full flex items-center justify-center text-4xl font-bold text-center pt-20">
            <h1>Arte, Código & Design</h1>
          </main>

          <div
            id="#about"
            className={
              isAbountOpen
                ? "w-full px-7 flex justify-end opacity-100 -translate-x-0 transition-all ease-out duration-700 z-50"
                : "opacity-0 -translate-x-20"
            }
          >
            <p className="text-center lg:max-w-xs lg:text-right">
              Npxworld é uma marca criativa que atua no desenvolvimento de
              websites. Concebida por{" "}
              <a
                href="https://www.github.com/joaonpx"
                className="hover:opacity-50 ease-out duration-300"
                target="_blank"
              >
                João Carlos
              </a>
              , um desenvolvedor web especializado em front-end.
            </p>
          </div>
        </section>

        <section id="creative" className="h-full px-7 py-8">
          <div className="h-full flex items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              spaceBetween={50}
              slidesPerView={1}
              speed={1400}
              className="h-full w-full"
            >
              <SwiperSlide className="flex items-center">
                <Project
                  img={wdotDemo}
                  name="Wdot"
                  url="https://wdotnews.vercel.app"
                  description="Homepage de notícias"
                  techs={["React"]}
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center">
                <Project
                  img={allDesertGoodsDemo}
                  name="AllDesertGoods"
                  url="https://alldesertgoods.vercel.app"
                  description="Galeria de arte"
                  techs={["HTML", "CSS", "JS"]}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
