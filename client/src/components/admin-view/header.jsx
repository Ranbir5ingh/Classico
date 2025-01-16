import React from "react";
import { Button } from "../ui/button";
import { LogOut, Menu } from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";
import { useToast } from "@/hooks/use-toast";

export default function AdminHeader({ open, setOpen }) {
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleLogoutUser() {
    dispatch(logoutUser()).then((data) => {
      toast({
        title: data?.payload?.message,
      });
    });
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button
        onClick={() => setOpen(open ? false : true)}
        className="lg:hidden sm:block"
      >
        <Menu />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow"
          onClick={handleLogoutUser}
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}
