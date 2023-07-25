import React from "react";
import Image from "next/image";

export default function UserInfo({ form }) {
  return (
    <div>
      <div>
        <p className="text-labelRed m-0">Name</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{form.fullName}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Email</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{form.email}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Birthdate</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">
          {form.birthdate}
        </p>
      </div>
      <h1 className="mt-5 mb-2">Important data</h1>
      <hr className="border-black" />
      <div>
        <p className="text-labelRed m-0">Phone Number</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{form.phone}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Country</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{form.country}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Address</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{form.address}</p>
      </div>
      {/* <Image  alt="front" />
      <Image alt="back" /> */}
    </div>
  );
}
