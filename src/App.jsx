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

import heroBackground from "./assets/plantBackground.mp4";
import wdotDemo from "./assets/wdot-demo.png";
import allDesertGoodsDemo from "./assets/alldesertgoods-demo.png";
import logo from "./assets/logo.svg";

import "./app.css";
import { Menu } from "./components/Menu";

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAbountOpen, setIsAboutOpen] = useState(false);
  const [isCurrentSectionHome, setIsCurrentSectionHome] = useState(true);
  const [isCurrentSectionCreative, setIsCurrentSectionCreative] =
    useState(false);

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
        window.scrollY >= home.offsetTop && window.scrollY < creative.offsetTop
      );

      setIsCurrentSectionCreative(
        window.scrollY >= creative.offsetTop
        // && window.scrollY < social.offsetTop
      );

      // setIsCurrentSectionSocial(window.scrollY >= social.offsetTop);
    });
  }, []);
  return (
    <>
      <div id="wrapper" className="wrapper h-screen bg-zinc-100">
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
          className="h-full w-full text-zinc-100 pb-8 flex flex-col justify-between"
        >
          <main className="h-full flex items-center justify-center text-4xl font-bold text-center pt-20 relative z-10">
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

          <video
            id="background-video"
            className={
              isCurrentSectionHome
                ? "absolute h-full w-full object-cover"
                : "absolute h-full w-full object-cover hidden"
            }
            autoPlay
            loop
            muted
          >
            {/* Videos by Rostislav Uzunov */}
            <source src={heroBackground} type="video/mp4" />
          </video>
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

        <section
          id="social"
          className="h-1/2 lg:h-1/5 bg-zinc-950 text-zinc-100 flex items-center justify-center gap-24 overflow-hidden flex-col lg:flex-row"
        >
          <div className="group">
            <p className="uppercase tracking-[42px] mb-2 opacity-60 group-hover:opacity-100 duration-200">
              Social
            </p>
            <div className="flex items-center gap-6 ">
              {socialLinks.map((social, index) => (
                <SocialLink key={index} link={social.link} name={social.name} />
              ))}
            </div>
          </div>
          <img
            src={logo}
            alt="Logo Npxworld"
            className="w-72 rotate-[30deg] relative lg:top-4"
          />
        </section>
      </div>
    </>
  );
}
