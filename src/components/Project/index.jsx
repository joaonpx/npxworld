export function Project({ img, url, name, description, techs }) {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center text-zinc-950">
        <a href={url} target="_blank">
          <img
            src={img}
            alt="Imagem do projeto"
            className="w-full h-min lg:max-w-4xl md:px-16 hover:opacity-80 ease-out duration-300"
          />
        </a>

        <div className="w-full absolute bottom-0 flex flex-col justify-center items-center gap-4 sm:justify-between sm:flex-row text-center">
          <a
            href={url}
            target="_blank"
            className="hover:opacity-50 ease-out duration-300"
          >
            {name} <span className="ml-6">{description}</span>
          </a>
          <ul className="flex flex-wrap gap-4">
            {techs.map((tech) => {
              return (
                <li
                  className="border border-zinc-950 rounded-full px-3 py-1"
                  key={tech}
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
