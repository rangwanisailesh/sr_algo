export const LoginComp = () => {
    return (
        <div className="p-5 lg:p-10 bg-gray-700 flex justify-center items-center m-auto w-full h-[100vh]">
            <div className="rounded-lg bg-black p-5 shadow-lg">
                <div className="text-white flex justify-center mx-auto text-center font-semibold text-3xl">
                    Sign In
                </div>

                <form className="mt-4 grid grid-cols-1 gap-4">
                    <input
                        className="p-2 bg-gray-700 rounded-lg text-white border"
                        placeholder="Email"
                        type="email"
                    />
                    <input
                        className="p-2 bg-gray-700 rounded-lg text-white border"
                        placeholder="Password"
                        type="password"
                    />
                    <button className="bg-white text-black flex justify-center mx-auto px-5 py-2 rounded-lg">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}