import React, { useState } from 'react'

const Register = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if(Password !== ConfirmPassword){
      alert("Passwords do not match")
      return
    }
    alert(`Logging you in `)
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }





  return (
    <div className='flex flex-col justify-center items-center h-auto md:h-[100vh] bg-[url("./bg.png")] bg-cover bg-no-repeat dark:text-white text-gray-900 w-[100vw]'>
        <div className='flex items-center justify-center md:m-10 m-6'>
          <img
            src='./logo.svg'
            alt='logo'
            className='p-2'
            width={60}
            height={60}
          />
          <span className='text-4xl font-[600] tracking-wide '>devlinks</span>
        </div>
        <div className='border-2 rounded-lg border-slate-500 p-8 m-8 md:w-[500px] w-84'>
          <div className='registerWrapper text-left '>
            <h1 className='text-2xl font-bold mb-3'>Register</h1>
            <span className=' text-slate-400 '>
            Let's get you started sharing your links!
            </span>
          </div>
          <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
              <div className='text-left'>
                <div className='mt-8 mb-2 text-[14px]'>Email address</div>

                <div className='inputForm flex gap-3 border-[1.5px] border-slate-500 rounded-md p-3 transition duration-150 ease-in relative'>
                  <img src='./images/icon-email.svg' alt='' />
                  <input
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    className='input border-none outline-none focus:outline-0 w-[80%] bg-transparent placeholder:opacity-70  '
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
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    className='input border-none outline-none focus:outline-0 w-[80%] bg-transparent placeholder:opacity-70  '
                    required
                    placeholder='strong password'
                  />
                </div>
              </div>
              <div className='text-left'>
                <div className='mt-6 mb-2 text-[14px]'>Confirm Password</div>

                <div className='inputForm flex gap-3 border-[1.5px] border-slate-500 rounded-md p-3 transition duration-150 ease-in relative'>
                  <img src='./images/icon-password.svg' alt='' />
                  <input
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type='password'
                    className='input border-none outline-none focus:outline-0 w-[80%] bg-transparent placeholder:opacity-70  '
                    required
                    placeholder='strong password again'
                  />
                </div>
              </div>
              <div className='mt-8'>
                <button className='px-4 py-2 w-[100%] text-white   rounded-lg duration-200 border-gray-900 bg-slate-800 active:text-gray-500 hover:bg-slate-700 active:shadow-slate-800 active:shadow-md' type='submit'>
                  <span className='font-[600]'>register</span>
                </button>
              </div>
            </form>
            <div className="mt-10">
              <span className=' text-slate-400 mr-2 '>
              Already have an account?


              </span>
              <a href="#" className="text-indigo-600" >Login</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Register