import { FC } from 'react';

import { Header, Block, Footer } from 'components';

import data from 'data';

// import { ExperienceBlockValueProps, SkillBlockValueProps } from 'types/components';

import 'styles/index.css';

const App: FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-200 py-20">
            <div className="max-w-screen-lg mx-auto bg-white shadow-sm p-8">
                <Header {...data.headerData} />

                <Block type={data.experienceData.type} value={data.experienceData.value} />
                <Block type={data.skillsData.type} value={data.skillsData.value} />
                {/* <Block type="education" />
                <Block type="skills" />
                <Block type="hobbies" />
                <Block type="volunteering" /> */}

                <Footer />
            </div>
        </div>
    );
};

export default App;
