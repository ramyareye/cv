import { FC } from 'react';

import { SkillBlockValueProps } from 'types/components';

const Skills: FC<{ values: SkillBlockValueProps[] }> = ({ values }) => {
    return (
        <div className="flex flex-wrap">
            {values.map(({ id, title, level }) => (
                <div className="w-1/4 text-center mb-6" key={id}>
                    <p className="leading-normal text-md text-gray-650">
                        {title}
                        <br />
                        <small className="font-bold text-main">{level}</small>
                    </p>
                </div>
            ))}
        </div>
    );
};
export default Skills;
