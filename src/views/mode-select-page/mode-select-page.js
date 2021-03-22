import React from 'react';
import { useEffect } from 'react';
import './modeselectpage.scss';


function ModeSelectPage() {

  const modeClick = (e) => {

    console.log(e.modeClick)
  }

  useEffect(() => {
    // console.log(modeClick)
  }, [])



  return (
    <div>
      <div className="navbar">
        <h2>Mode Page</h2>
      </div>
      <div className="buttons">
        <button className="button" onClick={modeClick}>Mod1</button>
        <button className="button" onClick={modeClick}>Mod2</button>
        <button className="button" onClick={modeClick}>Mod3</button>
      </div>
    </div>
  );
}

export default ModeSelectPage;