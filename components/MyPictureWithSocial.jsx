import { socials } from '@/libs/socials';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import styles from './styles';
export default function MyPictureWithSocial() {
    return (
        <>
            <Image
                className='rounded-lg'
                width='512'
                height='512'
                src='/images/me/cool.jpg'
                alt='Muhammad Iman Furqon'
            />
            <div className="text-center">
                <h6>Muhammad Iman Furqon</h6>
                <small className="pt-0">20 Years Old</small>
            </div>
            <div
                className={clsx(
                    // styles.flexCenter,

                    'flex items-center justify-center gap-1 my-3'
                )}
            >
                {socials.map(({ url, icon: Icon }, i) => (
                    <Link href={url} key={i}>
                        <div
                            className={clsx(
                                styles.flexCenter,
                                'h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800'
                            )}
                        >
                            <Icon
                                stroke={1}
                                className='h-5 w-5'
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}
