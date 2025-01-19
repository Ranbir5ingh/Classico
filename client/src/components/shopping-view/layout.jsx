import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import { SidebarProvider } from "../ui/sidebar";
import SidebarMobile from "./sidebar-mobile";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden mt-16">
      <SidebarProvider defaultOpen={false}>
        <SidebarMobile />

        <ShoppingHeader />
        <main className="flex flex-col w-full">
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}

export default ShoppingLayout;
