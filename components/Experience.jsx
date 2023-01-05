import { IconTools, IconHistory } from '@tabler/icons';
import React from 'react';
import DevIcon from "devicon-react-svg";
import clsx from 'clsx';
import styles from './styles';

const skills = [
    { icon: 'html5', name: 'HTML' },
    { icon: 'css3', name: 'CSS' },
    { icon: 'javascript', name: 'Javascript' },
    { icon: 'bootstrap', name: 'Bootstrap' },
    { icon: 'php', name: 'PHP' },
    { icon: 'laravel', name: 'Laravel' },
    { icon: 'codeigniter', name: 'Codeigniter' },
    { icon: 'yii', name: 'Yii2' },
    { icon: 'react', name: 'React JS' },
    { icon: 'N', name: 'Next JS' },
    { icon: 'vuejs', name: 'Vue JS' },
    { icon: 'A', name: 'Angular JS' },
    { icon: 'dart', name: 'Dart - Flutter' },
    { icon: 'android', name: 'Android Apps' },
    { icon: 'appstore', name: 'iOS Apps' },
];
export default function Experience() {

    return (
        <div className='rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50 mt-3'>
            <h2 className='flex text-sm font-semibold text-gray-900 dark:text-gray-100'>
                <IconHistory stroke={1} />
                <span className='ml-3'>Experience</span>
            </h2>
            <ol className='mt-6 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50'>
                <li className='btn py-2 relative rounded px-2 ease-in hover:translate-y-1 transition-all cursor-pointer flex gap-4'>
                    <div className='relative my-1 flex h-5 w-5 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0'>
                        -
                    </div>
                    <dl className='flex flex-auto flex-wrap gap-x-2'>
                        <dt className='sr-only'>Company</dt>
                        <dd
                            className={clsx(
                                styles.textInvert,
                                'w-full flex-none text-sm font-medium mt-auto'
                            )}
                        >
                            CV Mamorasoft
                            &nbsp;
                            <span
                                className={clsx(
                                    styles.textMuted,
                                    'text-xs '
                                )}
                            >
                                (Juni 2021 - Sekarang)
                            </span>
                        </dd>
                        <dt className='sr-only'>Role</dt>
                        <ul>
                            <li>
                                <dd
                                    className={clsx(
                                        styles.textMuted,
                                        'text-xs'
                                    )}
                                >
                                    FULLSTACK DEVELOPER
                                </dd>
                            </li>
                            <li>
                                <dd
                                    className={clsx(
                                        styles.textMuted,
                                        'text-xs'
                                    )}
                                >
                                    - Membuat dan mengembangkan aplikasi web dan mobile lebih dari 7 aplikasi <br />
                                    - Maintenaince aplikasi <br />
                                    - Laporan progress kerja menggunakan Trello <br />
                                    - Demo dan meeting dengan client <br />
                                    - Bahasa/framework yang telah dikerjakan ( HTML, CSS, PHP, JS, Laravel, Yii2, Express JS, Vue JS, React JS, Angular JS, Bootstrap, Flutter - Android & iOS ) <br />
                                    - Menyimpan dan manage hasil kerja menggunakan Git <br />
                                    - dll
                                </dd>
                            </li>
                        </ul>
                    </dl>
                </li>
                <li className='btn py-2 relative rounded px-2 ease-in hover:translate-y-1 transition-all cursor-pointer flex gap-4'>
                    <div className='relative my-1 flex h-5 w-5 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0'>
                        -
                    </div>
                    <dl className='flex flex-auto flex-wrap gap-x-2'>
                        <dt className='sr-only'>Company</dt>
                        <dd
                            className={clsx(
                                styles.textInvert,
                                'w-full flex-none text-sm font-medium mt-auto'
                            )}
                        >
                            CV Purnama Kreatifa
                            &nbsp;
                            <span
                                className={clsx(
                                    styles.textMuted,
                                    'text-xs '
                                )}
                            >
                                (Oktober 2018 - Maret 2019)
                            </span>
                        </dd>
                        <dt className='sr-only'>Role</dt>
                        <ul>
                            <li>
                                <dd
                                    className={clsx(
                                        styles.textMuted,
                                        'text-xs'
                                    )}
                                >
                                    WEB DEVELOPER ( Magang )
                                </dd>
                            </li>
                            <li>
                                <dd
                                    className={clsx(
                                        styles.textMuted,
                                        'text-xs'
                                    )}
                                >
                                    - Membuat dan mengembangkan aplikasi web menggunakan Codeigniter 3 <br />
                                    - Maintenaince aplikasi <br />
                                    - Menyimpan dan manage hasil kerja menggunakan FTP - Filezilla <br />
                                    - dll
                                </dd>
                            </li>
                        </ul>
                    </dl>
                </li>
            </ol>
        </div>
    );
}
