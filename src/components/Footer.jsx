import { Link } from "react-router-dom";
import { FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-custom-beige font-sans text-orange-500 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="hover:bg-sunset-orange rounded-3xl">
                            <div className="text-xs sm:text-3xl text-orange-500 ">
                                Gym Bro
                            </div>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-3 sm:text-lg text-sm text-orange-500">
                        <div>
                            <h2 className="mb-4 font-semibold font-serif uppercase">
                                Resources
                            </h2>
                            <ul className="font-medium font-sans text-orange-400">
                                <li className="mb-3">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold font-serif text-orange-500 uppercase">
                                Follow us
                            </h2>
                            <ul className="font-medium font-sans text-orange-400">
                                <li className="mb-3">
                                    <a
                                        href="https://github.com"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/discord" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 font-semibold font-serif text-orange-500 uppercase">
                                Legal
                            </h2>
                            <ul className="font-medium font-sans text-orange-400">
                                <li className="mb-3">
                                    <Link to="/privacy-policy" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-conditions" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex mt-4 text-orange-500 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                            <FaFacebook className="w-6 h-6" />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                            <FaDiscord className="w-6 h-6" />
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                            <FaGithub className="w-6 h-6" />
                            <span className="sr-only">Github profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
