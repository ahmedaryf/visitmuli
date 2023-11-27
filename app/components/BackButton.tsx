"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className=' '>
      <FaArrowLeft color={"gray"} className=' cursor-pointer ' />
    </div>
  );
}
