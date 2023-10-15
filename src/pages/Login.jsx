import React from "react";

const Login = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen dark:bg-gray-900 dark:text-white text-gray-900 w-[100vw]'>
        <div className='flex items-center justify-center m-10'>
          <img
            src='./logo.svg'
            alt='logo'
            className='p-2'
            width={60}
            height={60}
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

                <div className='inputForm flex gap-3 border-[1.5px] border-slate-500 rounded-md p-3 transition duration-150 ease-in relative'>
                  <img src='./images/icon-email.svg' alt='' />
                  <input
                    type='email'
                    className='input border-none focus:outline-0 w-[80%] bg-transparent placeholder:opacity-70  '
                    required
                    placeholder='notGoodEmail@gmail.com'
                  />
                </div>
              </div>
              <div className='text-left'>
                <div className='mt-6 mb-2 text-[14px]'>Password</div>

                <div className='inputForm flex gap-3 border-[1.5px] border-slate-500 rounded-md p-3 transition duration-150 ease-in relative'>
                  <img src='./images/icon-password.svg' alt='' />
                  <input
                    type='password'
                    className='input border-none focus:outline-0 w-[80%] bg-transparent placeholder:opacity-70  '
                    required
                    placeholder='strong password'
                  />
                </div>
              </div>
              <div className='mt-8'>
                <button className='px-4 py-2 w-[100%] text-white   rounded-lg duration-200 border-gray-900 bg-slate-800 active:text-gray-500 hover:bg-slate-700 active:shadow-slate-800 active:shadow-md'>
                  <span className='font-[600]'>Login</span>
                </button>
              </div>
            </form>
            <div className="mt-10">
              <span className=' text-slate-400 mr-2 '>
                Don't have an account?
              </span>
              <a href="#" className="text-indigo-600" >Create Account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
