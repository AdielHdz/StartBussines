"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addMinMaxAmount } from "../../Redux/Fetching/Filters/FiltersSlice";
export const RangeSlider = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
  minOrMax,
}) => {
  //estados de min y max value
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const progressRef = useRef(null);
  const dispatch = useDispatch();
  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
        dispatch(
          addMinMaxAmount({
            minOrMax: minOrMax,
            rangeMin: e.target.value,
            rangeMax: maxValue,
          })
        );
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
        dispatch(
          addMinMaxAmount({
            minOrMax: minOrMax,
            rangeMin: e.target.value,
            rangeMax: maxValue,
          })
        );
      }
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
        dispatch(
          addMinMaxAmount({
            minOrMax: minOrMax,
            rangeMax: e.target.value,
            rangeMin: minValue,
          })
        );
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
        dispatch(
          addMinMaxAmount({
            minOrMax: minOrMax,
            rangeMax: e.target.value,
            rangeMin: minValue,
          })
        );
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (minValue / max) * step + "%";
    dispatch(
      addMinMaxAmount({
        minOrMax: minOrMax,
        rangeMin: minValue,
        rangeMax: maxValue,
      })
    );
  }, [minValue, maxValue, minOrMax]);

  console.log(maxValue);
  console.log(minValue);

  return (
    <div>
      <div className="flex justify-between items-center my-6">
        <div className="rounded-md">
          <span className="p-2 font-semibold">Min</span>
          <input
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
            className="w-24 rounded-md border border-gray-400"
          />
        </div>
        <div className="ml-2 font-semibold text-lg"> - </div>
        <div className="rounded-md">
          <span className="p-2 font-semibold">Max</span>
          <input
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
            className="w-24 rounded-md border border-gray-400"
          />
        </div>
      </div>

      <div className="mt-3 mb-4">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div
            className="progress absolute h-1 bg-green-300 rounded"
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative">
          <input
            onChange={handleMin}
            type="range"
            value={minValue}
            min={min}
            step={step}
            max={max}
            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />

          <input
            onChange={handleMax}
            type="range"
            value={maxValue}
            min={min}
            step={step}
            max={max}
            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none left-[-1px]"
          />
        </div>
      </div>
    </div>
  );
};
