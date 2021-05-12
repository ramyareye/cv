import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderIcon: FC<{ icon: IconProp }> = ({ icon }) => {
    return <FontAwesomeIcon icon={icon} className="text-main mr-2" size="lg" />;
};

export default HeaderIcon;
