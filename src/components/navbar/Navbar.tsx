"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router";

const NavLinks = () => (
  <>
    <NavigationMenuItem>
      <NavigationMenuLink
        className="text-foreground/80 hover:text-foreground"
        asChild
      >
        <Link to="/">Home</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink
        className="text-foreground/80 hover:text-foreground"
        asChild
      >
        <Link to="/about">About</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink
        className="text-foreground/80 hover:text-foreground"
        asChild
      >
        <Link to="/conditions">Conditions</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink
        className="text-foreground/80 hover:text-foreground"
        asChild
      >
        <Link to="/faq">FAQ</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </>
);

const AuthButtons = () => (
  <div className="flex items-center gap-2">
    <Button variant="ghost" asChild>
      <Link to="/login">Login</Link>
    </Button>
    <Button asChild>
      <Link to="/signup">Sign Up</Link>
    </Button>
  </div>
);

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">zima</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavLinks />
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden md:flex">
            <AuthButtons />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[385px]">
              <SheetHeader>
                <SheetTitle>zima</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col space-y-3">
                  <NavLinks />
                </div>
                <div className="flex flex-col gap-2">
                  <AuthButtons />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
