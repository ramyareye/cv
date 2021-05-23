import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faPlane,
    faCamera,
    faMusic,
    faBiking,
    faUserInjured,
} from '@fortawesome/free-solid-svg-icons';

import { HobbiesBlockValueProps } from 'types/components';

const Hobbies: FC<{ values: HobbiesBlockValueProps[] }> = ({ values }) => {
    return (
        <div className="flex flex-wrap">
            {values.map(({ id, title }) => (
                <div className="w-1/4 mb-6" key={id}>
                    <p className="leading-normal text-md text-gray-650 text-center">
                        {id === 'research' && (
                            <FontAwesomeIcon icon={faSearch} className="text-main mr-2" size="lg" />
                        )}
                        {id === 'traveling' && (
                            <FontAwesomeIcon icon={faPlane} className="text-main mr-2" size="lg" />
                        )}
                        {id === 'photography' && (
                            <FontAwesomeIcon icon={faCamera} className="text-main mr-2" size="lg" />
                        )}
                        {id === 'music' && (
                            <FontAwesomeIcon icon={faMusic} className="text-main mr-2" size="lg" />
                        )}
                        {id === 'biking' && (
                            <FontAwesomeIcon icon={faBiking} className="text-main mr-2" size="lg" />
                        )}
                        {id === 'aid-working' && (
                            <FontAwesomeIcon
                                icon={faUserInjured}
                                className="text-main mr-2"
                                size="lg"
                            />
                        )}
                        <p>{title}</p>
                    </p>
                </div>
            ))}
        </div>
    );
};
export default Hobbies;
