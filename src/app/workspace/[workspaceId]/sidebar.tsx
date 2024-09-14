import { UserButton } from "@/src/features/auth/components/user-button";
import {usePathname} from "next/navigation"
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import SidebarButton from "./sidebarButton";
import { Home, MessagesSquare, Bell, MoreHorizontal } from "lucide-react";

const sidebar = () => {

const pathname = usePathname()

  return (
    <aside className='w-[170px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-9 pb-4'>
      <WorkspaceSwitcher />
      <SidebarButton icon={Home} label='Home' isActive={ pathname.includes("/workspace")} />
      <SidebarButton icon={MessagesSquare} label='Dms' />
      <SidebarButton icon={Bell} label='Activity' />
      <SidebarButton icon={MoreHorizontal} label='More' />
      <div className='flex flex-col items-center justify-center gap-y-1 mt-auto'>
        <UserButton />
      </div>
    </aside>
  );
};

export default sidebar;
