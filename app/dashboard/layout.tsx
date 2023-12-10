import SideNav from "../ui/dashboard/sidenav"
import styleClasses from "../ui/base.module.css"

export default function layout({ children }: {children: React.ReactNode}) { 
  return (
    <div className={`${styleClasses.background_layout_grey} flex h-screen flex-col md:flex-row md:overflow-hidden`}>
      <div className="w-full flex-none md:w-64">
        <SideNav/>
      </div>
      <div className="flex-grow md:overflow-y-auto">
       { children }
      </div>
    </div>
  )
}