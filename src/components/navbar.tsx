import {
    IoLogoGithub,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoMenu,
    IoClose,
} from 'react-icons/io5'

import { useState } from 'react'
const Navbar = () => {
    const [Navopen, setNavopen] = useState(false)
    function toggleNavopen(Navopen: boolean) {
        setNavopen(!Navopen)
    }
    return (
        <>
            <div className="flex shadow-md border-b-[1px] border-b-palewhite shadow-paleblue items-center justify-between bg-black">
                <div>
                    <span className="m-2 ml-5 flex-nowrap text-nowrap text-xl text-white">
                        Parveen Rawat
                    </span>
                </div>

                <div className="hidden rounded-3xl border p-2 px-4 text-white md:ml-[-10%] md:flex">
                    <ul className="flex  cursor-pointer items-center justify-between gap-8">
                        <li className="hover-navitem">Home</li>
                        <li className="hover-navitem">About</li>
                        <li className="hover-navitem">Projects</li>
                        <li className="hover-navitem">Contact</li>
                    </ul>
                </div>
                <div className="m-5 flex cursor-pointer sm:ml-[-10%] sm:gap-4 ">
                    <Navlink icon={<IoLogoGithub fill="#FCFBF9" size={24} />} />
                    <Navlink
                        icon={<IoLogoInstagram fill="#FCFBF9" size={24} />}
                    />
                    <Navlink
                        icon={<IoLogoLinkedin fill="#FCFBF9" size={24} />}
                    />
                </div>
                <div className="m-2 text-white md:hidden">
                    {Navopen ? (
                        <IoClose
                            className="hover:scale-110"
                            fill="white"
                            size={22}
                            onClick={() => {
                                toggleNavopen(Navopen)
                            }}
                        />
                    ) : (
                        <IoMenu
                            className="hover:scale-110"
                            fill="white"
                            size={22}
                            onClick={() => {
                                toggleNavopen(Navopen)
                            }}
                        />
                    )}
                </div>
            </div>
            {Navopen ? (
                <div className="flex flex-row justify-center gap-4 border-t-[1px] border-b-[1px] border-x-white bg-black p-5 text-white">
                    <div className="m-1">
                        <div className="m-2 hover-dropdown"><span>Home</span></div>
                        <div className="m-2 hover-dropdown">About</div>
                        <div className="m-2 hover-dropdown">Projects</div>
                        <div className="m-2 hover-dropdown">Contact</div>
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
