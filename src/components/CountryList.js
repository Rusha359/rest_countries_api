import React, { useCallback, useEffect, useState } from 'react';
import { withErrorBoundary } from 'react-error-boundary';
import axios from 'axios';
import { Card } from 'antd';

import CountryTable from './CountryTable';
import { Loading } from './Loading';
import CountryDetails from './CountryDetails';

const API_BASE_URL = 'https://restcountries.com/v3.1/';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}all?fields=name,flags,cca3`);
      setCountries(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setLoading(false);
    }
  }, []);

  const handleCountryClick = useCallback(async (cca3) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}alpha/${cca3}`);
      setActiveCountry(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching country details:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div style={{ display: 'flex', flex: 1, paddingLeft: '30px' }}>
      <CountryTable
        countries={countries}
        activeCountry={activeCountry}
        handleCountryClick={handleCountryClick}
      />
      <div style={{ flex: '2' }}>
        {loading ? (
          <Loading text={'...Loading'} />
        ) : (
          activeCountry &&
          activeCountry.length > 0 && (
            <Card title={activeCountry[0]?.name?.common}>
              {activeCountry[0] && (
                <CountryDetails
                  activeCountry={activeCountry}
                  handleCountryClick={handleCountryClick}
                />
              )}
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default withErrorBoundary(
  React.memo(CountryList, {
    fallbackRender: () => <div>Что-то сломалось </div>,
  })
);
