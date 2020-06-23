import React from 'react';

const usePeriod = (defaultPeriod = 'day') => {
    const [period, setPeriod] = React.useState(defaultPeriod);
    const handleChangePeriod = (event) => {
        const { value } = event.target;
        setPeriod(value);
    }
    return [period, handleChangePeriod];
};

export default usePeriod;