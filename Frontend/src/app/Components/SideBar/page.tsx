import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Image,
  Switch,
  cn,
} from "@nextui-org/react";
import Link from "next/link";
import * as React from "react";
import { IconHome } from "../Icons";

export const SideNavbar = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [mobileExpand, setMobileExpand] = React.useState(false);
  const itemClasses = {
    title: "font-normal text-sm text-black ms-1",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  const mneuItems = [
    {
      menuType: "single",
      name: "one",
      isToggle: true,
      key: "forme",
      link: "/",
      icons: <IconHome />,
    },
    {
      menuType: "single",
      name: "Two",
      isToggle: true,
      key: "forme",
      link: "/",
      icons: <IconHome />,
    },
    {
      menuType: "single",
      name: "Three",
      isToggle: true,
      key: "forme",
      link: "/",
      icons: <IconHome />,
    },
    {
      menuType: "single",
      name: "Foure",
      isToggle: true,
      key: "forme",
      link: "/",
      icons: <IconHome />,
    },
    {
      menuType: "multiple",
      name: "Five",
      isToggle: true,
      key: "forme",

      icons: <IconHome />,
      menuItems: [
        {
          menuType: "single",
          name: "For me",
          isToggle: true,
          key: "forme",
          link: "/",
          icons: <IconHome />,
        },
        {
          menuType: "single",
          name: "For me",
          isToggle: true,
          key: "forme",
          link: "/",
          icons: <IconHome />,
        },
        {
          menuType: "single",
          name: "For me",
          isToggle: true,
          key: "forme",
          link: "/",
          icons: <IconHome />,
        },
      ],
    },
    {
      menuType: "single",
      name: "six",
      isToggle: true,
      key: "forme",
      link: "/",
      icons: <IconHome />,
    },
  ];

  return (
    <>
      <div className="md:hidden">
        <Button
          isIconOnly
          color="primary"
          className="bg-white absolute md:hidden top-[32px] z-10 left-[-7px]"
          aria-label="Take a photo"
          onClick={() => setMobileExpand((prev) => !prev)}
        >
          <IconHome height="14px" width="14px" />
        </Button>
      </div>
      <div
        className={`navBarStyle xm:absolute xm:z-10 md:relative md:left-0 ${
          mobileExpand ? "xm:left-[0%]" : "xm:left-[-100%]"
        } ${menuToggle ? "min-w-[150px]" : "min-w-[250px]"}`}
      >
        <Link
          href="#"
          className="flex items-center justify-between px-4 border-b-2 border-b-white text-gray-900 dark:text-white group logoCls"
        >
          {/* <span className="">Logo</span>{" "} */}
          <div>
            <Card className="p-0 m-0">
              <Image
                alt="Woman listing to music"
                className="object-cover  max-h-[40px] min-w-[140px]"
                height={30}
                width={140}
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              />
              {/* <CardHeader className="p-0 m-0"></CardHeader> */}
              <CardBody className="p-0 m-0">
                {/* <Image
                  isZoomed
                  alt="Here no Image"
                  className="w-full object-cover max-h-[40px] min-w-[140px]"
                  src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                  // height={30}
                  // width={140}
                /> */}
              </CardBody>
            </Card>
          </div>
          {mobileExpand ? (
            <span onClick={() => setMobileExpand((prev) => !prev)}>
              <IconHome />
            </span>
          ) : (
            <span onClick={() => setMenuToggle((prev) => !prev)}>
              <IconHome />
            </span>
          )}
        </Link>
        <aside id="default-sidebar" className="h-[84vh]" aria-label="Sidebar">
          <div className="h-full px-3 pb-4 pt-0 overflow-y-auto custom-scrollbar">
            <div className="scroll-content h-fit left-0 top-0 transition-transform z-40">
              <ul role="list" className="space-y-2 font-medium list-disc">
                {mneuItems?.map((result) =>
                  result?.menuType === "single" ? (
                    <li className="bg-white rounded-xl">
                      <Link
                        href="#"
                        className="mt-7 p-3 text-sm flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <div className="flex justify-between w-full items-center">
                          {menuToggle ? (
                            <span>
                              <IconHome />
                            </span>
                          ) : (
                            <p>For Me</p>
                          )}
                          <Switch
                            color="secondary"
                            // size="lg"
                            defaultSelected
                            classNames={{
                              wrapper: "p-0 h-5 w-9 overflow-visible",
                              thumb: cn(
                                "w-4 h-4 border-2 shadow-lg",
                                "group-data-[hover=true]:border-secondary",
                                //selected
                                "group-data-[selected=true]:ml-4  bg-secondary",

                                // pressed
                                "group-data-[pressed=true]:w-7",
                                "group-data-[selected]:group-data-[pressed]:ml-4"
                              ),
                            }}
                            aria-label="Automatic updates"
                          />
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li
                      className="rounded-xl hover:bg-gray-100"
                      style={{ backgroundColor: "var(--secondary-500)" }}
                    >
                      <Accordion
                        itemClasses={itemClasses}
                        className="customAccordion"
                      >
                        <AccordionItem
                          key="2"
                          aria-label="Accordion 1"
                          title={
                            <div className="flex justify-between">
                              {menuToggle ? (
                                <span>
                                  <IconHome />
                                </span>
                              ) : (
                                <p>For Me</p>
                              )}
                              <p className="rounded-full bg-secondary text-secondary border-1 px-1 py-0 leading-4 text-xs">
                                3
                              </p>
                            </div>
                          }
                          className="text-black"
                        >
                          <ul className="list-disc pl-10">
                            {result?.menuItems.map((subMenu) => (
                              <li className="flex justify-between pb-2.5">
                                <div>Grocery</div>
                                <Checkbox
                                  className="m-0 p-0"
                                  defaultSelected
                                  size="md"
                                  color="success"
                                ></Checkbox>
                              </li>
                            ))}
                          </ul>
                        </AccordionItem>
                      </Accordion>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
