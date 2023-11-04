import NavButtons from "@/ui/dashboard/nav-buttons"
import Search from "@/ui/dashboard/search"
import Soundboard from "@/ui/dashboard/soundboard"

export default function Page() {
    return (
      <main className="p-1">
        <div>
        <Search placeholder="Search mine.fm..."/>
        </div>
        <div className="m-3">
        <NavButtons />
        </div>
        <div className="flex justify-center ">
        <Soundboard />
        </div>
        
      </main>
      
    )
  }