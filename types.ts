import { LucideIcon } from 'lucide-react';

export enum MaterialCategoryType {
  GENERAL = 'GENERAL',
  ENGINEERING = 'ENGINEERING',
  ADVANCED = 'ADVANCED'
}

export interface MaterialData {
  id: string;
  name: string;
  description: string;
  category: MaterialCategoryType;
  icon?: LucideIcon;
  properties: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
