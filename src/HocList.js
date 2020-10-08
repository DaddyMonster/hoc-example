import React, { useState } from "react";

const HocList = ({ list, component: Component }) => {
  const [mapList, setMapList] = useState(list);

  const addList = (item) => setMapList([...mapList, item]);
  const removeList = (idx) => setMapList(mapList.filter((x, i) => i !== idx));

  return (
    <Component addList={addList} removeList={removeList} mapList={mapList} />
  );
};

export default HocList;



