import React, { useState } from "react";
import Slider from "../Slider/Slider";
import EditBarItem from "./EditBarItem";

const Editor = () => {
  const edit_option = [
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Grayscale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Hue Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 25,
      },
      unit: "px",
    },
  ];

  const [editOption, setEditOption] = useState(edit_option);
  const [selectedItem, setSelectedItem] = useState(0);

  const activeItem = editOption[selectedItem];

  // function for select the specific option
  const valChangeHandler = (event) => {
    setEditOption((prevOption) => {
      return prevOption.map((curOption, index) => {
        if (index !== selectedItem) {
          return curOption;
        }
        return { ...curOption, value: event.target.value };
      });
    });
  };

  // function for control styling of image
  const getImgStyle = () => {
    const filters = editOption.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });

    return { filter: filters.join(" ") };
  };
  return (
    <>
      <div className="main-container">
        <div className="img" style={getImgStyle()} />
        <Slider
          minVal={activeItem.range.min}
          maxVal={activeItem.range.max}
          value={activeItem.value}
          changeHandler={valChangeHandler}
        />
        <div className="sidebar">
          {editOption.map((item, index) => {
            return (
              <EditBarItem
                itemName={item.name}
                key={index}
                activeItem={index === selectedItem}
                activeChangeHandler={() => setSelectedItem(index)}
              />
            );
          })}
        </div>
        
      </div>
    </>
  );
};

export default Editor;
