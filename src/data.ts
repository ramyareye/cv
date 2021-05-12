import avatar from 'assets/avatar.jpeg';

import {
    HeaderProps,
    ExperienceBlockProps,
    SkillBlockProps,
    BlockTypesProps,
} from 'types/components';

const headerData: HeaderProps = {
    // options: {},
    // value: {
    avatar,
    title: 'Reza Babaei',
    socials: {
        phone: '+989373792237',
        email: 'ramyariran@gmail.com',
        website: 'https://github.com/ramyareye',
    },
    bio:
        'Front End Developer focused on React & React Native with 5 years of experience in building and maintaining web applications. Proficient in JavaScript, TypeScript, React; plus few other related libraries.',
    // },
};

const experienceData: ExperienceBlockProps = {
    type: BlockTypesProps.EXPERIENCE,
    // options: {},
    value: [
        {
            id: 1,
            from: '01/2015',
            location: 'Tehran - Iran',
            title: 'Senior front-end developer',
            company: 'Upera',
            text:
                'Upera is a Video-On-Demand and video affiliation solution for local producers in Iran. As a team of 4 people We had a mission to build our interfaces for Web, Mobile and TV. <br/>Most notable projects in Upera included:',
            projects: [
                'Creating the website using Vue and Nuxt',
                'Managing the production of TV application using Java',
                'Mobile application development using React Native, TypeScript, and experimented with implementation of ReactNative Reanimated',
                'Creating a React dashboard based on TypeScript, TailwindCSS, and React Query',
            ],
        },
        {
            id: 2,
            from: '04/2020',
            to: '03/2021',
            location: 'Amsterdam, Netherlands',
            title: 'Senior Project Manager',
            company: 'Peste',
            text:
                'Peste is a development agency that helps out businesses with their outsourced web applications. As the Full-stack developer, my core activities included:',
            projects: [
                'Building stable and maintainable codebases using React and Next.',
                'Developing front-end for 5+ websites and web apps, using React.js, Next.js, Redux, and Apollo.',
                'Using skills in debugging to check code, improve code and enhance the functionality and user experience of web applications',
                'Creating custom React.js components and hooks.',
            ],
        },
        {
            id: 3,
            from: '03/2012',
            location: 'Tehran, Iran',
            title: 'Web, Mobile, & Wordpress developer',
            company: 'Self-Employed',
            text:
                'As I started my career I was and still am more interested in individual and short-term projects. My main goal is to offer help and consultation to small and medium-sized businesses to start and maintain their digital presence.',
        },
        {
            id: 4,
            from: '08/2012',
            to: '02/2013',
            location: 'Tehran, Iran',
            title: 'Lead Engineer',
            company: 'Varzesh3',
            text:
                'Varzesh3 is the top Iranian sports news agency. At the time I had the responsibility to design and manage the "national online games tournament" platform, so that users can register and take part in the tournament.',
        },
        {
            id: 5,
            from: '08/2013',
            to: '02/2014',
            location: 'Erbil, Iraq',
            title: 'Frontend Web Developer',
            company: 'SoftMax',
            text:
                'SoftMax is a leading Information Technology solutions provider, Business Management, and Training Services. I was taking care of the UI for some services, building new designs and researching about upcoming techs.',
        },
    ],
};

const skillsData: SkillBlockProps = {
    type: BlockTypesProps.SKILLS,
    // options: {},
    value: [
        {
            id: 1,
            title: 'Senior front-end developer',
            level: '123',
        },
    ],
};

export default { headerData, experienceData, skillsData };
