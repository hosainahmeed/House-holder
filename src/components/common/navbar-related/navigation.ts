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

export const LOGIN_USER_MENU_ITEMS: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Browse Events', href: '/browse-events' },
    { label: 'Contact / Help', href: '/contact-us' },
];

export const ORGANIZER_MENU_ITEMS: MenuItem[] = [
    { label: 'Home', href: '/' },
    { label: 'List Events', href: '/list-events-organizer' },
    { label: 'Contact / Help', href: '/contact-us' },
];

