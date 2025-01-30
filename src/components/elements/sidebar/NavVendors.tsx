import { Link } from "react-router-dom";
import { MoreHorizontal, ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { IVendors } from "@/interface";

export function NavVendors({ vendors }: IVendors) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Vendors</SidebarGroupLabel>
      <SidebarMenu>
        {vendors.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild tooltip={item.name}>
              <Link to={item.url}>
                <item.icon />
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
  );
}
