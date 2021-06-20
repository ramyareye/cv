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
    OPEN_SOURCE = 'open-source',
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
    level?: string;
}

export interface SkillBlockProps extends BlockProps {
    type: BlockTypesProps.SKILLS;
    value: SkillBlockValueProps[];
}

export interface HobbiesBlockValueProps extends BlockValueProps {
    title: string;
    icon?: string;
}

export interface HobbiesBlockProps extends BlockProps {
    type: BlockTypesProps.HOBBIES;
    value: HobbiesBlockValueProps[];
}

export interface VolunteeringBlockValueProps extends BlockValueProps {
    from: string;
    to?: string;
    location: string;
    title: string;
    url: string;
    link?: string;
}

export interface VolunteeringBlockProps extends BlockProps {
    type: BlockTypesProps.VOLUNTEERING;
    value: VolunteeringBlockValueProps[];
}

export interface OpenSourceBlockValueProps extends BlockValueProps {
    title: string;
    link?: string;
}

export interface OpenSourceBlockProps extends BlockProps {
    type: BlockTypesProps.OPEN_SOURCE;
    value: OpenSourceBlockValueProps[];
}

export interface EducationBlockValueProps extends BlockValueProps {
    title: string;
    university: string;
    field: string;
    from: string;
    to: string;
}

export interface EducationBlockProps extends BlockProps {
    type: BlockTypesProps.EDUCATION;
    value: EducationBlockValueProps[];
}

export type AllBlockProps =
    | ExperienceBlockProps
    | SkillBlockProps
    | HobbiesBlockProps
    | VolunteeringBlockProps
    | OpenSourceBlockProps
    | EducationBlockProps;
