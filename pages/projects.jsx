import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
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
    {
        name: 'Lapak Gusjeng',
        icon: '/images/projects/lapak_gusjeng.png',
        description: 'Marketplace Web Based.',
        url: 'http://lapakgusjeng.com',
    },
    {
        name: 'FiqBuy',
        icon: '/images/projects/fiqbuy.png',
        description: 'Mobile Legends Store Front End.',
        url: 'http://mifstorage.com',
    },
    {
        name: 'SIM Cakep',
        icon: '/images/projects/github.svg',
        description: 'Simple Money Management.',
        url: 'http://mifstorage.com',
    },
    {
        name: 'Other',
        icon: '/images/projects/github.svg',
        description: 'Other Simple Application For Study.',
        url: 'http://mifstorage.com',
    },
];
export default function Projects() {
    return (
        <>
            <Meta
                title='Projects / Iman Notes'
                url={`https://mifstorage.com/projects`}
            />
            <div
                className={clsx(
                    styles.whiteLayoutWithPaddingY,
                    'mb-4 sm:mb-8 lg:mb-16'
                )}
            >
                <Container>
                    <div className='mb-4'>
                        <PageTitle>My Projects</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Some projects that might be shown.
                        </p>
                    </div>
                    <ol className='mt-6 max-w-xl space-y-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50'>
                        {projects.map((project, i) => (
                            <li className='flex gap-4' key={i}>
                                <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0'>
                                    <Image
                                        alt=''
                                        src={project.icon}
                                        decoding='async'
                                        data-nimg='future'
                                        className='h-8 w-8 rounded-full'
                                        loading='lazy'
                                        style={{ color: 'transparent' }}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                                <dl className='flex flex-auto flex-wrap gap-x-2'>
                                    <dt className='sr-only'>Company</dt>
                                    <dd
                                        className={clsx(
                                            styles.textInvert,
                                            'w-full flex-none text-sm font-medium'
                                        )}
                                    >
                                        {project.name}
                                    </dd>
                                    <dt className='sr-only'>Role</dt>
                                    <dd
                                        className={clsx(
                                            styles.textMuted,
                                            'text-xs'
                                        )}
                                    >
                                        {project.description}
                                    </dd>
                                </dl>
                            </li>
                        ))}
                    </ol>
                </Container>
            </div>
        </>
    );
}
