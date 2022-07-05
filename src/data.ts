import avatar from 'assets/reza.jpg';

import {
    HeaderProps,
    ExperienceBlockProps,
    SkillBlockProps,
    BlockTypesProps,
    HobbiesBlockProps,
    VolunteeringBlockProps,
    OpenSourceBlockProps,
    EducationBlockProps,
} from 'types/components';

const headerData: HeaderProps = {
    // options: {},
    // value: {
    avatar,
    title: 'Reza Babaei',
    socials: {
        phone: '+66835299139',
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
            id: 6,
            from: '07/2021',
            location: 'Bangkok - Thailand',
            title: 'Web/Mobile Engineer',
            company: 'Amity',
            text:
                'Amity Social Cloud supercharges platforms with social features — from Feeds and Chat to Stories and Live Streaming. Building online communities, drive social engagement, create positive experiences, and grow revenues.',
            projects: [
                'In charge of Amity Typescript SDK',
                'Code, discuss and review teamates PRs',
                'Doing different POCs for Typescript SDK',
                'Working on fundamental features like Caching, Reactivity and Realtime Events',
                'Create and maintain Amity Social Cloud React Native Sample App',
            ],
        },
        {
            id: 5,
            from: '01/2015',
            to: '06/2021',
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
            id: 4,
            from: '04/2020',
            to: '03/2021',
            location: 'Amsterdam, Netherlands',
            title: 'Senior Project Manager',
            company: 'Peste',
            text:
                'Peste is a development agency that helps out businesses with their outsourced web applications. As the Full-stack developer, my core activities included:',
            projects: [
                'Building stable and maintainable codebases using React, Next and Nest.',
                'Contributing with backend team, designing database and structuring infrastructure',
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
            id: 2,
            from: '08/2012',
            to: '02/2013',
            location: 'Tehran, Iran',
            title: 'Lead Engineer',
            company: 'Varzesh3',
            text:
                'Varzesh3 is the top Iranian sports news agency. At the time I had the responsibility to design and manage the "national online games tournament" platform, so that users can register and take part in the tournament.',
        },
        {
            id: 1,
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
            id: 'js',
            title: 'Javascript/Typeccript',
            level: 'Mid-Senior',
        },
        {
            id: 'react',
            title: 'React/Next.js',
            level: 'Mid-Senior',
        },
        {
            id: 'react-native',
            title: 'React Native',
            level: 'Mid-Senior',
        },
        {
            id: 'nodejs',
            title: 'Nodejs',
            level: 'Mid-Senior',
        },
        {
            id: 'graph-rest',
            title: 'GraphQL/Rest',
            // level: 'Mid-Senior',
        },
        {
            id: 'css',
            title: 'CSS/Tailwind',
            // level: 'Mid-Senior',
        },
        {
            id: 'wordpress',
            title: 'Wordpress',
            // level: 'Mid-Senior',
        },
        {
            id: 'team',
            title: 'Scrum/Team Work',
            // level: 'Mid-Senior',
        },
    ],
};

const hobbiesData: HobbiesBlockProps = {
    type: BlockTypesProps.HOBBIES,
    // options: {},
    value: [
        {
            id: 'research',
            title: 'Research',
            // icon: 'Mid-Senior',
        },
        {
            id: 'traveling',
            title: 'Traveling',
            // icon: 'Mid-Senior',
        },
        {
            id: 'photography',
            title: 'Photography',
            // icon: 'Mid-Senior',
        },
        {
            id: 'music',
            title: 'Music',
            // icon: 'Mid-Senior',
        },
        {
            id: 'biking',
            title: 'Biking',
            // icon: 'Mid-Senior',
        },
        {
            id: 'aid-working',
            title: 'Aid Working',
            // icon: 'Mid-Senior',
        },
    ],
};

const volunteeringData: VolunteeringBlockProps = {
    type: BlockTypesProps.VOLUNTEERING,
    // options: {},
    value: [
        {
            id: 'komak',
            from: '04/2016',
            // to?: string;
            location: 'Tehran, Iran',
            title: 'Website Manager',
            url: 'KomakCharity.com',
            link: 'http://komakcharity.com/',
        },
        {
            id: 'iraneman',
            from: '05/2017',
            // to?: string;
            location: 'Tehran, Iran',
            title: 'Website Manager',
            url: 'IraneMan.org',
            link: 'http://iraneman.org/',
        },
        {
            id: 'houseno4',
            from: '06/2019',
            // to?: string;
            location: 'Tehran, Iran',
            title: 'Website Manager',
            url: 'HouseNo4.com',
            link: 'http://houseno4.org/',
        },
    ],
};

const openSourceData: OpenSourceBlockProps = {
    type: BlockTypesProps.OPEN_SOURCE,
    // options: {},
    value: [
        {
            id: 'elegant-react-native',
            title: 'Maintaining "React Native Elegant" with Iran React Community',
            link: 'https://github.com/iran-react-community/elegant-react-native',
        },
        {
            id: 'iran-react-community-lecture',
            title: 'Lecturer on Iran React Community meet-up',
        },
        {
            id: 'react-native-eject',
            title: 'react-native-eject !',
        },
        {
            id: 'extension',
            title: 'Doing an extension starter on top of React',
        },
        {
            id: 'swr',
            title: 'SWR',
            link: 'https://github.com/vercel/swr/blob/master/examples/infinite-scroll',
        },
        {
            id: 'nextjs-wp',
            title: 'Nextjs Commerce for WP',
        },
    ],
};

const EducationData: EducationBlockProps = {
    type: BlockTypesProps.EDUCATION,
    value: [
        {
            id: 'Mohajer',
            title: 'Associate degree',
            university: 'Mohajer Technical University of Isfahan',
            field: '■ Software Engineering',
            from: '2010',
            to: '2012',
        },
    ],
};

export default {
    headerData,
    experienceData,
    skillsData,
    hobbiesData,
    volunteeringData,
    openSourceData,
    EducationData,
};
