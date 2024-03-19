import { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState('Submitted ')
    const [isVisible, setVisible] = useState(true)

    const handleChange = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault()
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault()
        setVisible(true)
        setResult('Sending....')
        const formData = new FormData(event.target)

        formData.append('access_key', 'd7e7e2c8-1e91-4b89-981d-c78be10fbbba')

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            setResult('Submitted 👍')
            const timer = setTimeout(() => {
                setVisible(false)
                setResult('')
            }, 3000)
            event.target.reset()
            return () => clearTimeout(timer)
        } else {
            setResult('Failed ❌')
            const timer = setTimeout(() => {
                setVisible(false)
                setResult('')
            }, 3000)
            event.target.reset()
            return () => clearTimeout(timer)
        }
    }
    return (
        <>
            <div
                id="contact"
                className="mt-20 flex flex-col items-center overflow-hidden  rounded-md bg-black bg-opacity-85 text-white backdrop-blur-md"
            >
                <h1 className="relative z-10 text-center text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                    CONTACT ME
                </h1>
                <div className="relative mb-5 h-3 w-[40rem]">
                    <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                    <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                </div>

                <div className="m-4 h-[60vh] w-[90%] rounded-3xl bg-gray-600 bg-opacity-10 p-2 pt-3 backdrop-blur-md lg:w-[60%] ">
                    <form
                        onSubmit={onSubmit}
                        id="form"
                        className="m-5 my-2 grid grid-cols-2 grid-rows-9 gap-4 sm:gap-2"
                    >
                        <p className="col-span-2 pt-2">Name</p>
                        <input
                            type="text"
                            onKeyDown={(event) => {
                                handleChange(event)
                            }}
                            name="name"
                            className="input-contact col-span-2 h-8  "
                        ></input>
                        <p className="col-span-2 pt-2">Email</p>
                        <input
                            onKeyDown={(event) => {
                                handleChange(event)
                            }}
                            type="text"
                            name="email"
                            className="input-contact col-span-2 h-8"
                        ></input>
                        <p className="col-span-2 pt-2">Feedback or Comments</p>
                        <textarea
                            name="message"
                            className="input-contact col-span-2  row-span-2 resize-none pt-2 sm:row-span-3"
                        ></textarea>
                        <button
                            type="submit"
                            className="group relative inset-y-2 col-span-1  inline-block w-40 cursor-pointer justify-center rounded-lg bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900"
                        >
                            <span className=" absolute inset-0 overflow-hidden rounded-lg">
                                <span className="absolute inset-0 rounded-lg bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                            </span>
                            <div className="relative z-10 flex h-8 items-center space-x-2 rounded-lg bg-zinc-950 px-4 py-0.5 text-lg ring-1 ring-white/10 ">
                                <span className="px-8 font-normal">{`Submit`}</span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </button>
                        {isVisible ? (
                            result != 'Failed ❌' ? (
                                <div className=" flex translate-y-2 justify-center rounded-md border border-gray-700 bg-black transition-transform">
                                    <p className="p-1 text-green-500 ">
                                        {result}
                                    </p>
                                </div>
                            ) : (
                                <div className=" flex translate-y-2 justify-center rounded-md border border-gray-700 bg-black">
                                    <p className="p-1 text-red-500 ">
                                        {result}
                                    </p>
                                </div>
                            )
                        ) : (
                            <p></p>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
