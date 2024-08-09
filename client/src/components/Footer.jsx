import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsTwitterX} from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-green-500 via-green-300 to-blue-300 rounded-lg text-white">
                Scribble
              </span>
              Spot
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6" >
                <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                    <Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel= 'noopener noreferrer'
                    >
                    100 Js Projects
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel= 'noopener noreferrer'
                    >
                    100 Js Projects
                    </Footer.Link><Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel= 'noopener noreferrer'
                    >
                    100 Js Projects
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow Us" />
                <Footer.LinkGroup col>
                    <Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel= 'noopener noreferrer'
                    >
                    Linkdin
                    </Footer.Link>
                    <Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel= 'noopener noreferrer'
                    >
                    Githiub
                    </Footer.Link><Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel= 'noopener noreferrer'
                    >
                    100 Js Projects
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                    <Footer.Link
                    href="#"
                    >
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                    href="#"
                    >
                    Terms &amp; Contidions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright  href="#" by="Scribble Spot" year={new Date().getFullYear()}/>
        </div>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center lg:justify-end">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />  
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
