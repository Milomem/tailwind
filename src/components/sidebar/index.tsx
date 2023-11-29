'use client'
import { Cog, LifeBuoy, Menu, Search } from "lucide-react";
import { Logo } from "./logo";
import { UsedSpaceWidget } from "./usedSpaceWidget";
import { Profile } from "./profile";
import { InputControl, InputPrefix, InputRoot } from "../input";
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { NavItem } from "./navItem";
import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from "lucide-react";


export function Sidebar () {
    return (
      <Collapsible.Root className=" dark:text-white fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
        <div className="flex items-center justify-between">
          <Logo />
          <Collapsible.Trigger asChild className="lg:hidden">
            <Button variant="ghost">
              <Menu className="h-6 w-6" />
            </Button>
          </Collapsible.Trigger>
        </div>
  
        <Collapsible.Content
          forceMount
          className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
        >
          <InputRoot>
            <InputPrefix>
              <Search className="h-5 w-5 to-zinc-500" />
            </InputPrefix>
            <InputControl placeholder="Search" />
          </InputRoot>
  
          <nav className="flex flex-col gap-0.5">
            <NavItem icon={Home} title="Home" />
            <NavItem icon={BarChart} title="Dashboard" />
            <NavItem icon={SquareStack} title="Projects" />
            <NavItem icon={CheckSquare} title="Tasks" />
            <NavItem icon={Flag} title="Reporting" />
            <NavItem icon={Users} title="Users" />
         </nav>
        <div className="mt-auto flex flex-col gap-2">
        <UsedSpaceWidget />
            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
            <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
    )
}