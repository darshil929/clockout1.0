import React, { useState } from 'react';
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav
                className={`bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0 dark:border-gray-600 ${isMobileMenuOpen ? 'h-auto' : ''
                    }`}
            >
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <span className="self-center lg:hidden text-white text-2xl font-bold whitespace-nowrap dark:text-white">
                        <h1>Event Name</h1>
                    </span>
                    <div className="flex gap-4 md:order-2">
                        <div className="hidden lg:block">
                            <div className='flex gap-4'>
                            <button
                            type="button"
                            className="animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-gray-50  to-blue-500 bg-[length:400%_400%] p-1"
                        >
                        <span class="block rounded-xl text-lg bg-slate-900 px-4 py-1 font-bold text-white"> Get Started </span>

                        </button>
                            </div>

                        </div>

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                // Cross Icon
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1l12 12M1 13L13 1"
                                    />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            )}
                        </button>
                        {/* End of conditional rendering */}
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMobileMenuOpen ? 'block' : 'hidden'
                            }`}
                        id="navbar-sticky"
                    >
                        <h1 className='text-xl hidden lg:block text-white'>Event Name</h1>
                    </div>
                    {/* Conditional rendering of "Log in" and "Sign up" buttons */}
                    {isMobileMenuOpen && (
                        <div className="flex w-full justify-center gap-4 mt-4 md:mt-0">
                            <button
                                type="button"
                                className="text-black bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                            Get Started
                            </button>
                        
                        </div>
                    )}
                    {/* End of conditional rendering */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;