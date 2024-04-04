import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Image,
  Link,
} from "@nextui-org/react";
import React from "react";
import {
  IconHeart,
  IconLocation,
  IconMapRound,
  IconNxt,
  IconPrv,
  IconShare,
  IconStar,
  IconTick,
} from "../Icons";
import { BuyCard } from "../Card/BuyCard";
import { log } from "console";

export const ProductDetail = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        size={"5xl"}
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement="bottom"
        scrollBehavior="inside"
        backdrop="opaque"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody className="py-2">
                {/* <div className="grid xm:grid-cols-2 mm:grid-cols-2  sm:grid-cols-2 ml:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 gap-1"> */}
                <div className="w-full flex">
                  <div className=" w-4/12 me-3">
                    <Card
                      onClick={() => console.log("sdgj")}
                      isHoverable
                      // onClick={() => console.log("clicked")}
                      className="p-2 bg-default/40 "
                    >
                      <CardBody className="p-0">
                        <div className="w-full">
                          <Image
                            // width={330}
                            className="object-cover rounded-xl md:h-[166px] md:w-[320px] w-full "
                            src="https://app.requestly.io/delay/1000/https://nextui.org/images/hero-card-complete.jpeg"
                          />
                        </div>
                      </CardBody>
                      {/* <div className="sm:px-2 xl:col-span-1 lg:col-span-1 md:order-2 xm:order-3 mm:order-3 ml:order-3 md:col-span-2 xm:col-span-2 mm:col-span-2 ml:col-span-2 "></div> */}
                    </Card>

                    <div className="mt-2">
                      <div>
                        <p className="text-base font-bold truncate ">
                          React - The Complete Guide 2024 (incl. React Router &
                          Redux) , JavaScript , HTML , CSS
                        </p>

                        <p className="text-sm font-normal mt-1 ">
                          Fronend Development Certification
                        </p>
                        <div className="flex items-center mt-1 ">
                          <Button
                            // isDisabled={true}
                            // isIconOnly
                            radius="none"
                            size="sm"
                            color="warning"
                            className="p-0 m-0 h-unit-6"
                          >
                            Best
                          </Button>

                          <div className="textColortimingColor text-sm font-normal ms-2 flex">
                            <p className="flex">4:2</p>
                            <p className="mt-0.5 mx-1">
                              <IconStar fill="#FF9900" />
                            </p>
                            <p>
                              (
                              <Link className="p-0 m-0" href="#" size="sm">
                                33 ratigns
                              </Link>
                              )246 Students
                            </p>
                          </div>
                        </div>
                        <div className="textColortimingColor flex items-center mt-1">
                          <div className=" my-1 text-sm font-normal">
                            Total Lesson's :
                          </div>
                          <div className="ms-1 text-sm font-normal">23</div>
                        </div>
                        <div className="textColortimingColor flex items-center lg:text-sm">
                          <div className=" xl:text-xs lg:text-sm mm:text-sm ml:text-sm xm:text-xs xm:font-normal mm:font-normal">
                            Last updated :
                          </div>
                          <div className="ms-1 xm:text-xs xm:font-normal">
                            02/2024
                          </div>
                          <div className="ms-2 xm:text-xs xm:font-normal">
                            <IconMapRound
                              fill="#000"
                              width="20"
                              height="22"
                              className="cursor-pointer ml:h-[16px] ml:w-[18px] xm:h-[12px] xm:w-[16px]"
                            />
                          </div>
                          <div className="ms-1 xm:text-xs xm:font-normal">
                            Tamil , English
                          </div>
                        </div>
                      </div>
                      <div className=" flex md:mt-2 mt-4">
                        <div className="">
                          <Button
                            className="xm:h-unit-8 xm:px-4 lg:px-3 lg:h-unit-xl md:w-unit-40"
                            radius="lg"
                            size={"md"}
                            color="primary"
                            onClick={() => onOpen()}
                          >
                            Buy Course
                          </Button>
                        </div>
                        <div className="ms-11 flex">
                          <div>
                            <Button
                              size="sm"
                              isIconOnly
                              aria-label="Like"
                              color="danger"
                              variant="bordered"
                            >
                              <IconHeart fill="#FF0000" />
                            </Button>
                          </div>
                          <div className="ms-11">
                            <Button
                              size="sm"
                              color="success"
                              variant="bordered"
                              isIconOnly
                            >
                              <IconShare fill="#49A84C" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-8/12   ms-3">
                    <div className="px-3 md:h-[350px] overflow-y-auto">
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                      <Card
                        isPressable
                        className="w-full bg-slate-200  hover:bg-slate-400 mb-2 pe-2"
                      >
                        <CardBody className="p-0 m-0">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Image
                                className="object-cover rounded-xl md:w-[80px] md:h-[60px]"
                                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                                // width={100}
                              />
                              <div className="text-base font-medium ps-3">
                                React Introducktion
                              </div>
                            </div>
                            <div className="text-base font-medium"> 08.51</div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>

                {/* <GroceryCard /> */}
              </ModalBody>
              <ModalFooter className="pt-0 p-3 flex justify-between"></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <BuyCard isOpen={isOpen} onClose={onClose} />
    </>
  );
};
