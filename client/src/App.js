import './App.css';
import React, { useState, useEffect } from 'react';
import Routing from './routing/Routing';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import instanceBaseurl from './config/Baseurl';
import Loader from './components/loader/Loader';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userid = Cookies.get("userid");

    if (userid) {

    }
    else {
      const idCreate = uuidv4();
      Cookies.set("userid", idCreate);
      const data = {
        unknown: idCreate
      }
      instanceBaseurl.post('/auth/unknow/register', data).then((res) => {
      }).catch((err) => {
      })
    }
  }, [])

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [])

  return (
    <div className="App">

      {loading ? <>
        <Loader />
      </> : <>
        <Routing />
      </>}
    </div>
  );
}

export default App;
