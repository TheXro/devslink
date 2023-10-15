import React from "react";

const Login = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-800 dark:text-white text-gray-900 w-[100vw]'>
        <div className='flex items-center justify-center m-8'>
          <img
            src='./logo.svg'
            alt='logo'
            className='p-2'
            width={50}
            height={50}
          />
          <span className='text-4xl font-[600] tracking-wide '>devlinks</span>
        </div>
        <div className='border-2 rounded-lg border-slate-500 p-8 m-8'>
          <div className='loginWrapper text-left '>
            <h1 className='text-2xl font-bold mb-3'>Login</h1>
            <span className=' text-slate-400 '>
              Add your details below to get back into the app
            </span>
          </div>
          <div className='formWrapper'>
            <form>
              <div className='text-left'>
                <div className='mt-8 mb-2 text-[14px]'>Email address</div>
                <div className=''>
                  <div className='flex gap-3 p-3 ease-in-out relative'>
                    <img src='./images/icon-email.svg' alt='' className="absolute " />
                    <input
                      type='email'
                      className="pl-8 pr-16 py-2 border outline-none w-[80%] bg-transparent   focus:border-indigo-600   "
                      required
                      placeholder='e.g. thexro@gmail.com'
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
