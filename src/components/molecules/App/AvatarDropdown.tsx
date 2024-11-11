"use client";

import Avatar from "@/components/atoms/App/Avatar";
import Dropdown from "@/components/molecules/Dropdown";

import { Option } from "@/types/global";

const options: Option[] = [
  { title: "Profile", action: () => {} },
  { title: "Log in", action: () => {} },
];

const AvatarDropdown = () => {
  return (
    <Dropdown options={options}>
      <Avatar />
    </Dropdown>
  );
};

export default AvatarDropdown;
