import { VFC } from 'react';

import HeadLine from '../HeadLine';

import Skills from './Skills';
import Hobbies from './Hobbies';
import Education from './Education';
import OpenSources from './OpenSources';
import Experiences from './Experiences';
import Volunteerings from './Volunteerings';

import { BlockTypesProps, AllBlockProps } from 'types/components';

const Block: VFC<AllBlockProps> = (props) => {
    return (
        <div className="mb-8">
            <HeadLine type={props.type} className="mb-8" />

            {props.type === BlockTypesProps.SKILLS && <Skills values={props.value} />}
            {props.type === BlockTypesProps.HOBBIES && <Hobbies values={props.value} />}
            {props.type === BlockTypesProps.EDUCATION && <Education values={props.value} />}
            {props.type === BlockTypesProps.EXPERIENCE && <Experiences values={props.value} />}
            {props.type === BlockTypesProps.OPEN_SOURCE && <OpenSources values={props.value} />}
            {props.type === BlockTypesProps.VOLUNTEERING && <Volunteerings values={props.value} />}
        </div>
    );
};

export default Block;
