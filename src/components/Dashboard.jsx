import React from 'react'
import DashboardLayout from './layout/DashboardLayout';

import ScoreReport from './Dashboard/ScoreReport';
import History from './Dashboard/History';
import NbScore from './Dashboard/NbScore';
import Summary from './Dashboard/Summary';


const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <section id="score-section" className="mb-16">
          <ScoreReport />
        </section>

        <section id="summary-section" className="mb-16">
          <Summary />
        </section>

        <section id="history-section" className="mb-16">
          <History />
        </section>
        <section id="nb-section" className="mb-16">
          <NbScore />
        </section>
      </DashboardLayout>
    </>
  );
}

export default Dashboard