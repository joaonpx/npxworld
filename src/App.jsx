import { Globe, List, X } from "@phosphor-icons/react";
import { useState } from "react";

export function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAbountOpen, setIsAboutOpen] = useState(false);

  return (
    <>
      <div
        id="home"
        className="h-screen w-screen bg-hero-bg bg-center text-zinc-100 lg:bg-cover pb-8 flex flex-col justify-between"
      >
        <nav
          id="navigationbar"
          className="w-full fixed flex items-center justify-between pt-8 px-7"
        >
          <a
            href="#home"
            className="z-50 hover:scale-110 ease-out duration-300"
          >
            <Globe size={48} color="#fafafa" weight="fill" />
          </a>
          <div
            id="menu"
            className={
              isNavOpen
                ? "h-full w-full fixed block text-4xl top-0 left-0 backdrop-blur-md pt-40 px-7 z-50"
                : "hidden lg:block"
            }
          >
            <ul className="flex flex-col gap-4 lg:flex-row ">
              <li>
                <a
                  href="#about"
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
                </a>
              </li>
              <li>
                <a
                  href="#creative"
                  className="hover:opacity-50 ease-out duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  Criativo
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  className="hover:opacity-50 ease-out duration-300"
                  onClick={() => setIsNavOpen(false)}
                >
                  Social
                </a>
              </li>
            </ul>
          </div>

          <button
            id="open-button"
            className={isNavOpen ? "hidden" : "block z-50 lg:hidden"}
            onClick={() => setIsNavOpen(true)}
          >
            <List size={36} color="#fafafa" />
          </button>
          <button
            id="close-button"
            className={isNavOpen ? "block z-50" : "hidden"}
            onClick={() => {
              setIsNavOpen(false);
              setIsAboutOpen((current) => !current);
            }}
          >
            <X size={36} color="#fafafa" />
          </button>
        </nav>

        <main className="h-full flex items-center justify-center text-4xl font-bold text-center pt-20">
          <h1>Arte, Código & Design</h1>
        </main>

        <div
          id="#about"
          className={
            isAbountOpen
              ? "w-full flex px-7 justify-end opacity-100 -translate-x-0 transition-all ease-out duration-700"
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
      </div>
    </>
  );
}
