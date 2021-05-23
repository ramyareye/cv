import { FC } from 'react';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import Icon from '../Icon';

import { HeaderSocialProps } from 'types/components';

const HeaderBioBotttom: FC<HeaderSocialProps> = ({ type, text }) => {
    const onClick = () => {
        let url = text;

        if (type === 'phone') {
            url = 'tel:' + url;
        } else if (type === 'email') {
            url = 'mailto:' + url;
        }

        window.open(url);
    };

    return (
        <div className="flex mr-6 cursor-pointer mt-6" onClick={onClick}>
            {type === 'phone' ? (
                <Icon icon={faPhone} />
            ) : type === 'email' ? (
                <Icon icon={faEnvelope} />
            ) : type === 'website' ? (
                <Icon icon={faChrome} />
            ) : null}
            <div>{text}</div>
        </div>
    );
};

export default HeaderBioBotttom;
