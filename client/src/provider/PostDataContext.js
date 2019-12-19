import React, { useState, useEffect } from 'react';

import api from "../util/API";

const PostDataContext = React.createContext([{}, () => {}]);

const PostDataProvider = (props) => {
    const [data, setData] = useState();
    useEffect(() => {
      api
        .read()
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);
  return (
    <PostDataContext.Provider value={[data, setData]}>
      {props.children}
    </PostDataContext.Provider>
  );
};

export { PostDataContext, PostDataProvider };