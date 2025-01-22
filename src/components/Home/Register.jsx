
const Register = () => {
  return (
    <div className="flex justify-center text-center mt-4 flex-col gap-2">
        <h1 className="text-xl font-bold p-2">Register and Enjoy</h1>
        <div className="flex sm:grid sm:grid-cols-2 justify-around gap-3 items-center p-3">
            <div className="pl-4 ">
                <h1>If you register</h1>
                <p>You stand to get better discounts from our black market supplies and even learn more about the various brands in the business</p>
            </div>
            <div className="bg-[#1f37a5c7] rounded-md flex flex-col justify-center items-center gap-3">
                <h1>To Sign up</h1>
                <form className="flex flex-col justify-center items-center gap-2" >
                    <div className="flex gap-2 p-2">
                        <label htmlFor="name">Enter name: </label>
                        <input className="bg-transparent border-2 border-white rounded-md p-1 " type="text" placeholder="Username" />
                    </div>
                    <div className="flex gap-2 p-2">
                        <label htmlFor="name">Enter email: </label>
                        <input className="bg-transparent border-2 border-white rounded-md p-1 " type="text" placeholder="Email" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
