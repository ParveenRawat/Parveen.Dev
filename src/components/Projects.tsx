const Projects = () => {
    return (
        <div className="h-screen">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-md bg-black">
                <h1 className="relative z-20 text-center text-3xl font-bold text-white md:text-7xl lg:text-9xl">
                    PROJECTS
                </h1>
                <div className="relative h-40 w-[40rem]">
                    <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                </div>
            </div>
        </div>
    )
}

export default Projects
