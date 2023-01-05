import { IconTools } from '@tabler/icons';
import React from 'react';
import DevIcon from "devicon-react-svg";
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
export default function MySkills() {
    const devIconStyle = {
        fill: "white",
        width: "150px",
    };

    return (
        <div className='rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50'>
            <h2 className='flex text-sm font-semibold text-gray-900 dark:text-gray-100'>
                <IconTools stroke={1} />
                <span className='ml-3'>Skills</span>
            </h2>
            <ol className='mt-6 grid sm:grid-cols-6 grid-cols-4 rounded-2xl bg-gray-100 p-6 dark:bg-gray-800/50'>
                {skills.map((skill, i) => (
                    <li key={i} className='grid gap-1 mb-3'>
                        <div className='mx-auto relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0'>
                            <DevIcon icon={skill.icon} style={devIconStyle} />
                        </div>
                        <dl className='mx-auto'>
                            <dt className='sr-only'>Company</dt>
                            <dd className='w-full flex-none text-[10px] text-gray-900 dark:text-gray-100'>
                                {skill.name}
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
        </div>
    );
}
