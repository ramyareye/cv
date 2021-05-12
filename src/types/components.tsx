export type HeaderIconProps = 'phone' | 'email' | 'website';
export type SocialProps = {
    [index in HeaderIconProps]: string;
};
export type LinkProps = 'call' | 'mail' | 'link';
export type HeaderProps = {
    bio?: string;
    title: string;
    avatar?: string;
    description?: string;
    socials?: SocialProps;
};
export type HeaderSocialProps = {
    type: HeaderIconProps;
    text: string;
};

export enum BlockTypesProps {
    PROFILE = 'profile',
    EXPERIENCE = 'experience',
    EDUCATION = 'education',
    SKILLS = 'skills',
    HOBBIES = 'hobbies',
    VOLUNTEERING = 'volunteering',
}

export type HeadLineTitleProps = { [index in BlockTypesProps]: string };

export type HeadLineProps = {
    type: BlockTypesProps;
    padded?: boolean;
    className?: string;
};

interface BlockValueProps {
    id: string | number;
}

export interface BlockProps {
    type: BlockTypesProps;
    value: BlockValueProps[];
}

export interface ExperienceBlockValueProps extends BlockValueProps {
    from: string;
    to?: string;
    location: string;
    title: string;
    company: string;
    text: string;
    projects?: string[];
}

export interface ExperienceBlockProps extends BlockProps {
    type: BlockTypesProps.EXPERIENCE;
    value: ExperienceBlockValueProps[];
}

export interface SkillBlockValueProps extends BlockValueProps {
    title: string;
    level: string;
}

export interface SkillBlockProps extends BlockProps {
    type: BlockTypesProps.SKILLS;
    value: SkillBlockValueProps[];
}

export type AllBlockProps = ExperienceBlockProps | SkillBlockProps;
