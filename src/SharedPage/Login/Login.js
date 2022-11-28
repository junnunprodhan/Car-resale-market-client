import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {AuthContext} from '../../Contexts/AuthProvider/AuthProvider'

const Login = () => {
 
    const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();
const {signin,signInWithGoogle}= useContext(AuthContext)
    const handleLogin =event =>{
    event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password)
        
        signin(email, password)
        .then(result => {
          const user=result.user
          
          fetch(`https://car-resale-market-server.vercel.app/jwt`,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({currentUser:user.email})
          })
          .then(res=>res.json())
          .then(data=>{
            
            localStorage.setItem('token',data.token)
          })
          toast.success('Login Success!')
        
          navigate(from,{replace:true})
        })
        .catch(error => console.error(error.message))
    }

    const handleGoogleSignin = () => {
      signInWithGoogle().then(result => {
        console.log(result.user)
        const displayName=result.user.displayName;
        const email=result.user.email;
        const role ='User'
        const dbUser={
          name:displayName,
          email,
          role
        }

        fetch('https://car-resale-market-server.vercel.app/users',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(dbUser)
    })
    .then(res=>res.json())
    .then(result=>{
    
    })
        navigate(from, { replace: true })
        toast.success('Login Success!')
      })
    }
  
    return (
        <div className='flex justify-center items-center pt-8'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Log in</h1>
            <p className='text-sm text-gray-400'>
              Log in to access your account
            </p>
          </div>
          <form
          onSubmit={handleLogin}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
          
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                />
  
              </div>
            </div>
  
            <div>
              <button
                type='submit'
                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
              >
                Log in
              </button>
            </div>
          </form>
          <div className='space-y-1'>
            <button
              
              className='text-xs hover:underline text-gray-400'
            >
              Forgot password?
            </button>
          </div>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Login with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div className='flex justify-center space-x-4'>
            <button
              onClick={handleGoogleSignin}
              aria-label='Log in with Google'
              className='p-3 rounded-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                className='w-5 h-5 fill-current'
              >
                <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
              </svg>
            </button>
          </div>
          <p className='px-6 text-sm text-center text-gray-400'>
            Don't have an account yet?{' '}
            <Link to='/register' className='hover:underline text-gray-600'>
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;