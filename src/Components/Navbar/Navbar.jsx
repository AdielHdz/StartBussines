"use client";
import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import DefaultImage from "public/asset/avatar2.jpg";
import Image from "next/image";
import Logo from "../../../public/asset/DealUp.png";

const navigation = [
  {
    name: "Home",
    href: "/home",
    current: true,
    allowedRoles: ["entrepreneur", "investor", "moderator", "admin"],
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    current: true,
    allowedRoles: ["admin", "moderator"],
  },
  {
    name: "My investments",
    href: "/investments",
    current: true,
    allowedRoles: ["investor"],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  const [rolSession, setRolSession] = useState("");
  const [idSession, setIdSession] = useState("");
  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const rol = localStorage.getItem("rol");
      const id = localStorage.getItem("idSession");
      const picture = localStorage.getItem("avatar");
      setRolSession(rol);
      setIdSession(id);
      setAvatar(picture);
    }
  }, []);

  const navigationWithRoles = navigation.filter((item) =>
    item.allowedRoles.includes(rolSession)
  );
  const profileHandler = () => {
    router.push(`/userProfile/${idSession}`);
  };

  const signOutHandler = () => {
    localStorage.setItem("rol", "");
    localStorage.setItem("token_DealUp", "");
    localStorage.setItem("idSession", "");
    localStorage.setItem("fullName", "");
    localStorage.setItem("avatar", "");
    localStorage.setItem("savedEmail", "");

    router.push("/logIn");
  };
  return (
    <Disclosure as="nav" className="shadow-cards bg-whites rounded-xl">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a
                    href="/home"
                    className="flex text-transparent bg-clip-text bg-gradient-to-r to-sky-50 from-sky-400 mr-4 mt-0 text-4xl font-extrabold items-center">
                    <span className="pl-2">
                      <Image
                        src={Logo}
                        alt="Deal Up!"
                        className="w-32 md:w-35 "
                      />
                    </span>
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationWithRoles.map(
                      (item) =>
                        item.allowedRoles.includes(rolSession) && (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-primar text-white"
                                : "text-gray-300 hover:bg-primar hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}>
                            {item.name}
                          </a>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={/* avatar */ DefaultImage}
                        alt="avatar"
                        width={100}
                        height={100}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={profileHandler}
                            className={classNames(
                              active ? "w-full bg-gray-100" : "",
                              "w-full block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={signOutHandler}
                            className={classNames(
                              active ? "w-full bg-gray-100" : "",
                              "w-full block px-4 py-2 text-sm text-gray-700"
                            )}>
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {!navigation.length && (
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigationWithRoles.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-primar text-white"
                        : "text-gray-300 hover:bg-primar hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
}
