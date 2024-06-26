import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  IconCLose,
  IconForgotSVG,
  IconLogin,
  IconLoginSVG,
  IconNewPasswordSVG,
  IconOTPSVG,
  IconProfile,
  IconRegisterSVG,
} from "../Icons";
import { ForgotPassword } from "./ForgotPassword";
import { OTPPage } from "./Otp";
import { NewPassword } from "./NewPassword";
import { Register } from "./Register";

export const Login = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [isForgetPassword, setIsForgetPassword] = React.useState(false);
  const [isOTP, setIsOTP] = React.useState(false);
  const [isNewPassword, setIsNewPassword] = React.useState(false);
  const [isRegister, setIsRegister] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onCloseModal = () => {
    onClose();
    setIsForgetPassword(false);
    setIsOTP(false);
    setIsNewPassword(false);
    setIsRegister(false);
  };
  const onClickLogin = () => {
    if (isForgetPassword) {
      setIsOTP(true);
      if (isOTP) {
        setIsNewPassword(true);
      }
    }
  };
  const onClickRegister = () => {
    setIsRegister(true);
  };

  return (
    <>
      <Button
        isIconOnly
        size="md"
        color="primary"
        className="bg-primary-900"
        aria-label="Take a photo"
        onPress={onOpen}
      >
        <IconProfile />
      </Button>
      <Modal
        isDismissable={false}
        isOpen={isOpen}
        onOpenChange={onCloseModal}
        placement="top-center"
        size="xl"
      >
        <ModalContent className="p-0 m-0">
          {(onClose) => (
            <>
              <ModalHeader className="flex self-center flex-col gap-1 p-0 m-0">
                <div className="flex justify-center">
                  {isRegister ? (
                    <IconRegisterSVG width="150px" height="150px" />
                  ) : isNewPassword ? (
                    <IconNewPasswordSVG width="150px" height="150px" />
                  ) : isOTP ? (
                    <IconOTPSVG width="150px" height="150px" />
                  ) : isForgetPassword ? (
                    <IconForgotSVG width="150px" height="150px" />
                  ) : (
                    <IconLoginSVG width="150px" height="150px" />
                  )}
                </div>
                <div className="self-center font-medium text-xl mt-0">
                  {isRegister
                    ? "Register"
                    : isNewPassword
                    ? "Create New Password"
                    : isOTP
                    ? "Enter OTP"
                    : isForgetPassword
                    ? "Forgot password"
                    : "Login"}
                </div>
              </ModalHeader>
              <ModalBody className="px-3 m-0">
                {isRegister ? (
                  <Register />
                ) : isNewPassword ? (
                  <NewPassword />
                ) : isOTP ? (
                  <OTPPage />
                ) : isForgetPassword ? (
                  <ForgotPassword />
                ) : (
                  <>
                    <Input
                      classNames={{
                        input: [
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                      }}
                      isRequired
                      autoFocus
                      label="Email Address"
                      labelPlacement="inside"
                      color="primary"
                      variant="bordered"
                    />
                    <Input
                      classNames={{
                        input: [
                          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                      }}
                      isRequired
                      label="Password"
                      labelPlacement="inside"
                      color="primary"
                      variant="bordered"
                      endContent={
                        <button
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleVisibility}
                        >
                          {isVisible ? (
                            <EyeSlashFilledIcon
                              className="text-2xl text-default-400 pointer-events-none"
                              fill="#4c86f9"
                            />
                          ) : (
                            <EyeFilledIcon
                              className="text-2xl text-default-400 pointer-events-none"
                              fill="#4c86f9"
                            />
                          )}
                        </button>
                      }
                      type={isVisible ? "text" : "password"}
                      // className="w-full"
                    />

                    <div className="flex justify-between">
                      <Checkbox
                        classNames={{
                          label: "text-small",
                        }}
                      >
                        Remember me
                      </Checkbox>
                      <Link
                        className="cursor-pointer p-0 m-0"
                        color="primary"
                        onPress={() => setIsForgetPassword(true)}
                        size="sm"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </>
                )}

                <Button
                  color="primary"
                  onPress={() => onClickLogin()}
                  size="sm"
                  className="p-0 m-0"
                >
                  {isRegister
                    ? "Register"
                    : isForgetPassword
                    ? "SUBMIT"
                    : "LOGIN"}
                  <IconLogin fill="white" />
                </Button>
              </ModalBody>
              <ModalFooter className="justify-center p-0 m-0">
                <div className="flex items-center pb-2">
                  <p className="text-sm pe-2 Iconweb text-slate-500">
                    {isRegister ? "Already have a member ?" : "Not a member ?"}
                  </p>
                  <Link
                    className="cursor-pointer  p-0 m-0"
                    color="primary"
                    onPress={() => onClickRegister()}
                    size="sm"
                  >
                    {isRegister ? "Login" : "Register Now"}
                  </Link>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
