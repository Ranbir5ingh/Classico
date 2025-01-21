import React, { useEffect } from "react";
import {
  ChevronDown,
  ChevronsUpDown,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  LogOut,
  UserCog,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { shoppingViewMenuItems } from "@/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";

export default function SidebarMobile() {
  const { setOpenMobile } = useSidebar();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing?${section}=${getCurrentItem.id}`);
    setOpenMobile(false);
  }

  return (
    <Sidebar className="lg:hidden">
      <SidebarContent>
      <SidebarMenu>
              <SidebarMenuItem className='p-2 mt-2'>
                <SidebarMenuButton
                  onClick={() => {
                    navigate("/shop/home");
                    setOpenMobile(false);
                  }}
                  className="focus-visible:ring-0 h-12"
                >
                  <span className="text-lg font-semibold">Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Products</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {shoppingViewMenuItems.map((menuItem) => (
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="focus-visible:ring-0 h-12">
                        <span className="text-lg font-semibold">
                          {menuItem.label}
                        </span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {menuItem.options.map((menuSubItem) => (
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuButton
                              onClick={() =>
                                handleNavigateToListingPage(
                                  menuSubItem,
                                  menuItem.id
                                )
                              }
                            >
                              <span className="text-sm">
                                {menuSubItem.label}
                              </span>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Pages</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  onClick={() => {
                    navigate("/shop/account");
                    setOpenMobile(false);
                  }}
                  className="focus-visible:ring-0 h-12"
                >
                  <span className="text-lg font-semibold">My Account</span>
                  <ExternalLink className="ml-auto" />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Source Code</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <a href="https://github.com/Ranbir5ingh/mern-ecom" target="_blank">
                <SidebarMenuItem>
                  <SidebarMenuButton className="focus-visible:ring-0 h-12">
                    <span className="text-lg font-semibold">GitHub Repo</span>
                    <ExternalLink className="ml-auto" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </a>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarGroup className="p-0 mb-2">
            <SidebarGroupLabel className="text-sm">
              Social Links
            </SidebarGroupLabel>
            <SidebarMenuItem>
              <div className="flex items-center justify-start gap-2 p-2 h-12">
                <a href="https://www.linkedin.com/in/ranbir-singh-92a578288/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Ranbir5ingh" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/it.s_bir/" target="_blank">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </SidebarMenuItem>
          </SidebarGroup>

          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex justify-between h-12">
                  <div className="flex items-center justify-center gap-2">
                    <Avatar className="bg-black rounded-lg h-9 w-9">
                      <AvatarFallback className="bg-black text-white font-extrabold">
                        {user?.userName[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-primary">
                        {user?.userName}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {user?.email}
                      </span>
                    </div>
                  </div>
                  <div>
                    <ChevronsUpDown className="w-4 h-4" />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuLabel>
                  Logged in as {user?.userName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
