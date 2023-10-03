import React, { useState, useRef } from "react";

function GApp() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const [draggedEl, setDraggedEl] = useState(null);
  const [dragShift, setDragShift] = useState(null);
  const dotRef = useRef();

  const makeDraggable = el => {
    el.style.pointerEvents = "none";
    el.style.position = "absolute";
    el.style.top = mousePos[1] - dragShift[1] + "px";
    el.style.left = mousePos[0] - dragShift[0] + "px";
  };

  const getShift = (e, el) => {
    let shiftX = e.clientX - el.getBoundingClientRect().left;
    let shiftY = e.clientY - el.getBoundingClientRect().top;
    return { shiftX, shiftY };
  };

  const dotHandleMouseDown = e => {
    e.preventDefault();
    if (draggedEl === null || draggedEl === e.target) {
      setDraggedEl(e.target);
    }
  };
  const dragElement = e => {
    if (draggedEl === null) return;
    e.preventDefault();
    const { shiftX, shiftY } = getShift(e, draggedEl);
    if (dragShift === null) {
      setDragShift([shiftX, shiftY]);
    } else {
      makeDraggable(draggedEl);
    }
  };

  const windowHandleMouseUp = e => {
    draggedEl.style.pointerEvents = "inherit";
    draggedEl.style.position = "static";
    if (e.target.classList.contains("box")) {
      e.target.append(draggedEl);
    }
    setDraggedEl(null);
    setDragShift(null);
  };

  const windowHandleMouseMove = e => {
    dragElement(e);
    setMousePos([e.pageX, e.pageY]);
  };

  const boxHandleMouseOver = e => {
    if (draggedEl && e.target.classList.contains("box")) {
      e.target.classList.add("box-drag-over");
    }
  };

  const boxHandleMouseLeave = e => {
    if (draggedEl && e.target.classList.contains("box")) {
      e.target.classList.remove("box-drag-over");
    }
  };

  return (
    <div onMouseMove={windowHandleMouseMove} onMouseUp={windowHandleMouseUp}>
      <div
        onMouseLeave={boxHandleMouseLeave}
        onMouseEnter={boxHandleMouseOver}
        className="box box1"
        data-index="1"
      />
      <div
        onMouseLeave={boxHandleMouseLeave}
        onMouseEnter={boxHandleMouseOver}
        className="box box2"
        data-index="2"
      >
        <div ref={dotRef} onMouseDown={dotHandleMouseDown} className="dot" />
      </div>
      <h1>
        {mousePos[0]}:{mousePos[1]}
      </h1>
    </div>
  );
}

export default GApp;
