import { FC } from 'react';

import { Header, Block, Footer } from 'components';

import data from 'data';

// https://www.kickresume.com/

import 'styles/index.css';

const App: FC = () => {
    return (
        <div className="w-full min-h-screen bg-gray-200 py-20 print:bg-white print:p-4">
            <div className="max-w-screen-lg mx-auto bg-white shadow-sm p-8 print:max-w-full print:p-0 print:shadow-none">
                <Header {...data.headerData} />

                <Block type={data.experienceData.type} value={data.experienceData.value} />
                <Block type={data.skillsData.type} value={data.skillsData.value} />
                <Block type={data.hobbiesData.type} value={data.hobbiesData.value} />
                <Block type={data.volunteeringData.type} value={data.volunteeringData.value} />
                <Block type={data.openSourceData.type} value={data.openSourceData.value} />

                <Footer />
            </div>
        </div>
    );
};

export default App;
