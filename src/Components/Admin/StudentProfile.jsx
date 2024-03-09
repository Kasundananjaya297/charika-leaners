import React, { useState } from "react";
import RegisterNavBar from "../Admin/Common/RegisterNavBar";
import ProfileDetailsCard from "./Common/ProfileDetailsCard";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import { FetchAllStudnet } from "../ApiService/api";

export default function StudentProfile() {
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default value, you can change it

  const handleItemsPerPageChange = (selectedItemsPerPage) => {
    setItemsPerPage(selectedItemsPerPage);
    // Add any other logic you want to handle when the items per page changes
  };

  const onFetch = async () => {
    console.log("onFetch");
    const response = await FetchAllStudnet("fname", "ASC", 5, 0);
    console.log(response?.data);
  };
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
      <div className="flex bg-white h-16 items-center justify-end p-4 gap-x-4">
        <Button onClick={onFetch}>Fetch</Button>
        <div className="text-gray-400">Items per Page</div>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            {itemsPerPage}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleItemsPerPageChange(10)}>
              10
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemsPerPageChange(20)}>
              20
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemsPerPageChange(50)}>
              50
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}
