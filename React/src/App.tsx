import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import TextArea from 'devextreme-react/text-area';
import notify from 'devextreme/ui/notify';

const longText = 'Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The Greater Tokyo Area is the most populous metropolitan area in the world.';

function App(): JSX.Element {
  const onValueChanged = useCallback(() => {
    notify('The value has been changed');
  }, []);

  return (
    <div className="main">
      <TextArea
        value={longText}
        minHeight={50}
        maxHeight={300}
        autoResizeEnabled={true}
        maxLength={500}
        valueChangeEvent="keyup"
        onValueChanged={onValueChanged}
        label="Country"
      />
    </div>
  );
}

export default App;
