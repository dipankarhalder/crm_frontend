import { navData } from "@/components/elements/sidebar/NavData";
import { NavMain } from "@/components/elements/sidebar/NavMain";
import { NavProjects } from "@/components/elements/sidebar/NavProjects";
import { NavVendors } from "@/components/elements/sidebar/NavVendors";
import { NavUser } from "@/components/elements/sidebar/NavUser";
import { TeamSwitcher } from "@/components/elements/sidebar/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useProfileStore } from "@/store/profileStore";
import { useConsumerStore } from "@/store/consumerStore";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { listprofile } = useProfileStore();
  const { listConsumer } = useConsumerStore();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={navData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData.navMain} />
        <NavProjects projects={listConsumer} />
        <NavVendors vendors={listprofile} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
