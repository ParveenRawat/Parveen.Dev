const Footer = () => {
    return (
        <>
            <div className=" grid-row-3 grid h-full w-screen grid-cols-6 place-items-center gap-x-2 overflow-ellipsis bg-zinc-800 bg-opacity-20 p-2 px-5 text-white backdrop-blur-md sm:grid-cols-7 sm:grid-rows-1 sm:gap-0 sm:p-1 sm:px-2">
                <p className="col-span-6 col-start-1 row-span-1 row-start-1 w-[100px] sm:col-span-1 sm:pl-1  lg:col-span-1">
                    ©Parveen.Dev
                </p>
                <ProjectItem
                    pic="./assets/vite.webp"
                    alt="vite.webp"
                    title="Vite"
                ></ProjectItem>
                <ProjectItem
                    pic="./assets/react.webp"
                    alt="react.webp"
                    title="React"
                ></ProjectItem>
                <ProjectItem
                    pic="./assets/typescript.webp"
                    alt="typescript.webp"
                    title="TypeScript"
                ></ProjectItem>
                <ProjectItem
                    pic="./assets/tailwindcss.webp"
                    alt="Tailwind.webp"
                    title="Tailwind"
                ></ProjectItem>
                <ProjectItem
                    pic="./assets/aceUI.webp"
                    alt="AceternityUI.webp"
                    title="AceternityUI"
                ></ProjectItem>
                <ProjectItem
                    pic="./assets/heart.webp"
                    alt="heart.webp"
                    title="Love"
                ></ProjectItem>
            </div>
        </>
    )
}
const ProjectItem: React.FC<{
    pic: string
    title: string
    alt: string
}> = ({ pic, title , alt }) => {
    return (
        <>
            <div className="  flex justify-center">
                <img
                    src={pic}
                    loading="lazy"
                    alt={alt}
                    className="h-12 rounded-xl border border-paleblue p-1 "
                ></img>
                <p className="hidden lg:m-3 lg:grid lg:w-12 ">{title}</p>
            </div>
        </>
    )
}
export default Footer
