"use client";

import Link from "next/link";
import Container from "./Container";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import AvatarBtn from "./AvatarBtn";

const links = [
  {
    href: "/",
    icon: (
      <span
        className={cn(
          "",
          "whitespace-break-spaces transition-all flex hover:text-skyMoschino dark:text-red-400 dark:hover:text-red-300 duration-300"
        )}
      >{`Место\nвстречь`}</span>
    ),
  },
  {
    href: "/about",
    label: "О нас",
  },
  {
    href: "/faq",
    label: "Вопросы",
  },
  {
    href: "/friends",
    label: "Найти друзей",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="dark:bg-[#000B0F] bg-orangeMoschino py-4 text-white mb-16 col-span-12 fixed top-0 left-0 w-full z-20">
      <Container>
        <nav className="flex justify-between items-center col-span-12">
          {links.map((link, idx) => (
            <Fragment key={idx}>
              <Link href={link.href} aria-label={link.label}>
                {link.icon || (
                  <span
                    className={cn(
                      "animated-underline",
                      "text-12 md:text-16  font-semibold capitalize",
                      "text-neutrals-0 transition-all text-white before:bg-white",
                      // dark styles
                      "dark:text-skyMoschino dark:before:bg-skyMoschino",
                      {
                        "text-neutrals-950": pathname === link.href,
                      }
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            </Fragment>
          ))}
          <AvatarBtn />
        </nav>
      </Container>
    </header>
  );
}
