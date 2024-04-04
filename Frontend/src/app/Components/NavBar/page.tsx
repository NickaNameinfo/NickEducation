import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  Select,
  SelectItem,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import * as React from "react";
import "../style.scss";
import {
  IconCall,
  IconHeart,
  IconHome,
  IconInfo,
  IconMap,
  IconNext,
  IconPrev,
  IconProfile,
  Iconwhatsup,
  NavSearchIcon,
} from "../Icons";
import { SideNavbar } from "../SideBar/page";
import { InfoCard } from "../Card/InfoCard";
import { Login } from "../Login/Login";
import Link from "next/link";
import Scrolltopnavbar from "./scrolltopnavbar";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex justify-between navBarStyle gap-4 items-center p-3">
        <div className="items-center flex justify-between w-webkit-fill-available">
          <div className="text-center">
            <Link href={"/"}>
              <Button
                isIconOnly
                color="primary"
                className="bg-white"
                aria-label="Take a photo"
              >
                <IconHome height="16px" width="16px" />
              </Button>
            </Link>
          </div>
          <div className="xm:hidden md:block w-webkit-fill-available">
            {/* <Input
              isClearable
              radius="full"
              size="sm"
              variant="underlined"
              className="ms-2"
              classNames={{
                // label: "text-white",
                input: [
                  //   "bg-transparent",
                  //   "text-white dark:text-white",
                  //   "text-white",
                  //   "placeholder:text-text-white dark:placeholder:text-",
                  // ],
                  // innerWrapper: "bg-transparent",
                  // inputWrapper: [
                  //   "shadow-xl",
                  //   "bg-blue-200",
                  //   "bg-blue-600",
                  //   "backdrop-blur-xl",
                  //   "backdrop-saturate-900",
                  "hover:bg-default-200/30",
                  //   "hover:bg-blue-600",
                  "group-data-[focused=true]:bg-blue-600",
                  //   ":group-data-[focused=true]:bg-blue-600",
                  "!cursor-text",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <NavSearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            /> */}
            <Input
              variant="flat"
              size="sm"
              className="ms-2"
              radius="full"
              classNames={{
                label: "text-black/50 dark:text-black/50",
                input: [
                  "bg-transparent",
                  "text-white dark:text-black/50",
                  "text-black/50",
                  "placeholder:text-text-black/50 dark:placeholder:black/50",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-red-600",
                  "backdrop-blur-xl",
                  // "backdrop-saturate-200",
                  // "hover:bg-default-200/30",
                  "hover:bg-black/50",
                  "group-data-[focused=true]:bg-black/50",
                  ":group-data-[focused=true]:bg-black/50",
                  "!cursor-text",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <NavSearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="md:hidden">
            <Button
              onPress={() => onOpen()}
              isIconOnly
              color="warning"
              aria-label="Like"
              className="bg-warning-900"
            >
              <NavSearchIcon />
            </Button>
          </div>
          <div>
            <Button
              onPress={() => onOpen()}
              isIconOnly
              size="md"
              color="warning"
              aria-label="Like"
              className="bg-warning-900"
            >
              <IconInfo />
            </Button>
          </div>
          <div className="ms-3">
            <Login />
          </div>
          <div className="ms-2">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="ghost"
                  radius="full"
                  color="danger"
                  size="md"
                  aria-label="Like"
                  className="font-extrabold text-xl  "
                >
                  <span className="flex justify-self-start">...</span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => alert(key)}
              >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="w-full ms-4 me-4">
          <div className="flex w-full justify-between">
            <Button
              radius="lg"
              // variant="shadow"
              isIconOnly
              aria-label="Like"
              className=" Iconwhatsup ml:min-w-unit-8 ml:w-unit-8 ml:h-unit-8 mm:min-w-unit-8 mm:w-unit-8 mm:h-unit-8 xm:min-w-unit-6 xm:w-unit-6 xm:h-unit-6"
              // size="lg"
            >
              <IconPrev
                fill="#FFFFFF"
                width="21px"
                height="18px"
                className="cursor-pointer ml:h-[16px] ml:w-[18px] xm:h-[12px] xm:w-[16px]"
              />
            </Button>

            <Button size="sm" className="font-medium text-sm">
              Preoduct{" "}
            </Button>
            <Button size="sm" className="font-medium text-sm">
              vedar
            </Button>
            <Button size="sm" className="font-medium text-sm">
              call
            </Button>
            <Button size="sm" className="font-medium text-sm">
              admin
            </Button>
            <Button size="sm" className="font-medium text-sm">
              map
            </Button>
            <Button size="sm" className="font-medium text-sm">
              Small
            </Button>
            <Button
              radius="lg"
              // variant="shadow"
              isIconOnly
              aria-label="Like"
              className=" Iconwhatsup ml:min-w-unit-8 ml:w-unit-8 ml:h-unit-8 mm:min-w-unit-8 mm:w-unit-8 mm:h-unit-8 xm:min-w-unit-6 xm:w-unit-6 xm:h-unit-6"
              // size="lg"
            >
              <IconNext
                fill="#FFFFFF"
                width="21px"
                height="18px"
                className="cursor-pointer ml:h-[16px] ml:w-[16px] xm:h-[12px] xm:w-[16px]"
              />
            </Button>
          </div>
        </div>
      </div>

      <InfoCard isOpen={isOpen} onClose={onClose} />
    </>
  );
};
