import React from 'react';
import DistributorPage from '../../components/DistributorPage';

const cairo = () => {
  return (
    <DistributorPage title="Cairo Distributors">
      <h2>Head Office</h2>
      <p>
        6 Al Nile Al Abyad St, Lebanon Sq, Mohandseen - Giza, Arab Republic of
        Egypt.
      </p>
      <p>Tele / Fax : +20 233027478 - +20 233046649</p>
      <p>
        E-Mail:{' '}
        <a href="mailto:alhandsya@alhandsya.com">alhandsya@alhandsya.com</a>
      </p>
      <h3>Branch office & Stores</h3>
      <p>
        2 A Hasab El Nabi St – Faisal Street - Giza, Arab Republic of Egypt.
      </p>
    </DistributorPage>
  );
};

export default cairo;
