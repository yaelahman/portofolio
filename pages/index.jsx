import React from 'react';
import PageTitle from '@/components/PageTitle';
import MyPictureWithSocial from '@/components/MyPictureWithSocial';
import Container from '@/components/Container';
import styles from '@/components/styles';
import Meta from '@/components/Meta';
import ProjectAtHome from '@/components/ProjectAtHome';
import DevIcon from "devicon-react-svg";
import clsx from 'clsx';
import MySkills from '@/components/MySkills';
import Experience from '@/components/Experience';

export default function About() {
    return (
        <>
            <Meta
                title='Home / Yaelahman'
                url='https://mifstorage.com/'
            />
            <div className={styles.whiteLayoutWithPaddingY}>
                <Container>
                    <div className='flex flex-col-reverse gap-10 lg:flex-row'>
                        <div className='w-full lg:w-2/3'>
                            <PageTitle className='mb-6'>
                                I’m Muhammad Iman Furqon. <br /> I live in Sidoarjo
                                Indonesia, where I start a career as a Software Engineering.
                            </PageTitle>
                            <MySkills />
                            <Experience />
                        </div>
                        <div className='w-full lg:w-1/3'>
                            <MyPictureWithSocial />
                            <div className="mt-3">
                                <ProjectAtHome />
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </>
    );
}
