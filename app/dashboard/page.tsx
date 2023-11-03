import NavLinks from "@/ui/dashboard/nav-links"
import Search from "@/ui/dashboard/search"

export default function Page() {
    return (
      <main className="p-1">
        <div>
        <Search placeholder="Search mine.fm..."/>
        </div>
        <div className="m-3">
          <NavLinks />
        </div>
        
        
      </main>
      
    )
  }