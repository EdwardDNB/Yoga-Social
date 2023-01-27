import React, {useState} from 'react';

const Status = props => {
  let [active, setActive] = useState(false);
  let [text, setText] = useState(props.ProfileStatus);

  function activation() {
    setActive(true);
  }

  function deactivation() {
    setActive(false);
    props.setProfileStatus(text);
  }

  function pushText(e) {
    setText(e.currentTarget.value);
  }

  return (
    <div>
      {!active && (
        <div>
          <span onClick={activation}>{props.ProfileStatus || 'You status'}</span>
        </div>
      )}
      {active && (
        <div>
          <input value={text} onBlur={deactivation} onChange={pushText} />
        </div>
      )}
    </div>
  );
};
export default Status;
