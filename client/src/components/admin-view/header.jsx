import { AlignJustify, ListMinus, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header className="flex fixed z-40 w-full lg:w-[calc(100%-16rem)] lg:ml-64 items-center justify-between px-4 py-3 bg-background border-b">
      <div onClick={() => setOpen(true)} className="lg:hidden sm:block">
      <ListMinus className="w-5 h-5"/>
        <span className="sr-only">Toggle Menu</span>
      </div>
      <div className="flex flex-1 justify-end">
        <div
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-0 py-2 text-sm font-medium"
        >
          <LogOut className="w-5 h-5"/>
          Logout
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
