import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import HardSkills from './HardSkills';
import SkillsUpgrade from './SkillsUpgrade';

import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/" element={<SkillsUpgrade />} />
            <Route path="hardSkills" element={<HardSkills />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
