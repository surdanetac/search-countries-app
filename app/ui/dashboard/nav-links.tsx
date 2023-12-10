'use client'
import {
  UserGroupIcon,
  PhoneIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Países', href: '/dashboard', icon: GlobeAltIcon },
  {
    name: 'Acerca de nosotros',
    href: '/dashboard/about',
    icon: UserGroupIcon,
  },
  { name: 'Contacto', href: '/dashboard/contact', icon: PhoneIcon },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-500 hover:text-gray-200 md:flex-none md:justify-start md:p-2 md:px-3
            ${pathname === link.href ? 'bg-gray-500 text-gray-200' : ''}
            `}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
