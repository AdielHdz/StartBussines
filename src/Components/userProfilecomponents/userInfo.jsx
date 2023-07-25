import React from "react";
import Image from "next/image";

export default function UserInfo({ user }) {
  return (
    <div>
      <div>
        <p className="text-labelRed m-0">Name</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{user.fullName}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Email</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{user.email}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Birthdate</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">
          {user.birthdate}
        </p>
      </div>
      <h1 className="mt-5 mb-2">Important data</h1>
      <hr className="border-black" />
      <div>
        <p className="text-labelRed m-0">Phone</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{user.phone}</p>
      </div>
      <div>
        <p className="text-labelRed m-0">Address</p>
        <p className="rounded bg-grayLight h-10 w-full pt-2">{user.address}</p>
      </div>
      {/* <Image  alt="front" />
      <Image alt="back" /> */}
    </div>
  );
}
