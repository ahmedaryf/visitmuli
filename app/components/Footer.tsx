import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className='h-64 bg-gradient-to-b from-blue-500 to-blue-700 dark:from-orange-400 dark:to-orange-700 flex flex-col justify-between py-6 text-white'>
      <div className=' flex justify-between px-10'>
        <div className=''>
          <div className='flex gap-1 justify-center items-center'>
            <AiFillFacebook size={34} color={"white"} />
            <AiFillInstagram size={34} color={"white"} />
            <FaSquareXTwitter size={30} color={"white"} />
          </div>
        </div>
        <div className=''>
          <h1 className='text-xl text-center font-samibold mb-2 md:mb-4'>
            Contacts
          </h1>
          <div className='flex gap-2 items-center mb-2'>
            <FaPhone size={20} />
            <Link href={"tel:9609518486"}>
              <p className='text-sm md:text-base'>Phone: +960 9518486</p>
            </Link>
          </div>
          <div className='flex gap-2 items-center'>
            <IoIosMail size={24} />
            <Link href='mailto:visitmuli@gmail.com'>
              <p className='text-sm md:text-base'>Email: visitmuli@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>
      <div className='text-center self-center'>
        <h5>Copyright © 2023 visitmuli.com</h5>
        <h5 className='text-sm text-gray-300 mt-2'>Developed by Ahmed Areef</h5>
      </div>
    </footer>
  );
}
