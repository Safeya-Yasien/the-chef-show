import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface INavLinkProps {
  to: string;
  label: string;
}

const SheetMenu = ({ navLinks }: { navLinks: INavLinkProps[] }) => {
  const location = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Button className="text-lg bg-transparent flex justify-center p-1 items-center lg:hidden hover:bg-white hover:text-black rounded-none">
          <Menu className="!w-8 !h-8" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <nav className="flex flex-col space-y-4 mt-8">
          {navLinks.map((link: INavLinkProps) => {
            const isActive = location.pathname === link.to;

            return (
              <SheetClose asChild key={link.to}>
                <Link
                  to={link.to}
                  className={`capitalize flex w-full items-center py-2 text-lg font-bold italic font-restora transition-colors ${
                    isActive ? "text-[#C19F74]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <SheetFooter>
          <SheetClose asChild className=""></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
