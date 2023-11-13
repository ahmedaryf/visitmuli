import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='h-64 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-orange-400 dark:to-orange-700 flex flex-col justify-between py-6 text-white'>
      <div className=' flex justify-between px-10'>
        <div className=''>
          <div className='flex gap-1'>
            <AiFillFacebook size={32} color={"white"} />
            <AiFillInstagram size={32} color={"white"} />
            <FaSquareXTwitter size={30} color={"white"} />
          </div>
        </div>
        <div className=''>
          <h1 className='text-xl font-samibold '>Contacts</h1>
        </div>
      </div>
      <div className='text-center self-center'>
        <h5>Copyright © 2023 visitmuli.com</h5>
        <h5 className='text-sm text-gray-300 mt-2'>Developed by Ahmed Areef</h5>
      </div>
    </footer>
  );
}
