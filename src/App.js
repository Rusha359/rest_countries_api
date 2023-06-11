import { withErrorBoundary } from 'react-error-boundary';

import './App.css';

import CountryList from './components/CountryList';

const App = () => {
  return (
    <div className="App">
      <CountryList />
    </div>
  );
};

export default withErrorBoundary(App, {
  fallback: <div>Ошибка</div>,
});
