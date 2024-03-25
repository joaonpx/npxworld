import { ArrowUpRight } from "@phosphor-icons/react";

export function SocialLink({ link, name }) {
  return (
    <>
      <a
        href={link}
        className="flex items-center gap-2 hover:opacity-50 ease-out duration-300"
      >
        {name}
        <ArrowUpRight size={16} color="#f4f4f5" />
      </a>
    </>
  );
}
