import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import { SidebarProvider } from "../ui/sidebar";
import SidebarMobile from "./sidebar-mobile";
import ShoppingFooter from "./footer";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden mt-16">
      <SidebarProvider defaultOpen={false}>
        <SidebarMobile />
        <div className="w-full flex flex-col items-center">
        <ShoppingHeader />
        <main className="flex flex-col w-full">
          <Outlet />
        </main>
        <ShoppingFooter/>
        </div>
        
      </SidebarProvider>
    </div>
  );
}

export default ShoppingLayout;
