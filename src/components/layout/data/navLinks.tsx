
import React from "react";
import { 
  HomeIcon, 
  BookOpen, 
  Wrench, 
  Users, 
  Mail, 
  FileText, 
  Shield
} from "lucide-react";
import { NavLink } from "../types/navigation";

export const navLinks: NavLink[] = [
  { name: "Home", path: "/", icon: <HomeIcon size={16} /> },
  {
    name: "Insurance",
    path: "#",
    icon: <Shield size={16} />,
    hasDropdown: true,
  },
  { name: "Blog", path: "/blog", icon: <BookOpen size={16} /> },
  { name: "Tools", path: "/tools", icon: <Wrench size={16} /> },
  { name: "Resources", path: "/resources", icon: <FileText size={16} /> },
  { name: "About", path: "/about", icon: <Users size={16} /> },
  { name: "Contact", path: "/contact", icon: <Mail size={16} /> },
  { name: "Sitemap", path: "/sitemap", icon: <FileText size={16} /> },
];
