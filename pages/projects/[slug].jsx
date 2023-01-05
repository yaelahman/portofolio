import React from 'react';
import Container from '@/components/Container';
import Meta from '@/components/Meta';
import projectData from "./data.json"
import clsx from 'clsx';
import styles from '@/components/styles';
import Image from 'next/image';
import PageTitle from '@/components/PageTitle';
import { Carousel } from 'flowbite-react';

export default function ProjectDetailPage({ slug, project }) {
    return (
        <>
            <Meta
                title={`${project.name} / Yaelahman`}
                url={`https://mifstorage.com/project`}
            />
            <div
                className={clsx(
                    styles.whiteLayoutWithPaddingY,
                    'mb-4 sm:mb-8 lg:mb-16 relative'
                )}
            >
                <Container>
                    <div className="flex">
                        <Image
                            alt=''
                            src={project.icon}
                            decoding='async'
                            data-nimg='future'
                            className='h-8 w-8 rounded-full'
                            loading='lazy'
                            style={{ color: 'transparent' }}
                            width={80}
                            height={80}
                        />
                        <div className="my-auto ml-5">
                            <PageTitle>{project.name}</PageTitle>
                            <h6>{project.description}</h6>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-gray-400 mt-5 text-xl mb-3">Description</p>
                        <div dangerouslySetInnerHTML={{ __html: project.text }}></div>
                    </div>
                    <div>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <p className="text-gray-500 dark:text-gray-400 mt-5 text-xl mb-3">Image</p>
                            <Carousel slideInterval={5000}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                {project.image.map(row => {
                                    return (
                                        <img
                                            alt="..."
                                            src={`http://localhost:3000/assets/${project.slug}/${row}.png`}
                                        />
                                    )
                                })}
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const posts = projectData.filter((post) => post.slug.includes(slug));
    console.log(posts)

    return {
        props: {
            slug,
            project: posts[0],
        },
    };
};

export async function getStaticPaths() {

    const tags = new Set(
        projectData.map((post) => post.slug)
            .flat()
    );
    const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));
    return {
        paths: paths,
        fallback: true // false or 'blocking'
    };
}
