import { FC } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { VolunteeringBlockValueProps } from 'types/components';

const Volunteering: FC<{ values: VolunteeringBlockValueProps[] }> = ({ values }) => {
    return (
        <>
            {values.map(({ id, from, to, location, title, url, link }) => (
                <div className="mb-8 flex transform scale-90" key={id}>
                    <div className="w-1/4">
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
                            <small>
                                {url}
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
                            </small>
                        </h3>
                    </div>
                </div>
            ))}
        </>
    );
};
export default Volunteering;
