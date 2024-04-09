"use client";

import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ContactsPage = () => {
  const [agreed, setAgreed] = useState(false);
  return (
    <section className="text-gray-600 body-font relative isolate bg-gradient-to-b from-seagull-700/15 via-white to-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ca80ff] to-[#89ccfc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-seagull-950/95 sm:text-4xl">
          Contacts
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Vous trouverez ci-après nos differents coordonnées. <br />
          N&apos;hésitez à nous laisser un message en remplissant le formulaire,
          nous vous répondrons dans les plus brefs delais.
        </p>
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ filter: "whitescale(1) contrast(1.2) opacity(0.4)" }}
            frameBorder="0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="yes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.78986022370728!2d11.526772452475472!3d3.8875759901473876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc55a70bf331f%3A0xc4005ee620c3c476!2sIPM%2FCPM%20(Institut%20de%20Psychotraumatologie%20et%20de%20M%C3%A9diation)!5e0!3m2!1sen!2scm!4v1712371320317!5m2!1sen!2scm"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-seagull-950/95 tracking-widest text-xs">
                ADRESSE
              </h2>
              <p className="mt-1">
                Yaoundé, Elig-Edzoa <br />
                Immeuble Renaprov (Face ancien Feicom) <br />
                2e Étage
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-seagull-950/95 tracking-widest text-xs">
                EMAIL
              </h2>
              <Link
                href="mailto:Secretariat@cpm-ipm.org"
                className="text-seagull-500 leading-relaxed"
              >
                secretariat@cpm-ipm.org
              </Link>
              <h2 className="title-font font-semibold text-seagull-950/95 tracking-widest text-xs mt-4">
                TELEPHONE
              </h2>
              <p className="leading-relaxed">
                <Link
                  href="tel:655656678"
                  className="text-seagull-500 leading-relaxed"
                >
                  655-656-678
                </Link>{" "}
                <br />
                <Link
                  href="tel:675947917"
                  className="text-seagull-500 leading-relaxed"
                >
                  675-947-917
                </Link>
              </p>
            </div>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-seagull-950/95"
              >
                Prenom(s)
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-seagull-950/95 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-seagull-950/95"
              >
                Noms(s)
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-seagull-950/95 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-seagull-950/95"
              >
                Organisation / Entreprise / Institution
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-seagull-950/95 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-seagull-950/95"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-seagull-950/95 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-seagull-950/95"
              >
                Numero de Tel
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Pays
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm appearance-none"
                  >
                    <option>CM</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-seagull-950/95 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-seagull-950/95"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-seagull-950/95 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-seagull-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-seagull-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seagull-600"
                  )}
                >
                  <span className="sr-only">
                    Acceptez les politique de confidentialité
                  </span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                En Selectionnant , vous acceptez la{" "}
                <a href="#" className="font-semibold text-seagull-600">
                  politique de confidentialité
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-seagull-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-seagull-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-seagull-600"
            >
              Laissez-nous un message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <div>
      <ContactsPage />
    </div>
  );
};
export default page;
