import { FC } from 'react';

import HeadLine from '../HeadLine';

import HeaderBioBotttom from './HeaderBioBottom';

import { HeaderProps, HeaderIconProps, BlockTypesProps } from 'types/components';

const Header: FC<HeaderProps> = ({ avatar, title, socials, bio, description }) => {
    const socials_ = socials && Object.keys(socials).length !== 0 ? Object.entries(socials) : null;

    return (
        <div className="mx-auto flex flex-row py-10">
            <div className="w-1/4 text-center flex flex-col justify-center items-center">
                {avatar && (
                    <div className="w-36 h-36 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                        <img src={avatar} className="rounded-lg" />
                    </div>
                )}
                <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{title}</h2>
                </div>
                {description && (
                    <div className="flex flex-col items-center text-center justify-center">
                        {description}
                    </div>
                )}
            </div>
            <div className="w-3/4 flex flex-col sm:pl-4 sm:border-l border-gray-200 sm:border-t-0 border-t print:border-l-0">
                {bio && (
                    <>
                        <HeadLine type={BlockTypesProps.PROFILE} />

                        <div className="sm:w-5/6 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">{bio}</p>
                        </div>
                    </>
                )}
                <div className="flex flex-wrap">
                    {socials_?.length &&
                        socials_.map((social) => (
                            <HeaderBioBotttom
                                key={social[0]}
                                text={social[1]}
                                type={social[0] as HeaderIconProps}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
