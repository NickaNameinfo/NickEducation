import * as React from "react";
import "../style.scss";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { ProductDetail } from "../Product/ProductDetail";
import { EyeFilledIcon, EyeSlashFilledIcon, IconStar } from "../Icons";

export const GroceryCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="grid xm:grid-flow-col-1 mm:grid-cols-1 ml:grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-5 gap-2">
        <Card
          isPressable
          onPress={() => onOpen()}
          className="Storecard pt-3.5 px-3 cursor-pointer"
        >
          <CardBody className="overflow-visible p-0 relative">
            <span className="bg-slate-700 z-50 absolute text-white text-xs font-medium px-2.5 py-1 rounded-ss-xl rounded-ee-xl dark:bg-gray-700 dark:text-gray-300">
              Click preview
            </span>

            <span className="bg-slate-700 z-50 right-0 absolute text-white text-xs font-medium px-2.5 py-1 rounded-se-xl rounded-es-xl dark:bg-gray-700 dark:text-gray-300">
              25% Off
            </span>
            <Image
              isZoomed
              alt="Here no Image"
              shadow="md"
              width="100%"
              radius="lg"
              className="w-full object-cover min-h-[156px]"
              src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
            />
          </CardBody>
          <CardFooter className="p-0">
            <div className="grid grid-cols-1 w-full">
              <div className="font-semibold mt-3 text-sm  TextMaincolor justify-start flex">
                <p className="truncate">C# and dot.net with real time ecaple</p>
              </div>
              <div className="font-normal text-sm mt-1  TextMaincolor justify-start flex">
                Duration: 02:44h
              </div>
              <div className="flex mt-1 items-center">
                <IconStar fill="#FF9900" />
                <div className="textColortimingColor text-sm font-normal ms-2">
                  3:6
                </div>
              </div>
              <div className="w-full flex justify-between mt-1 mb-3">
                <p className="font-normal text-sm  Pricecolor">Session : 35 </p>
                <p className="font-normal text-sm  TextMaincolor">
                  Price : 467.00
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <ProductDetail isOpen={isOpen} onClose={onClose} />
    </>
  );
};
export default GroceryCard;
