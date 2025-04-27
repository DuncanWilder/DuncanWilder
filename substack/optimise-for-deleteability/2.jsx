// component.js
function ComponentV1() {
  const [count, setCount] = useState(0);

  return <h1>Version 1 - {count}</h1>
}

// component-v2.js
function ComponentV2() {
  const [count, setCount] = useState(0);

  return <h1>Version 2 - {count}</h1>
}

// component/index.js
import ComponentV1 from './component';
import ComponentV2 from './component-v2';

let ComponentToExport = ComponentV1;

if (someFeatureFlag) {
  ComponentToExport = ComponentV2;
}

export default ComponentToExport;
