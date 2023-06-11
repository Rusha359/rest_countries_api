import React from 'react';

const CountryDetails = ({ activeCountry, handleCountryClick }) => {
  return (
    <React.Fragment>
      <p>
        <strong>Название страны:</strong> {activeCountry[0].name?.common}
      </p>
      <p>
        <strong>Изображение флага:</strong>{' '}
        <img
          alt={activeCountry[0].flags?.alt}
          src={activeCountry[0].flags?.png}
          style={{ width: '30px' }}
        />
      </p>
      <p>
        <strong>Изображение герба:</strong>{' '}
        <img
          alt={activeCountry[0].coatOfArms?.alt}
          src={activeCountry[0].coatOfArms?.png}
          style={{ width: '30px' }}
        />
      </p>
      {activeCountry[0].capital && activeCountry[0].capital.length > 0 && (
        <p>
          <strong>Столица:</strong> {activeCountry[0].capital[0]}
        </p>
      )}
      <p>
        <strong>Регион:</strong> {activeCountry[0].region}
      </p>
      <p>
        <strong>Территория :</strong> {activeCountry[0].area}
      </p>
      <p>
        <strong>Население:</strong> {activeCountry[0].population}
      </p>
      <p>
        <strong>Валюта:</strong>{' '}
        {activeCountry[0].currencies && Object.keys(activeCountry[0].currencies).join(', ')}
      </p>
      {activeCountry[0].borders && activeCountry[0].borders.length > 0 && (
        <p>
          <strong>Список соседних стран:</strong>
          {activeCountry[0].borders.map((border) => (
            <span
              key={border}
              style={{
                cursor: 'pointer',
                marginLeft: '5px',
                textDecoration: 'underline',
              }}
              onClick={() => handleCountryClick(border)}
            >
              {border}
            </span>
          ))}
        </p>
      )}
    </React.Fragment>
  );
};

export default React.memo(CountryDetails);
