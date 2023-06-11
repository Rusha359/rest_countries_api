import React, { useMemo } from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Изображение флага',
    dataIndex: 'flag',
    key: 'flag',
    render: (flag) => <img src={flag} alt="Flag" style={{ width: '30px' }} />,
  },
  {
    title: 'Название страны',
    dataIndex: 'name',
    key: 'name',
  },
];

const CountryTable = ({ countries, activeCountry, handleCountryClick }) => {
  const countryData = useMemo(() => {
    return countries.map((country) => ({
      key: country.cca3,
      flag: country.flags?.png,
      name: country.name?.common,
    }));
  }, [countries]);
  return (
    <Table
      dataSource={countryData}
      columns={columns}
      pagination={true}
      rowClassName={(record) => (activeCountry?.[0].cca3 === record.key ? 'activ-country' : '')}
      onRow={(record) => ({
        onClick: () => handleCountryClick(record.key),
        style: {
          cursor: 'pointer',
          backgroundColor: activeCountry?.[0]?.cca3 === record.key ? '#e6f7ff' : '',
        },
      })}
    />
  );
};

export default React.memo(CountryTable);
