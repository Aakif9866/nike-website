import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

// for sign up button we can add functionality by using modal from flowbite IG

function Nav() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const onCloseModal = () => {
    setOpenModal(false);
    setEmail("");
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt=""
            width={130}
            height={29}
            className="m-0 w-[120px] h-[29px]"
          />
        </a>

        {/* max-lg : when less than 1024 px -> hidden 
        for the hamburger when less than 1024 px -> block (normally hidden)*/}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {/* for immediate return use parenthesis  */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-grey dark:text-green-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 dark:text-white">
          <button onClick={() => setOpenModal(true)}>Sign in</button>
          <Modal
            show={openModal}
            size="md"
            onClose={onCloseModal}
            popup
            className="z-40"
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button className="bg-[#ff6452]">
                    Log in to your account
                  </Button>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a
                    href="#"
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                  >
                    Create account
                  </a>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
