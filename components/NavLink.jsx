import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export default function NavLink({ href, value, children }) {
    const router = useRouter()
    let condition1 = router.pathname === href ? 'text-blue-400' : 'text-gray-900'
    let condition2 = router.pathname === href ? 'text-blue-400' : 'text-gray-300'
    return (
        <li>
            <Link href={href}>
                <div className={`inline-flex px-3 py-2 text-sm font-medium ${condition1} dark:${condition2} lg:px-4`}>
                    {value || children}
                </div>
            </Link>
        </li>
    );
}
