"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className=' text-base md:text-xl'>
      <FaArrowLeft color={"white"} className=' cursor-pointer ' />
    </div>
  );
}
