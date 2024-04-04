"use client";
import * as React from "react";
import "../style.scss";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import {
  IconCall,
  IconMap,
  IconMapRound,
  IconStar,
  IconstoreCardNext,
  Iconwhatsup,
} from "../Icons";
import Link from "next/link";
export const StoreCard = () => {
  return (
    <div className="grid xm:grid-cols-1 mm:grid-cols-1 ml:grid-cols-1 sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 gap-2">
      <Card className="ps-1 Storecard p-0">
        <CardHeader className="pb-0 pt-0 ps-2 flex-col items-start overflow-visible  relative ">
          <p className="p-0  mt-1 font-semibold text-base TextMaincolor">
            Corse Heading React JS
          </p>
          <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
            25% Off
          </span>
        </CardHeader>
        <CardBody className="overflow-visible pt-2 pb-3.5 ps-2 pe-2  ">
          <div className="grid grid-cols-12">
            <div className="col-span-5">
              <Button
                className=" h-[112px] p-0 m-0"
                href="/Pages/Store"
                as={Link}
              >
                <Image
                  shadow="md"
                  width="100%"
                  radius="lg"
                  className="w-full object-cover h-[112px]"
                  alt="Card background"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                />
              </Button>
            </div>
            <div className="col-span-7 ps-3">
              <h2 className="font-medium mt-1 text-sm TextMaincolor">
                Duration :
                <span className="font-normal ps-0.5 mt-1 text-sm ">
                  3.13 <span>hourse</span>
                </span>
              </h2>
              <h2 className="font-medium mt-1.5 text-sm TextMaincolor">
                Session :
                <span className="font-normal ps-0.5 mt-1 text-sm">23</span>
              </h2>
              <div className="flex items-center mt-1.5">
                <p className="mt-1 ">
                  <IconStar fill="#FF9900" />
                </p>
                <p className="font-normal text-sm mt-1 ps-2 StortimingColor">
                  4.3
                </p>
              </div>
              <div className="flex flex-row mt-1">
                <div className="flex  justify-between basis-9/12  items-center">
                  <p className="cursor-pointer pe-1">
                    <Iconwhatsup fill="#6942CB" />
                  </p>
                  <Button
                    className="bgnone p-0 m-0"
                    radius="full"
                    isIconOnly
                    size="sm"
                  >
                    <IconCall fill="#6942CB" />
                  </Button>
                  <Button
                    className="bgnone p-0 m-0"
                    radius="full"
                    isIconOnly
                    size="sm"
                  >
                    <IconMap fill="#6942CB" />
                  </Button>
                  <Button
                    className="bgnone p-0 m-0"
                    radius="full"
                    isIconOnly
                    size="sm"
                  >
                    <IconMapRound fill="#6942CB" />
                  </Button>
                </div>

                <div className="mt-0 basis-3/12 justify-end flex pe-0">
                  <div className="iconbox flex items-center justify-center cursor-pointer">
                    <Link href="/Pages/Store">
                      <Button
                        radius="full"
                        isIconOnly
                        size="sm"
                        className="iconbox"
                      >
                        <IconstoreCardNext fill="#6942CB" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="p-0 m-0">
          <div className="w-full px-2.5  pb-3 flex">
            <div className="font-normal text-sm  TextMaincolor w-6/12">
              Lessons : 6
            </div>
            <div className="font-normal text-sm  TextMaincolor w-6/12 justify-end flex">
              Price : Rs 1500
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default StoreCard;
