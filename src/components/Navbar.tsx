"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import SearchDialog from "./Search";

function Navbar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <header className="relative mx-auto mb-4 flex w-[85%] items-center justify-between border-b-2 px-5">
      <Link href="/">
        <Image
          src="/images/midhah-lyrics-logo.svg"
          alt="Midhah Lyrics Logo"
          width={150}
          height={70}
        />
      </Link>

      <button
        className="rounded-md py-2 px-3.5 ring-1 hover:bg-gray-100 md:pr-7"
        onClick={openModal}
      >
        <i className="bi bi-search md:mr-1"></i>{" "}
        <span className="hidden md:inline">Search fav madh lyrics...</span>
      </button>
      <SearchDialog show={isOpen} closeModal={closeModal} />
    </header>
  );
}

export default Navbar;
