import { SparklesCore } from './ui/sparkles'

const hero = () => {
    return (
        <>
            <div className="relative flex h-[40rem] w-full flex-col justify-center overflow-hidden rounded-md bg-black">
                <div className="absolute inset-0 h-screen w-full">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={50}
                        className="h-full w-full"
                        particleColor="#FFFFFF"
                    />
                </div>
                <h1 className=" text-center text-5xl font-bold text-white md:text-7xl lg:text-6xl">
                    Hello There!👋
                    <h2 className="mt-5 text-xl font-normal">
                        I am Parveen Rawat, an aspiring developer based in
                        India.
                    </h2>
                    <h2 className="mt-5 text-xl font-normal">
                        I like programming and game-development.
                    </h2>
                </h1>
            </div>
        </>
    )
}

export default hero
