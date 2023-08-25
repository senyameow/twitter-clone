import LeftSidebar from "@/components/LeftSidebar"
import './globals.css'
import ScrollSession from "@/components/ScrollSession"
import RIghtSidebar from "@/components/RIghtSidebar"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 relative ">
      <div className="w-full h-full flex justify-center relative items-center mx-auto bg-gray-950">
        <div className="max-w-screen-xl w-full h-full flex relative">
          <LeftSidebar />
          <ScrollSession />
          <RIghtSidebar />
        </div>
      </div>
    </div>
  )
}
