import { Globe } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SocialLink } from "./components/SocialLink";
import { Project } from "./components/Project/";

import weatherDemo from "./assets/weather-demo.png";
import wdotDemo from "./assets/wdot-demo.png";
import allDesertGoodsDemo from "./assets/alldesertgoods-demo.png";
import logo from "./assets/logo.svg";
import desktopVideo from "./assets/background-desktop.mp4";
import mobileVideo from "./assets/background-mobile.mp4";

import "./app.css";
import { Menu } from "./components/Menu";
import { Video } from "./components/Video";

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAbountOpen, setIsAboutOpen] = useState(false);
  const [isCurrentSectionHome, setIsCurrentSectionHome] = useState(true);
  const [isCurrentSectionCreative, setIsCurrentSectionCreative] =
    useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/joaonpx",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/joaocarlosnpx/",
    },
    {
      name: "Email",
      link: "mailto:cheyprivado@gmail.com",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsCurrentSectionHome(
        window.scrollY >= home.offsetTop &&
          window.scrollY < creative.offsetTop - 40
      );

      setIsCurrentSectionCreative(
        window.scrollY >= creative.offsetTop - 40 &&
          window.scrollY < social.offsetTop
      );

      setIsCurrentSectionSocial(window.scrollY >= social.offsetTop);
    });

    if (window.innerWidth <= 768) {
      setIsMobileDevice(true);
    }
  }, []);
  return (
    <>
      <div id="wrapper" className="wrapper h-screen bg-zinc-100 antialiased">
        <nav
          id="navigationbar"
          className={
            isCurrentSectionHome
              ? "w-full fixed flex items-center justify-between py-8 px-7 text-zinc-100 z-40"
              : "w-full fixed flex items-center justify-between py-8 px-7 text-zinc-950 z-40"
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
                isCurrentSectionHome
                  ? "fill-zinc-100 ease-out duration-300"
                  : "fill-zinc-950 ease-out duration-300"
              }
            />
          </Link>
          <Menu
            isNavOpen={isNavOpen}
            isAbountOpen={isAbountOpen}
            isCurrentSectionHome={isCurrentSectionHome}
            isCurrentSectionCreative={isCurrentSectionCreative}
            setIsNavOpen={setIsNavOpen}
            setIsAboutOpen={setIsAboutOpen}
          />
        </nav>

        <section
          id="home"
          className="h-full w-full bg-zinc-950 text-zinc-100 pb-8 flex flex-col justify-between hero-bg"
        >
          <main className="h-full flex items-center  justify-center text-4xl font-bold text-center pt-20 relative z-10">
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
            <p className="text-center lg:max-w-xs lg:text-right text-pretty">
              Npxworld é uma marca criativa que atua no desenvolvimento de
              websites. Concebida por
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

          <Video
            isMobileDevice={isMobileDevice}
            isCurrentSectionHome={isCurrentSectionHome}
            desktopVideo={desktopVideo}
            mobileVideo={mobileVideo}
          />
        </section>

        <section id="creative" className="h-full px-7 py-8 snap-start">
          <div className="h-full flex items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              spaceBetween={50}
              slidesPerView={1}
              speed={1}
              className="h-full w-full"
            >
              <SwiperSlide className="flex items-center">
                <Project
                  img={wdotDemo}
                  name="Wdot"
                  url="https://wdotnews.vercel.app"
                  description="Homepage de notícias"
                  techs={["React"]}
                  github="https://github.com/joaonpx/wdot"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center">
                <Project
                  img={allDesertGoodsDemo}
                  name="AllDesertGoods"
                  url="https://alldesertgoods.vercel.app"
                  description="Galeria de arte"
                  techs={["HTML", "CSS", "JS"]}
                  github="https://github.com/joaonpx/alldesertgoods"
                />
              </SwiperSlide>
              <SwiperSlide className="flex items-center">
                <Project
                  img={weatherDemo}
                  name="Weather"
                  url="https://github.com/joaonpx/weather"
                  description="Aplicativo para consultar o clima"
                  techs={["Kotlin", "Jetpack Compose", "Retrofit"]}
                  github="https://github.com/joaonpx/weather"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <footer id="social" className="pt-8">
          <div className="bg-zinc-950 text-zinc-100 flex flex-col items-center justify-between overflow-hidden lg:flex-row lg:h-48">
            <div className="group pt-16 pl-10 lg:pt-0 lg:pl-20">
              <p className="uppercase tracking-[44.5px] mb-2 opacity-60 group-hover:opacity-100 duration-200 text-xs lg:text-sm lg:tracking-[43px]">
                Social
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    link={social.link}
                    name={social.name}
                  />
                ))}
              </div>
            </div>
            <img
              src={logo}
              alt="Logo Npxworld"
              className="rotate-[30deg] relative w-96 top-28 lg:w-72 lg:top-4 lg:right-14"
            />
          </div>
        </footer>
      </div>
    </>
  );
}
