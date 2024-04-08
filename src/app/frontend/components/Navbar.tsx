"use client";

import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CPM from "@/app/frontend/assets/CPM-LogoMini.png";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Menu,
  UserRound,
  Handshake,
  Fingerprint,
  Combine,
  X,
  ChevronDown,
  Phone,
  NotebookPen,
} from "lucide-react";

const services = [
  {
    name: "Thérapie Individuelle",
    description:
      " troubles émotionnels, relationnels, psychologiques, adolescents, adultes.",
    href: "#Thérapie Individuelle",
    icon: UserRound,
  },
  {
    name: "Thérapie de Couple",
    description:
      "relations, surmonter, renforcer, proximité émotionnelle, équilibre.",
    href: "#Thérapie de Couple",
    icon: Handshake,
  },
  {
    name: "Thérapie Familiale",
    description:
      "système social, compréhension, soutien, transition, événements.",
    href: "#Thérapie Familiale",
    icon: Fingerprint,
  },
  {
    name: "Psychoéducation",
    description: "pour parents : gestion des enfants/adolescents.",
    href: "#Psychoéducation",
    icon: Combine,
  },
];

const menuItems = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "#Service", subItems: services },
  { name: "Contacts", href: "/Contacts" },
  { name: "Tarifs Consultation", href: "/Tarifs" },
];

const callsToAction = [
  {
    name: "Reservation",
    href: "#/Reservation",
    icon: NotebookPen,
    color: "seagull",
  },
  { name: "Appeler", href: "Tel:655656678", icon: Phone, color: "lime" },
];

function classNames(...classNamees: string[]) {
  return classNamees.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [navbarText, setNavbarText] = useState("text-white");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNavbarBg("bg-white");
      setNavbarText("text-gray-800/50");
    } else {
      setNavbarBg("bg-transparent");
      setNavbarText("text-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition duration-500 ease-in-out ${navbarBg} ${navbarText}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {!mobileMenuOpen && (
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CPM</span>
              <Image className="h-10 w-auto" src={CPM} alt="cpm_logo" />
            </Link>
          </div>
        )}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((menuItem) => (
            <Fragment key={menuItem.name}>
              {menuItem.subItems ? (
                <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6  hover:text-gray-300/75">
                    {menuItem.name}
                    <ChevronDown
                      className="h-5 w-5 flex-none"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {menuItem.subItems.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-seagull-50"
                          >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-seagull-50 group-hover:bg-white">
                              <item.icon
                                className="h-6 w-6 text-seagull-950 group-hover:text-seagull-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-auto">
                              <Link
                                href={item.href}
                                className="block font-semibold text-seagull-950"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-seagull-900">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-100/75">
                        {callsToAction.map((items) => (
                          <Link
                            key={items.name}
                            href={items.href}
                            className={`flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-seagull-950 hover:bg-${items.color}-100 hover:text-${items.color}-800`}
                          >
                            <items.icon
                              className={"h-5 w-5 flex-none"}
                              aria-hidden="true"
                            />
                            {items.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ) : (
                <Link
                  href={menuItem.href}
                  className="text-sm font-semibold leading-6  hover:text-gray-300/75"
                >
                  {menuItem.name}
                </Link>
              )}
            </Fragment>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 bg-seagull-500 hover:bg-seagull-600 text-white p-2 rounded-md "
          >
            Faites une Réservation en ligne{" "}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CPM</span>
              <Image className="h-8 w-auto" src={CPM} alt="cpm-mini_logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((menuItem) => (
                  <div key={menuItem.name}>
                    {menuItem.subItems ? (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                              {menuItem.name}
                              <ChevronDown
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="mt-2 space-y-2">
                              {menuItem.subItems.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <a
                        href={menuItem.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {menuItem.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg bg-seagull-500 p-2 px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-seagull-700"
                >
                  Faites une Réservation en ligne
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
