import { FC } from 'react';
import cn from 'classnames';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

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
                <Icon icon={faEnvelope} />
            ) : type === 'education' ? (
                <Icon icon={faChrome} />
            ) : type === 'skills' ? (
                <Icon icon={faChrome} />
            ) : type === 'hobbies' ? (
                <Icon icon={faChrome} />
            ) : type === 'volunteering' ? (
                <Icon icon={faChrome} />
            ) : null}
            <div className="min-w-[fit-content] font-bold">{titles[type]}</div>
            <div className="ml-4 border-solid border-b-2 border-main w-full h-0" />
        </div>
    );
};

export default HeadLine;
