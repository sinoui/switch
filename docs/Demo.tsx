import React, { useState, useCallback } from 'react';
import Switch from '../src';

export default function Demo() {
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback((event) => {
    setChecked(event.target.checked);
  }, []);

  return <Switch checked={checked} value="switch1" onChange={handleChange} />;
}
