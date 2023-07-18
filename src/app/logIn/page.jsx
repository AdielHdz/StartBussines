"use client";
import React from "react";
import { useState } from "react";
import validation from "./validations/validations";

export default function LogIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validation({ ...form, [property]: value }));
  };
  return (
    <div
      class="flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5055748/pexels-photo-5055748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}>
      <div class="bg-black bg-opacity-30 p-5 rounded">
        <div className=" flex items-center justify-center">
          <div className="container mx-8 my-20">
            <h1 className="text-white text-center text-6xl mb-10">Logo</h1>
          </div>
        </div>
        <div class=" my-5 flex justify-around text-xl">
          <h1>Logo</h1>
          <p>/</p>
          <h1 class="text-2xl underline">Sign in</h1>
        </div>

        <form>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              name="email"
              class={`peer block min-h-[auto] w-full rounded border-0 bg-slate-400 bg-opacity-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 ${
                form.email
                  ? "peer-data-[te-input-state-active]:translate-y-[-1.15rem] peer-data-[te-input-state-active]:scale-75"
                  : ""
              }`}
              placeholder="Email"
              onChange={handleChange}
            />
            <label
              name="email"
              class={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${
                form.email ? "text-primary" : ""
              }`}></label>
            {error.email && <p>{error.email}</p>}
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              class={`peer block min-h-[auto] w-full rounded border-0 bg-slate-400 bg-opacity-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 ${
                form.password
                  ? "peer-data-[te-input-state-active]:translate-y-[-1.15rem] peer-data-[te-input-state-active]:scale-75"
                  : ""
              }`}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <label
              name="password"
              class={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out ${
                form.password ? "text-primary" : ""
              }`}></label>
            {error.password && <p>{error.password}</p>}
          </div>

          <button
            type="submit"
            class="inline-block w-full rounded bg-indigo-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            Log In
          </button>
          <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          <div class="flex justify-center items-center ">
            <a class="mb-3 flex w-1/4 items-center justify-center rounded bg-red-500 px-5 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-md focus:bg-red-600 focus:shadow-md focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"></svg>
            </a>
            <a class="mb-3 flex w-1/4 items-center justify-center rounded bg-blue-500 px-5 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-md focus:bg-blue-600 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-md dark:shadow-sm dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
