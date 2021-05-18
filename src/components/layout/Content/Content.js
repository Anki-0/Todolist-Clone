import React from 'react';
import { Tasks } from '../../Tasks';

import { Sidebar } from '../Sidebar/Sidebar';

export const Content = (props) => {
  return (
    <section className="Content">
      <Sidebar />
      <Tasks />
    </section>
  );
};
