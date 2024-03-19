import {
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoMenu,
    IoClose,
} from 'react-icons/io5'

import { useState } from 'react'

export const Scroll = (tagname) => {
    const tag = document.getElementById(tagname)
    if (tag) {
        tag.scrollIntoView()
        if (tagname == 'contact') {
            window.scrollBy(0, 0)
        } else {
            window.scrollBy(0, -100)
        }
    }
}

const Navbar = () => {
    const [Navopen, setNavopen] = useState(false)
    function toggleNavopen() {
        setNavopen(!Navopen)
    }
    return (
        <>
            {/* TODO : FIX : Social Links */}
            {/* TODO : FIX : navbar and sidebar hover  */}
            <div className=" fixed left-0 top-0 z-20 flex w-screen items-center justify-between border-b-[1px] border-b-palewhite bg-black bg-opacity-10 text-opacity-100 shadow-md shadow-paleblue backdrop-blur-md backdrop-brightness-[0.5]">
                <div>
                    <span className="m-2 ml-5  flex-nowrap text-nowrap text-xl text-white">
                        Parveen.Dev
                    </span>
                </div>

                <div className="hidden rounded-3xl border p-2 px-4  text-white md:ml-[-10%] md:flex">
                    <ul className="flex cursor-pointer  items-center justify-between gap-8 px-2">
                        <li
                            className="hover-navitem"
                            onClick={() => {
                                Scroll('home')
                            }}
                        >
                            Home
                        </li>
                        <li
                            className="hover-navitem"
                            onClick={() => {
                                Scroll('about')
                            }}
                        >
                            About
                        </li>
                        <li
                            className="hover-navitem"
                            onClick={() => {
                                Scroll('project')
                            }}
                        >
                            Projects
                        </li>
                        <li
                            className="hover-navitem"
                            onClick={() => {
                                Scroll('contact')
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
                <div className="m-5 flex cursor-pointer sm:ml-[-10%] sm:gap-4 ">
                    <a
                        target="blank"
                        href="https://github.com/ParveenRawat/ParveenRawat/"
                    >
                        <Navlink
                            icon={<IoLogoGithub fill="#FCFBF9" size={24} />}
                        />
                    </a>
                    <a
                        target="blank"
                        href="https://www.instagram.com/parveenxpawat/"
                    >
                        <Navlink
                            icon={<IoLogoInstagram fill="#FCFBF9" size={24} />}
                        />
                    </a>
                    <a
                        target="blank"
                        href="https://www.linkedin.com/in/parveen-rawat-1b68182b/"
                    >
                        <Navlink
                            icon={<IoLogoLinkedin fill="#FCFBF9" size={24} />}
                        />
                    </a>
                </div>
                <div className="m-2 text-white md:hidden">
                    {Navopen ? (
                        <IoClose
                            className="hover:scale-110"
                            fill="white"
                            size={22}
                            onClick={() => {
                                toggleNavopen()
                            }}
                        />
                    ) : (
                        <IoMenu
                            className="hover:scale-110"
                            fill="white"
                            size={22}
                            onClick={() => {
                                toggleNavopen()
                            }}
                        />
                    )}
                </div>
            </div>
            {Navopen ? (
                <div className="fixed right-0 top-20 z-20 flex h-screen w-[60%] flex-row justify-center border-l-[1px] border-t-[1px] border-x-white bg-black bg-opacity-40 p-5  text-xl  text-white backdrop-blur-md backdrop-brightness-[0.7] md:hidden">
                    <div className="mt-[45%] flex flex-col gap-8">
                        <div
                            className=" hover-dropdown "
                            onClick={() => {
                                Scroll('home')
                                toggleNavopen()
                            }}
                        >
                            Home
                        </div>
                        <div
                            className=" hover-dropdown "
                            onClick={() => {
                                toggleNavopen()
                                Scroll('about')
                            }}
                        >
                            About
                        </div>
                        <div
                            className=" hover-dropdown "
                            onClick={() => {
                                toggleNavopen()
                                Scroll('project')
                            }}
                        >
                            Projects
                        </div>
                        <div
                            className=" hover-dropdown "
                            onClick={() => {
                                toggleNavopen()
                                Scroll('contact')
                            }}
                        >
                            Contact
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}
const Navlink = ({ icon }) => {
    return (
        <div className="duration-800 m-2 transition-all hover:scale-125">
            {icon}
        </div>
    )
}


export default Navbar