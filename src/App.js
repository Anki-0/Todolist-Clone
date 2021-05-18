import './App.scss';

import { Content } from './components/layout';
import { Header } from './components/layout';
import { ProjectsProvider, SelectedProjectProvider } from './context';

const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
