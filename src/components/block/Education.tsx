import { FC } from 'react';

import { EducationBlockValueProps } from 'types/components';

const Education: FC<{ values: EducationBlockValueProps[] }> = ({ values }) => {
    return (
        <>
            {values.map(({ id, from, to, university, title, field }) => (
                <div className="mb-8 flex transform scale-90" key={id}>
                    <div className="w-1/4">
                        <p className="leading-normal text-md text-gray-650">
                            {from} - {to ? to : 'present'}
                            <br />
                            <small>{title}</small>
                        </p>
                    </div>
                    <div className="w-3/4">
                        <h3 className="text-lg font-semibold text-gray-700 leading-snugish mb-4">
                            {field}
                            <br />
                            <small>{university}</small>
                        </h3>
                    </div>
                </div>
            ))}
        </>
    );
};
export default Education;
