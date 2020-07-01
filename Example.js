import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import {View} from 'react-native';

const lookup = {
  def: [{ id: '0', text: 'Choose your model' }],
  mazda: [
    { id: '1', text: '1' },
    { id: '2', text: '2' },
    { id: '3', text: '3' },
    { id: '4', text: '4' },
    { id: '5', text: '5' },
  ],
  bmv: [
    { id: 'a', text: 'a' },
    { id: 'b', text: 'b' },
    { id: 'c', text: 'c' },
    { id: 'd', text: 'd' },
    { id: 'e', text: 'e' },
  ],
};

function Example() {
  const [dataValue, setDataValue] = useState('def');
  const options = useMemo(() => lookup[dataValue], [dataValue]);

  const onChange = ({ target: { value } }) => {
    setDataValue(value);
  };

  return (
    <View>
      <select onChange={onChange}>
        <option value='def'>Choose your car</option>
        <option value='mazda'>Mazda</option>
        <option value='bmv'>BMV</option>
      </select>
      <hr />
      

      <select disabled={dataValue === 'def'}>
        {[...lookup.def, ...options].map(({ id, text }) => (
          <option key={id} value={id}>
            {text}
          </option>
        ))}
      </select>
    </View>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));

export default Example;