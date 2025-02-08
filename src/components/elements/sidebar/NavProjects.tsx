import { Link } from "react-router-dom";
import { MoreHorizontal, ChevronRight, Box } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { applinks } from "@/router/links";

export function NavProjects({ projects }: any) {
  return (
    projects && (
      <SidebarGroup>
        <SidebarGroupLabel>Last 4 Consumers</SidebarGroupLabel>
        <SidebarMenu>
          {projects.slice(0, 4).map((item: any) => (
            <SidebarMenuItem key={item._id}>
              <SidebarMenuButton asChild tooltip={item.name}>
                <Link to={`customers/view/${item._id}`}>
                  <Box className="text-yellow-600" />
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
            <SidebarMenuButton>
              <Link
                to={applinks.customers}
                className="flex items-center w-full"
              >
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
