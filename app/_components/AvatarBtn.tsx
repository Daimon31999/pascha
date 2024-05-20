import { Moon, Sun, LogOut, TreePalm, SunMoon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

export default function AvatarBtn() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://avatars.githubusercontent.com/u/58564568?v=4" />

            <AvatarFallback>
              <div className="w-10 h-10 rounded-full bg-skyMoschino animate-pulse"></div>
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>
            <span className="capitalize">Дима Хинев</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                {theme === "light" && (
                  <Sun className="mr-2 h-4 w-4 dark:text-skyMoschino" />
                )}
                {theme === "dark" && (
                  <Moon className="mr-2 h-4 w-4 dark:text-skyMoschino" />
                )}
                {theme === "moschino" && (
                  <TreePalm className="mr-2 h-4 w-4 dark:text-orangeMoschino" />
                )}
                {theme === "system" && <SunMoon className="mr-2 h-4 w-4 " />}

                <span>Тема</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4 dark:text-skyMoschino" />
                    <span>Dark Neon</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("moschino")}>
                    <TreePalm className="mr-2 h-4 w-4 dark:text-orangeMoschino" />
                    <span>Moschino</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <SunMoon className="mr-2 h-4 w-4 " />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
