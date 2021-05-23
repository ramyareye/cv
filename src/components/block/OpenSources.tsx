import { FC } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OpenSourceBlockValueProps } from 'types/components';

const OpenSource: FC<{ values: OpenSourceBlockValueProps[] }> = ({ values }) => {
    return (
        <ul className="ml-10 list-disc">
            {values.map(({ id, title, link }) => (
                <li key={id} className="text-sm ">
                    {title}
                    {link && (
                        <FontAwesomeIcon
                            icon={faLink}
                            className="text-main ml-2 cursor-pointer"
                            size="lg"
                            onClick={() => {
                                window.open(link);
                            }}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
};
export default OpenSource;
