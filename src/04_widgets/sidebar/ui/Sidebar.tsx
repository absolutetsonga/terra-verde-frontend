import { SidebarItem } from "@/src/07_shared/ui";
import { SidebarSection } from "@/src/07_shared/ui";

const Sidebar = () => {
  return (
    <div className="col-span-1 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#013220] text-gray-50">
      <div className="flex flex-col h-full border-r">
        <div className="flex flex-col overflow-y-auto overflow-x-hidden">
          <ul className="flex flex-col py-4 space-y-1">
            <SidebarSection title="Menu" />
            <SidebarItem href="#" text="Dashboard" />
            <SidebarItem
              href="#"
              text="Inbox"
              badgeText="New"
              badgeColor="text-indigo-500"
            />
            <SidebarItem href="#" text="Messages" />
            <SidebarItem
              href="#"
              text="Notifications"
              badgeText="1.2k"
              badgeColor="text-red-500"
            />
            <SidebarSection title="Tasks" />
            <SidebarItem href="#" text="Available Tasks" />
            <SidebarItem
              href="#"
              text="Clients"
              badgeText="15"
              badgeColor="text-green-500"
            />
            <SidebarSection title="Settings" />
            <SidebarItem href="#" text="Profile" />
            <SidebarItem href="#" text="Settings" />
            <SidebarItem href="#" text="Logout" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
