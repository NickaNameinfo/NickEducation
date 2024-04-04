import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Divider,
  useDisclosure,
  Tooltip,
  User,
  ModalFooter,
  Button,
  ScrollShadow,
  Radio,
  RadioGroup,
  Image,
  Link,
} from "@nextui-org/react";
import React from "react";
import { IconDelete, IconStar } from "../Icons";
export const BuyCard = (props: any) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"5xl"}
        shadow="md"
        placement="bottom"
        backdrop="blur"
        scrollBehavior="inside"
      >
        <ModalContent className="">
          <>
            <ModalHeader></ModalHeader>
            <ModalBody className=" mt-1 ">
              <div className="flex">
                <div className="md:h-[350px] w-3/5 overflow-y-auto">
                  <div className="mb-2">
                    <h1 className="font-medium text-base">3 Courses in Cart</h1>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full bg-gray-100 p-1 mb-3 rounded-md ">
                    <div className="me-2">
                      <Image
                        className="object-cover rounded-md md:w-[70px] md:h-[70px]"
                        src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                        // width={100}
                      />
                    </div>
                    <div>
                      <div className=" line-clamp-2 text-sm font-semibold  md:w-[315px] me-2">
                        Six Sigma: Lean Six Sigma Black Belt Lean Six Sigma
                        Black Six Sigma: Lean Six Sigma Black Belt Lean Six
                        Sigma Black Belt
                      </div>
                      <div className="text-xs  font-medium mt-0.5">
                        By Samz Education platform
                      </div>
                      <div className="text-xs flex font-light mt-0.5">
                        <div className="text-sm font-normal">
                          3.5 total hours{" "}
                        </div>
                        <div className="textColortimingColor text-sm font-normal ms-2 flex">
                          <p className="flex">4:2</p>
                          <p className="mt-0.5 mx-1">
                            <IconStar fill="#FF9900" />
                          </p>
                          <p>
                            (
                            <Link className="p-0 m-0 text-xs" href="#" >
                              33 ratigns
                            </Link>
                            )
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mx-2">
                      <div className="text-sm font-semibold">RS : 650</div>
                      <div></div>
                    </div>
                    <div className="">
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="ont-normal"
                        >
                          Remove
                        </Link>
                      </div>
                      <div>
                        <Link
                          underline="hover"
                          href="#"
                          size="sm"
                          className="font-normal"
                        >
                          Save for Later
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/5">
                  <div className=" BuycarBg mx-3">
                    <div className="flex justify-between py-1 mx-3 font-medium text-sm m-1">
                      <div>Total Products (4 Items )</div>
                      <div> Rs : 5050</div>
                    </div>
                    <div className="flex justify-between py-1 mx-3 font-medium text-sm m-1">
                      <div>Discount</div>
                      <div> 100%</div>
                    </div>
                    <div className="flex justify-between py-1 mx-3 font-medium text-sm m-1">
                      <div>Delivery Charge</div>
                      <div> Free</div>
                    </div>
                    <Divider orientation="horizontal" className="my-3.5" />
                    <div className="flex justify-between py-1 mx-3 text-base font-medium  m-1">
                      <div>Total Amount</div>
                      <div> Rs. 3500</div>
                    </div>
                    <Divider orientation="horizontal" className="my-2" />
                    <div className="paymetoptionBg mx-3 mt-2 rounded-lg">
                      <div className="font-medium paymetoption text-base mx-3 pb-2 pt-2">
                        Payment Options
                      </div>
                      <RadioGroup className="w-full">
                        <div className="flex  justify-between items-center mx-3 w-full">
                          <div className="w-2/4 m-1 items-center">
                            <Radio
                              value=" Google-Pay "
                              size="sm"
                              className="items-center"
                            >
                              Google Pay
                            </Radio>
                          </div>
                          <div className="w-2/4 m-1 items-center">
                            <Radio
                              value="Phone-Pay"
                              size="sm"
                              className="items-center"
                            >
                              Phone Pay
                            </Radio>
                          </div>
                        </div>
                        <div className="flex  justify-between items-center mx-3 w-full">
                          <div className="w-2/4 m-1 items-center">
                            <Radio
                              value=" Debit-Card"
                              size="sm"
                              className="items-center"
                            >
                              Debit Card
                            </Radio>
                          </div>
                          <div className="w-2/4 m-1 items-center">
                            <Radio
                              value="Credit-Card"
                              size="sm"
                              className="items-center"
                            >
                              Credit Card
                            </Radio>
                          </div>
                        </div>
                        <div className="justify-between mx-3 flex w-full items-center">
                          <div className="w-2/4 m-1 items-center">
                            <Radio
                              value="Cash-on-Delivery"
                              size="sm"
                              className="items-center"
                            >
                              Cash on Delivery
                            </Radio>
                          </div>
                        </div>
                      </RadioGroup>
                      <div className="flex items-center justify-center mt-4 mb-1">
                        <Button size="sm" color="primary" className="me-5">
                          Book Order
                        </Button>
                        <Button size="sm" color="primary" variant="bordered">
                          Back To Shop
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>

      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="md"
          placement="center"
          backdrop="blur"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Delete Product
                </ModalHeader>
                <ModalBody>
                  Are you sure you want to delete this product ?
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="ghost"
                    color="default"
                    size="sm"
                    onPress={onClose}
                  >
                    Cancel
                  </Button>
                  <Button color="danger" size="sm" onPress={onClose}>
                    Delete
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </>
  );
};
