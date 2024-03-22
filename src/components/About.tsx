const About = () => {
    return (
        <>
            <div id="about" className="mt-40 flex flex-col items-center  overflow-hidden rounded-md bg-black bg-opacity-85">
                <h1 className="relative z-10 text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                    ABOUT ME
                </h1>
                <div className="relative mb-5 h-3 w-[40rem]">
                    <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                </div>

                <div className="m-5 mb-10 flex w-[90%] flex-col items-center rounded-3xl bg-gray-600 bg-opacity-10 p-2 text-white backdrop-blur lg:w-[85%] lg:flex-row lg:flex-wrap">
                    <img
                        className="m-5 w-[40%] rounded-xl border border-black text-5xl text-white lg:col-span-1 lg:col-start-1 lg:mx-[40%] lg:w-[20%]"
                        src="./assets/Photo.webp"
                        loading="lazy"
                        alt="It's Me Parveen"
                    ></img>
                    <div className="m-1 flex-wrap flex justify-center lg:mx-2 lg:flex  lg:flex-row lg:gap-2">
                        <AboutItem
                            title="👋 Introduction"
                            info="I'm Parveen Rawat, a passionate and
                                creative software developer with a keen interest
                                in building innovative solutions with 3 years of experience in Tech."
                        ></AboutItem>
                        {/* that make a difference.  */}
                        <AboutItem
                            title="🚀 Skills"
                            info="Over the years, I've honed my skills in
                                  Python, Javascript, React etc and I thrive in
                                  dynamic environments where I can leverage
                                  cutting-edge tools to tackle complex challenges."
                        ></AboutItem>
                        {/* My journey in software development began with a
                        fascination for problem-solving and a curiosity for
                        technology. */}
                        <AboutItem
                            title="💻 Knowledge"
                            info="Whether it's crafting elegant code, architecting
                                  robust systems, or collaborating with
                                  multidisciplinary teams, I bring enthusiasm and
                                  dedication to every project I undertake."
                        ></AboutItem>
                        {/* I'm driven by a relentless pursuit of delivering
                                high-quality solutions that exceed expectations. */}
                        <AboutItem
                            title="🌟 Beyond Coding"
                            info="I'm deeply passionate about
                            continuous learning and staying ahead of emerging
                            trends in the ever-evolving techlandscape."
                        ></AboutItem>
                        {/* I believe in the power of
                                collaboration and enjoy sharing my knowledge and
                                expertise with others through mentorship,
                            workshops, and community engagement initiatives. */}
                        <AboutItem
                            title="🌍 Hobbies"
                            info="Outside the realm of ones and zeroes, you can
                            find me exploring the great outdoors, indulging in a
                            good book, or playing football or table tennis."
                        ></AboutItem>
                        {/* I firmly believe in maintaining a
                            healthy work-life balance and finding
                            inspiration in life's simple pleasures. */}
                        <AboutItem
                            title="🤝 Communication"
                            info="I'm always eager to connect with like-minded
                            individuals, discuss exciting opportunities, or
                            embark on new adventures in the world of technology."
                        ></AboutItem>
                        {/* Feel free to reach out, and let's
                                build something incredible together! */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

const AboutItem: React.FC<{
    title: string
    info: string
}> = ({ title, info }) => {
    return (
        <>
            <div className="about-item w-full sm:w-60 md:w-80 lg:h-80 lg:w-56  ">
                <p className="justify-item-center mb-2 text-center text-xl font-semibold lg:my-3 lg:mb-5 lg:text-xl">
                    {title} 
                </p>
                <p className="m-3 lg:m-5">{info}</p>
            </div>
        </>
    )
}
