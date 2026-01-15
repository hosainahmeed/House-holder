export interface MenuItem {
    label: string;
    href: string;
    onPointerDown?: () => void;
    icons?: string;
  }
  
export const NON_USER_MENU_ITEMS: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'FAQ', href: '/faq' },
];

export const ORGANIZER_MENU_ITEMS: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Jobs', href: '/jobs' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'Contact Us', href: '/contact-us' },
];

export const HOST_USER_MENU_ITEMS: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'Contact Us', href: '/contact-us' },
];

