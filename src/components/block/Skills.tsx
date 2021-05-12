import { FC } from 'react';

import { SkillBlockValueProps } from 'types/components';

const Skills: FC<{ values: SkillBlockValueProps[] }> = ({ values }) => {
    console.log(values);
    return (
        <>
            {values.map(({ id, title, level }) => (
                <div className="mb-8 flex transform scale-90" key={id}>
                    {id}
                    {title}
                    {level}
                    {/* <div className="w-1/4">
                        <p className="leading-normal text-md text-gray-650">
                            {from} - {to ? to : 'present'}
                            <br />
                            <small>{location}</small>
                        </p>
                    </div>
                    <div className="w-3/4">
                        <h3 className="text-lg font-semibold text-gray-700 leading-snugish mb-4">
                            {title}
                            <br />
                            <small>{company}</small>
                        </h3>
                        <div
                            className="mt-2.1 text-md text-gray-700 leading-normal mb-2"
                            dangerouslySetInnerHTML={{ __html: text }}
                        />
                        {projects?.length && (
                            <ul className="list-disc pl-8">
                                {projects.map((p, i) => (
                                    <li key={`i_${i}`}>{p}</li>
                                ))}
                            </ul>
                        )} */}
                    {/* </div> */}
                </div>
            ))}
        </>
    );
};
export default Skills;
