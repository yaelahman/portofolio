import { IconBriefcase } from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const projects = [
    {
        name: 'WX Store',
        icon: '/images/projects/wxstore.png',
        description: 'Topup Game Online Provider.',
        url: 'https://wxstoreid.com',
    },
    {
        name: 'Synn Store',
        icon: '/images/projects/synn.png',
        description: 'Malaysian Mobile Legends Diamond Provider.',
        url: 'http://synnmlbb.store',
    },
    {
        name: 'Sipadu',
        icon: '/images/projects/sipadu.png',
        description: 'Sistem Pelayanan Terpadu Web Based.',
        url: 'http://itsnaufal.my.id',
    },
];
export default function ProjectAtHome() {
    return (
        <div className='rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50'>
            <h2 className='flex text-sm font-semibold text-gray-900 dark:text-gray-100'>
                <IconBriefcase stroke={1} />
                <span className='ml-3'>Projects</span>
            </h2>
            <ol className='mt-6 space-y-4'>
                {projects.map((project, i) => (
                    <li key={i} className='flex gap-4'>
                        <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0'>
                            <Image
                                alt=''
                                src={project.icon}
                                decoding='async'
                                data-nimg='future'
                                className='h-7 w-7 rounded-full'
                                loading='lazy'
                                style={{ color: 'transparent' }}
                                width={32}
                                height={32}
                            />
                        </div>
                        <dl className='flex flex-auto flex-wrap gap-x-2'>
                            <dt className='sr-only'>Company</dt>
                            <dd className='w-full flex-none text-sm font-medium text-gray-900 dark:text-gray-100'>
                                {project.name}
                            </dd>
                            <dt className='sr-only'>Role</dt>
                            <dd className='text-xs text-gray-500 dark:text-gray-400'>
                                {project.description}
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Link href='/projects'>
                <div className='group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow outline-offset-2 transition hover:bg-gray-50 active:bg-gray-100 active:text-gray-900/60 active:transition-none dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:active:bg-gray-700/50 dark:active:text-gray-50/70'>
                    View more
                </div>
            </Link>
        </div>
    );
}
