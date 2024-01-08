export type NavItem = {
  icon: string;
  label: string;
  href: string;
  badge: boolean;
  beta: boolean;
};
export const navitems: NavItem[] = [
  {
    icon: '/Home.svg',
    label: 'Home',
    href: 'home',
    badge: false,
    beta: false,
  },
  {
    icon: '/Orders.svg',
    label: 'Orders',
    href: 'orders',
    badge: false,
    beta: false,
  },
  {
    icon: '/Products.svg',
    label: 'Products',
    href: 'products',
    badge: false,
    beta: false,
  },
  {
    icon: '/Delivery.svg',
    label: 'Delivery',
    href: 'delivery',
    badge: false,
    beta: false,
  },
  {
    icon: '/Marketing.svg',
    label: 'Marketing',
    href: 'marketing',
    badge: false,
    beta: false,
  },
  {
    icon: '/Analytics.svg',
    label: 'Analytics',
    href: 'analytics',
    badge: false,
    beta: false,
  },
  {
    icon: '/Payments.svg',
    label: 'Payments',
    href: 'payments',
    badge: true,
    beta: false,
  },
  {
    icon: '/Tools.svg',
    label: 'Tools',
    href: 'tools',
    badge: false,
    beta: false,
  },
  {
    icon: '/Discounts.svg',
    label: 'Discounts',
    href: 'discounts',
    badge: false,
    beta: false,
  },
  {
    icon: '/Audience.svg',
    label: 'Audience',
    href: 'audience',
    badge: false,
    beta: true,
  },
  {
    icon: '/Appearance.svg',
    label: 'Appearance',
    href: 'appearance',
    badge: false,
    beta: false,
  },
  {
    icon: '/Plugins.svg',
    label: 'Plugins',
    href: 'plugins',
    badge: false,
    beta: false,
  },
];
