import './App.css';
import React, { useState, useEffect } from 'react';
import Routing from './routing/Routing';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import instanceBaseurl from './config/Baseurl';

function App() {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const userid = Cookies.get("unknowuser");

    if (userid) {

    }
    else {
      const idCreate = uuidv4();
      Cookies.set("unknowuser", idCreate);
      const data = {
        unknown: idCreate
      }
      instanceBaseurl.post('/auth/unknow/register', data).then((res) => {
      }).catch((err) => {
      })
    }
  }, [])

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
