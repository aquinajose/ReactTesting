import React from "react";
import Counter from '../Counter';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders correctly",()=>{
   const {getByTestId} = render(<Counter />);
   const headerEl = getByTestId("header");

   expect(headerEl.textContent).toBe("My Counter")
});

test("counter initially start with text of 0",()=>{
    const {getByTestId} = render(<Counter />);
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0")
})

test("inout contains initial value of 1",()=>{
    const {getByTestId}= render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1")
})

test("add button renders with +",()=>{
    const {getByTestId}= render(<Counter />);

    const addBtn = getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+")

})
test("subtract button renders with +",()=>{
    const {getByTestId}= render(<Counter />);

    const subtractBtn = getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-")

});

test("Changing value of input works correctly",()=>{
    const {getByTestId}= render(<Counter />);
    const inputEl = getByTestId("input");
    fireEvent.change(inputEl,{
        target:{
            value:5
        }
    });
    expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to counter",()=>{
    const {getByTestId}= render(<Counter />);
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("1")
});
test("click on minus btn subtarcts 1 to counter",()=>{
    const {getByTestId}= render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0")
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-1")
});
test("click on plus btn adds inputvalue to counter",()=>{
    const {getByTestId}= render(<Counter />);
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
    const inputEl = getByTestId("input");
    fireEvent.change(inputEl,{
        target:{
            value:6
        }
    });
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe("6")
});
test("click on minus btn subtarcts inputValue to counter",()=>{
    const {getByTestId}= render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
    const inputEl = getByTestId("input");
    fireEvent.change(inputEl,{
        target:{
            value:6
        }
    });

    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe("-6")
});

test("counter contain correct className",()=>{
    const {getByTestId}= render(<Counter />);
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const addBtn = getByTestId("add-btn");
    expect(counterEl.className).toBe("");
   
    fireEvent.change(inputEl,{
        target:{
            value:50
        }
    });
    expect(counterEl.className).toBe("");
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    expect(counterEl.className).toBe("green");
    const subtractBtn = getByTestId("subtract-btn");
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterEl.className).toBe("red");
})