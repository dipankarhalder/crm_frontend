import { Link } from "react-router-dom";
import { MoreHorizontal, ChevronRight, CircleCheckBig } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { applinks } from "@/router/links";

export function NavVendors({ vendors }: any) {
  return (
    vendors && (
      <SidebarGroup>
        <SidebarGroupLabel>Last 6 Collaborators</SidebarGroupLabel>
        <SidebarMenu>
          {vendors.slice(0, 6).map((item: any) => (
            <SidebarMenuItem key={item._id}>
              <SidebarMenuButton asChild tooltip={item.name}>
                <Link to={item._id}>
                  <CircleCheckBig className="text-sky-500" />
                  <span>{item.name}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 text-gray-400" size={12} />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link to={applinks.vendors} className="flex items-center w-full">
                <MoreHorizontal className="text-slate-400 mr-2 w-4 h-4" />
                <span className="text-xs text-slate-400 font-medium">More</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    )
  );
}
