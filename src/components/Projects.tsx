const Projects = () => {
    return (
        <div id="project" className="bg-black">
            <div className=" flex flex-col items-center justify-center overflow-hidden rounded-md bg-black bg-opacity-85">
                <h1 className="relative z-10 text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                    PROJECTS
                </h1>
                <div className="relative h-3 w-[40rem]">
                    <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                </div>
            </div>
            <div className="m-2 mb-0 mt-10 grid grid-cols-1 grid-rows-4 justify-items-center lg:m-10 lg:grid-cols-2 lg:grid-rows-2 lg:gap-1">
                <ProjectItem
                    title="Email Spam Detector"
                    info="Created an email spam detector that detects spam
                            with 95%+ accuracy. It uses machine learning
                            algorithms such as Naive Bayes Classification
                            algorithm and Natural Language Processing to find
                            sentiment of the text with advanced techniques such
                            as lemmatization."
                    head="src/assets/Email.png"
                    tech={[
                        'src/assets/Python.png',
                        'src/assets/SciKitLearn.png',
                        'src/assets/JupyterNotebook.png',
                    ]}
                    link="https://github.com/ParveenRawat/MachineLearning/blob/main/emailclassificationwithNB.ipynb"
                />
                <ProjectItem
                    title="Under Progress"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Ad blanditiis ut similique. Eaque dolorem corporis
                          voluptate ab repellendus reiciendis voluptatibus. Odit
                           ab obcaecati error, eos deserunt praesentium vero quasi 
                           deleniti."
                    head="src/assets/Cog.png"
                    tech={[
                        'src/assets/Cog.png',
                        'src/assets/Cog.png',
                        'src/assets/Cog.png',
                    ]}
                    link="https://www.google.com/"
                />
                <ProjectItem
                    title="Under Progress"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Ad blanditiis ut similique. Eaque dolorem corporis
                          voluptate ab repellendus reiciendis voluptatibus. Odit
                           ab obcaecati error, eos deserunt praesentium vero quasi 
                           deleniti."
                    head="src/assets/Cog.png"
                    tech={[
                        'src/assets/Cog.png',
                        'src/assets/Cog.png',
                        'src/assets/Cog.png',
                    ]}
                    link="https://www.google.com/"
                />
                <ProjectItem
                    title="Under Progress"
                    info="Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ad blanditiis ut similique. Eaque dolorem corporis
                    voluptate ab repellendus reiciendis voluptatibus. Odit
                    ab obcaecati error, eos deserunt praesentium vero quasi 
                    deleniti."
                    head="src/assets/Cog.png"
                    tech={[
                        'src/assets/Cog.png',
                        'src/assets/Cog.png',
                        'src/assets/Cog.png',
                    ]}
                    link="https://www.google.com/"
                />
            </div>
        </div>
    )
}

export default Projects

const ProjectItem: React.FC<{
    title: string
    info: string
    head: string
    tech: Array<string>
    link: string
}> = ({ title, info, head, tech, link }) => {
    return (
        <>
            <div className="m-2 rounded-3xl border-2 border-paleblue bg-gray-600 bg-opacity-10 p-2 backdrop-blur">
                <div className="grid-row-2 grid grid-cols-2 place-items-center justify-items-center sm:grid-cols-3 ">
                    <h1 className="col-span-2 mb-4 pt-4 text-center text-2xl sm:text-4xl font-semibold text-white sm:col-span-3">
                        {title}
                    </h1>
                    <img
                        src={head}
                        alt="project.jpg"
                        className="col-span-2 w-[50] rounded-2xl border-2 border-palewhite sm:col-span-1 sm:row-span-1 sm:w-[80%]"
                    ></img>
                    <p className="col-span-2 m-1 p-5 text-center text-white">
                        {info}
                    </p>
                    <p className="col-span-3 p-2  text-xl font-semibold text-white">
                        Technologies Used
                    </p>
                    {/* TODO UPDATE TO FOR LOOP */}
                    <div className="col-span-3 flex h-28 justify-center p-3">
                        <img
                            src={tech[0]}
                            alt="image-1"
                            className="align-left  w-22 rounded-full border-[1px] border-palegreen "
                        ></img>
                        <img
                            src={tech[1]}
                            alt="image-2"
                            className="align-left ml-[-5%] w-[85px] rounded-full border-[1px] border-palegreen "
                        ></img>
                        <img
                            src={tech[2]}
                            alt="image-3"
                            className="align-left ml-[-5%] w-[85px] rounded-full border-[1px] border-palegreen "
                        ></img>
                    </div>
                    <div className="sm:col-span-1 col-span-2 my-2 items-center text-blue-500 sm:col-start-2 lg:col-start-2">
                        <a href={link} title={link} target="blank">
                            <button className=" group relative inline-block cursor-pointer rounded-lg bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900">
                                <span className=" absolute inset-0 overflow-hidden rounded-lg">
                                    <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                </span>
                                <div className="relative z-10 flex h-8 items-center space-x-2 rounded-lg bg-zinc-950 px-4 py-0.5 text-lg ring-1 ring-white/10 ">
                                    <span className="mx-5 font-normal">{`Visit`}</span>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
