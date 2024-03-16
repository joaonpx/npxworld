import { Link, animateScroll as scroll } from "react-scroll";
import { List, X } from "@phosphor-icons/react";

export function Menu({
  isNavOpen,
  isAbountOpen,
  isCurrentSectionCreative,
  isCurrentSectionHome,
  setIsNavOpen,
  setIsAboutOpen,
}) {
  return (
    <>
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
                isCurrentSectionCreative
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
            isCurrentSectionHome
              ? "fill-zinc-100 ease-out duration-300"
              : "fill-zinc-950 ease-out duration-300"
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
            isCurrentSectionHome
              ? "fill-zinc-100 ease-out duration-300"
              : "fill-zinc-950 ease-out duration-300"
          }
        />
      </button>
    </>
  );
}
