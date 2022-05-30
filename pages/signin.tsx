import { NextPage } from 'next'
import Header from '../components/Header'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import RedditIcon from '@mui/icons-material/Reddit'
import FacebookIcon from '@mui/icons-material/Facebook'
import Footer from '../components/Footer'
import { MouseEvent } from 'react'
import toast from 'react-hot-toast'

const SignIn: NextPage = () => {
  const handlesubmit = (e: any) => {
    e.preventDefault()
    const notification = toast.loading('loading ...')
    // notification

    toast.success('Sign In successfully', { id: notification })
  }
  return (
    <div className="bg-gray-100 ">
      <div>
        <Header />
      </div>
      <div className="mx-auto mt-32 flex max-w-md flex-col  gap-3  rounded-sm border-2 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            className="w-full flex-1 border-2 p-2 px-2 focus-within:shadow-md focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full flex-1 border-2 p-2 px-2 focus-within:shadow-md focus:outline-none"
          />
        </div>
        <div>
          <button
            onClick={handlesubmit}
            type="submit"
            className="w-full flex-1 rounded-md bg-gradient-to-r from-slate-800 to-slate-600
            py-2 text-lg text-white hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-500 "
          >
            sign in
          </button>
        </div>
        <hr />
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm text-gray-400">sign in with</p>
          </div>
          <div className="mx-auto flex flex-row gap-3">
            <TwitterIcon className="h-10 w-10 cursor-pointer text-gray-600 transition-all duration-200 hover:text-blue-500 active:rotate-45 lg:h-14 lg:w-14" />
            <GoogleIcon className="hover: h-10 w-10 cursor-pointer text-gray-600 transition-all duration-200 hover:text-red-700 active:-rotate-12 lg:h-14 lg:w-14" />
            <RedditIcon className="h-10 w-10 cursor-pointer text-gray-600 transition-all duration-200 hover:text-red-500 active:rotate-12 lg:h-14 lg:w-14" />
            <FacebookIcon className="h-10 w-10 cursor-pointer text-gray-600 transition-all duration-200 hover:text-blue-800 active:rotate-12 lg:h-14 lg:w-14" />
          </div>
        </div>
      </div>

      <div className="bottom-0 mt-20">
        <Footer />
      </div>
    </div>
  )
}

export default SignIn