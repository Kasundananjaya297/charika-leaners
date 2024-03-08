import React from "react";
import RegisterNavBar from "../Admin/Common/RegisterNavBar";
import ProfileDetailsCard from "./Common/ProfileDetailsCard";

export default function StudentProfile() {
  return (
    <div className="flex flex-col h-dvh mb-2">
      <div className="bg-neutral-50">
        <RegisterNavBar />
      </div>
      <div className="flex flex-col overflow-y-scroll">
        <div className="flex pl-20 mt-4 gap-x-16 pb-4">
          <ProfileDetailsCard />
          <ProfileDetailsCard />
          <ProfileDetailsCard />
        </div>
        <div className="flex pl-20 mt-4 gap-x-16 pb-4">
          <ProfileDetailsCard />
          <ProfileDetailsCard />
          <ProfileDetailsCard />
        </div>
      </div>
    </div>
  );
}
