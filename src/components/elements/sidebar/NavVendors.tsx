import { Link } from "react-router-dom";
import { MoreHorizontal, ChevronRight, CircleCheckBig } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavVendors({ vendors }: any) {
  return (
    vendors && (
      <SidebarGroup>
        <SidebarGroupLabel>Last 4 Collaborators</SidebarGroupLabel>
        <SidebarMenu>
          {vendors.slice(0, 4).map((item: any) => (
            <SidebarMenuItem key={item._id}>
              <SidebarMenuButton asChild tooltip={item.name}>
                <Link to={item._id}>
                  <CircleCheckBig className="text-sky-500" />
                  <span>{item.name}</span>
                  <ChevronRight
                    className="ml-auto transition-transform duration-200 text-gray-400"
                    size={12}
                  />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal className="text-sidebar-foreground/70" />
              <span className="text-xs">More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    )
  );
}
