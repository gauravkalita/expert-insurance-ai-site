
import { ReactNode } from "react";

export interface NavLink {
  name: string;
  path: string;
  icon?: ReactNode;
  hasDropdown?: boolean;
}

export interface InsuranceCategory {
  name: string;
  path: string;
  icon?: ReactNode;
  subcategories: InsuranceSubcategory[];
}

export interface InsuranceSubcategory {
  name: string;
  path: string;
  icon?: ReactNode;
  subcategories?: InsuranceThirdLevelCategory[];
}

export interface InsuranceThirdLevelCategory {
  name: string;
  path: string;
  icon?: ReactNode;
}
