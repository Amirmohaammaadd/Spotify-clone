import { Tree } from "antd";
import { useState } from "react";
import data from "../src/response.json";

const Tets = () => {
  //   console.log(data.data.menuList[0].menuTitle);

  const mapp = data.data.menuList.map((list, index) => ({
    title: list.menuTitle,
    key: list.menuTitle + index.toString(),

    children: list.subMenu.map((item, index) => ({
      title: item.subMenuTitle,
      key: list.menuTitle + item.subMenuTitle,

        children: item.objects.map((option, index) => ({
          title: option.objectName,
          key: item.subMenuTitle + option.objectName ,
        })),
    })),
  }));

  const [expandedKeys, setExpandedKeys] = useState(["A", "B"]);
  const [checkedKeys, setCheckedKeys] = useState(["B-3"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };
  return (
    <div>
      <Tree
        checkable
        onExpand={onExpand}
        // expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        treeData={mapp}
      />
    </div>
  );
};

export default Tets;
