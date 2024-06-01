import { useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { SlSizeActual } from "react-icons/sl";
import { myContext } from "../App";
import { Button, Checkbox, Divider, Form, Input, Modal, Popover } from "antd";
import { FiUserPlus } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const [form] = Form.useForm();
  const [signInModal, setSignInModal] = useState(false);

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const { showSidebar, setShowSidebar } = useContext(myContext);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold mt-3">
        <div className="flex items-center gap-2">
          {!showSidebar && (
            <button
              className="mr-3"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <HiOutlineMenu size={25} />
            </button>
          )}

          {location.pathname !== "/" && (
            <img
              onClick={() => navigate("/")}
              src={assets.arrow_left}
              alt="None"
              className="w-8 bg-black p-2 rounded-2xl cursor-pointer "
            />
          )}

          {location.pathname == "/" && (
            <>
              <img src={assets.spotify_logo} alt="None" className="w-10 mr-2" />
              <p>Spotify</p>
            </>
          )}
        </div>

        <div className="flex items-center gap-4 will-change-scroll">
          <p className="bg-white text-black text-[15px] px-4 py-2 rounded-2xl hidden md:block cursor-pointer">
            Explore Permium
          </p>

          <button
            className="bg-black py-2 px-4 rounded-2xl text-[15px]"
            onClick={() => setSignInModal(true)}
          >
            Sign in{" "}
          </button>

          <Popover
            placement="bottomRight"
            content={
              <div className="bg-gray-50-100 md:w-[300px] flex items-center flex-col p-4">
                <div className="flex justify-center">
                  <p className="bg-green-700 p-10 rounded-full text-2xl text-white w-10 h-10 flex items-center justify-center mb-3">
                    D
                  </p>
                </div>
                <p className="text-xl font-semibold">Person Name</p>
                <p className="mb-4">personName@gmail.com</p>

                <button className="p-2 px-4 border rounded-full mb-2 hover:bg-gray-100 transition duration-200">
                  Manage your spotify Account
                </button>

                <div className="border-t border-b !w-full text-center m-3 p-3 flex items-center justify-center gap-5">
                  <FiUserPlus size={20} />
                  Add another account
                </div>

                <div className="border-b p-1 w-full flex justify-center">
                  <button className="p-2 px-4 border rounded-md mb-3 hover:bg-gray-100 transition duration-200">
                    Sign out
                  </button>
                </div>

                <p className="text-center !text-[12px] p-3">
                  Privacy Policy - Terms of Service
                </p>
              </div>
            }
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <button
              onClick={() => setOpen(!open)}
              className="bg-green-700 text-white w-7 h-7 rounded-full flex items-center justify-center"
            >
              D
            </button>
          </Popover>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      </div>

      <Modal
        open={signInModal}
        width={400}
        closeIcon={false}
        footer={null}
        onCancel={() => {
          setSignInModal(false);
          form.resetFields();
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-green-700">
            <BiWorld size={30} />
          </div>

          <div>
            <p className="text-2xl mt-4 font-semibold text-center">
              Welcome back
            </p>
            <p className="text-sm text-center">
              Please enter your detais to sign in
            </p>
          </div>

          <div className="w-full flex gap-3 mt-8 mb-3">
            <div className="border w-1/3 flex justify-center p-3 rounded-lg shadow-lg hover:bg-slate-100 duration-200">
              <FaFacebookF size={25} />
            </div>
            <div className="border w-1/3 flex justify-center p-3 rounded-lg shadow-lg hover:bg-slate-100 duration-200">
              <FaApple size={25} />
            </div>
            <div className="border w-1/3 flex justify-center p-3 rounded-lg shadow-lg hover:bg-slate-100 duration-200">
              <FcGoogle size={25} />
            </div>
          </div>

          <Divider>Or</Divider>

          <Form form={form} className="w-full">
            <Form.Item
              labelCol={{ span: 24 }}
              label="Email adresse"
              name="Email adresse"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email"
                className="!border-green-600 p-2"
              />
            </Form.Item>

            <Form.Item
              labelCol={{ span: 24 }}
              extra={
                <div className="flex justify-between mt-3">
                  <div className="text-[10px]">
                    <Checkbox>Remember for 30 days</Checkbox>
                  </div>
                  <p className="text-green-700 font-semibold">
                    Forgot password?
                  </p>
                </div>
              }
              label={"password"}
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Enter your password"
                className="p-2 border !border-green-600 "
              />
            </Form.Item>

            <Form.Item>
              <button className="w-full bg-green-700 !text-white border-none hover:bg-green-800 mb-3 py-2 rounded-lg duration-100">
                Sign in
              </button>
              {/* <Button
                htmlType
                size="large"
                className=" w-full bg-green-700 !text-white border-none hover:bg-green-800"
              >
                Sign in
              </Button> */}
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
