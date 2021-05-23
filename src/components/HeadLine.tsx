import { FC } from 'react';
import cn from 'classnames';
import {
    faTasks,
    faUser,
    faLaptopCode,
    faUserNinja,
    faInfinity,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';

import Icon from './Icon';

import { HeadLineProps, HeadLineTitleProps } from 'types/components';

const HeadLine: FC<HeadLineProps> = ({ type, padded, className }) => {
    const titles: HeadLineTitleProps = {
        'profile': 'Profile',
        'experience': 'Work Experience',
        'education': 'Education',
        'skills': 'Skills',
        'hobbies': 'Hobbies',
        'volunteering': 'Volunteering',
        'open-source': 'Open Source',
    };

    return (
        <div
            className={cn('flex flex-row justify-center items-center', className && className, {
                'p-4': padded,
            })}
        >
            {type === 'profile' ? (
                <Icon icon={faUser} />
            ) : type === 'experience' ? (
                <Icon icon={faLaptopCode} />
            ) : type === 'skills' ? (
                <Icon icon={faTasks} />
            ) : type === 'hobbies' ? (
                <Icon icon={faCheck} />
            ) : type === 'volunteering' ? (
                <Icon icon={faInfinity} />
            ) : type === 'open-source' ? (
                <Icon icon={faUserNinja} />
            ) : null}
            <div className="min-w-[fit-content] font-bold">{titles[type]}</div>
            <div className="ml-4 border-solid border-b-2 border-main w-full h-0" />
        </div>
    );
};

export default HeadLine;
