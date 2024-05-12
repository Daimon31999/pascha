"use client";

import Link from "next/link";
import Container from "./Container";
import { ModeToggle } from "./ModeToggle";

const linkClasses = "text-2xl font-semibold hover:underline";
const colors = [
  "text-red-500",
  "text-orange-500",
  "text-yellow-500",
  "text-green-500",
  "text-blue-500",
  "text-indigo-500",
  "text-purple-500",
];

export default function Header() {
  return (
    <header className="dark:bg-slate-800 py-4 text-white mb-16 col-span-12">
      <Container>
        <nav className="flex justify-between col-span-12">
          {["Dima", "Ilia", "Max", "Anya"].map((text, index) => (
            <Link href={`/${text.toLowerCase()}`} key={text}>
              <span
                className={linkClasses + " " + colors[index % colors.length]}
              >
                {text}
              </span>
            </Link>
          ))}

          <ModeToggle />
        </nav>
      </Container>
    </header>
  );
}
