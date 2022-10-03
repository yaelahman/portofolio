import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import Container from './Container';
import styles from './styles';

export default function Footer() {
    return (
        <div className='border-t border-gray-100 py-10 dark:border-gray-800'>
            <Container>
                <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                    <ul className='flex items-center gap-x-4'>
                        <NavLink href='/' value='Home' />
                        <NavLink href='/about' value='About' />
                        <NavLink href='/articles' value='Articles' />
                        <NavLink href='/projects' value='Projects' />
                        <NavLink href='/uses' value='Uses' />
                    </ul>
                    <div className={clsx(styles.textMuted, 'text-right')}>
                        © 2022 Iman Notes. All rights reserved.
                    </div>
                </div>
            </Container>
        </div>
    );
}

function NavLink({ href, value, children }) {
    return (
        <li>
            <Link href={href}>
                <a className={styles.textMuted}>{value || children}</a>
            </Link>
        </li>
    );
}
