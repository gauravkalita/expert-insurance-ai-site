
import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { insuranceCategories } from "../data/insuranceCategories";
import { NavLink } from "../types/navigation";

interface DesktopNavItemProps {
  item: NavLink;
}

export const DesktopNavItem: React.FC<DesktopNavItemProps> = ({ item }) => {
  if (item.hasDropdown) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="inline-flex items-center cursor-pointer">
          <button 
            className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 flex items-center gap-1.5"
            aria-expanded="false"
            aria-haspopup="true"
            aria-label={`${item.name} menu`}
          >
            {item.icon}
            {item.name}
            <ChevronDown size={14} aria-hidden="true" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" sideOffset={5}>
          {insuranceCategories.map((category) => {
            if (category.subcategories && category.subcategories.length > 0) {
              return (
                <DropdownMenuSub key={category.name}>
                  <DropdownMenuSubTrigger className="cursor-pointer">
                    {category.icon && <span className="mr-2" aria-hidden="true">{category.icon}</span>} 
                    <span>{category.name}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent className="min-w-[220px]">
                    <DropdownMenuItem asChild>
                      <Link to={category.path} className="w-full">View All {category.name}</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {category.subcategories.map((subcat) => {
                      if (subcat.subcategories && subcat.subcategories.length > 0) {
                        return (
                          <DropdownMenuSub key={subcat.name}>
                            <DropdownMenuSubTrigger className="cursor-pointer">
                              <span>{subcat.name}</span>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="min-w-[220px]">
                              <DropdownMenuItem asChild>
                                <Link to={subcat.path} className="w-full">View All {subcat.name}</Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {subcat.subcategories.map((thirdLevel) => (
                                <DropdownMenuItem key={thirdLevel.name} asChild>
                                  <Link to={thirdLevel.path} className="flex items-center">
                                    {thirdLevel.icon && <span className="mr-2" aria-hidden="true">{thirdLevel.icon}</span>}
                                    {thirdLevel.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        );
                      } else {
                        return (
                          <DropdownMenuItem key={subcat.name} asChild>
                            <Link to={subcat.path}>{subcat.name}</Link>
                          </DropdownMenuItem>
                        );
                      }
                    })}
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              );
            } else {
              return (
                <DropdownMenuItem key={category.name} asChild>
                  <Link to={category.path} className="flex items-center">
                    {category.icon && <span className="mr-2" aria-hidden="true">{category.icon}</span>}
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              );
            }
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <Link
        to={item.path}
        className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
        aria-label={`Navigate to ${item.name}`}
      >
        <div className="flex items-center gap-1.5">
          {item.icon && <span aria-hidden="true">{item.icon}</span>}
          {item.name}
        </div>
      </Link>
    );
  }
};
