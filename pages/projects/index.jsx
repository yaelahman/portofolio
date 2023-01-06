import Container from '@/components/Container';
import Meta from '@/components/Meta';
import PageTitle from '@/components/PageTitle';
import styles from '@/components/styles';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { Modal, Button } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
import Link from 'next/link';
import projectData from "./data.json"
// import "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"


const projects = projectData;
export default function Projects() {
    return (
        <>
            <Meta
                title='Projects / Yaelahman'
                url={`https://mifstorage.com/projects`}
            />
            <div
                className={clsx(
                    styles.whiteLayoutWithPaddingY,
                    'mb-4 sm:mb-8 lg:mb-16 relative'
                )}
            >
                <Container>
                    <div className='mb-4'>
                        <PageTitle>My Projects</PageTitle>
                        <p className={clsx(styles.textMuted, 'mt-2 text-xl')}>
                            Some projects that might be shown.
                            <i class="devicon-flutter-plain"></i>
                        </p>


                    </div>
                    <ol className='mt-6 grid grid-cols-2 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50'>
                        {projects.map((project, i) => (
                            <Link href={`/projects/${project.slug}`} key={i}>
                                <li className='btn py-2 relative hover:bg-blue-500/[0.05] rounded px-2 ease-in hover:translate-y-1 transition-all cursor-pointer flex gap-4' key={i}>
                                    <div className='relative my-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0'>
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
                                                'w-full flex-none text-sm font-medium mt-auto'
                                            )}
                                        >
                                            {project.name}
                                        </dd>
                                        <dt className='sr-only'>Role</dt>
                                        <dd
                                            className={clsx(
                                                styles.textMuted,
                                                'text-xs '
                                            )}
                                        >
                                            {project.description}
                                        </dd>
                                    </dl>
                                </li>
                            </Link>
                        ))}
                    </ol>
                </Container>

            </div>
        </>
    );
}
