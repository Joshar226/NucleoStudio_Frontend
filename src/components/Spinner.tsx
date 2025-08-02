import { RingLoader } from "react-spinners";


export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0d0d0d]">
        <RingLoader color="#1447e6" />
    </div>
  )
}
