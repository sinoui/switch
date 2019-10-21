import React, { useState, useCallback } from 'react';
import Switch from '../src/Switch';

export default function SwitchDemo() {
  const [checked, setChecked] = useState<{ [name: string]: boolean }>({
    switch3: true,
  });
  const handleChange = useCallback(
    (event, name) => {
      const newChecked = { ...checked, [name]: event.target.checked };
      setChecked(newChecked);
    },
    [checked],
  );
  return (
    <>
      <Switch
        checked={checked.switch1}
        value="switch1"
        onChange={(event) => handleChange(event, 'switch1')}
      />
      <Switch
        checked={checked.switch2}
        value="switch2"
        onChange={(event) => handleChange(event, 'switch2')}
        color="accent"
      />
      <Switch
        checked={checked.switch3}
        value="switch3"
        onChange={(event) => handleChange(event, 'switch3')}
        color="success"
      />
      <Switch
        checked={checked.switch4}
        value="switch4"
        onChange={(event) => handleChange(event, 'switch4')}
        color="error"
      />
      <Switch
        checked={checked.switch5}
        value="switch5"
        onChange={(event) => handleChange(event, 'switch5')}
        color="info"
      />
      <Switch
        checked={checked.switch6}
        value="switch6"
        onChange={(event) => handleChange(event, 'switch6')}
        color="warning"
      />
    </>
  );
}
