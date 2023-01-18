
import {render, screen} from "@testing-library/react";
import Counter from "./Counter";

// Unit Testing
// Integration tests

test("if increament button exists", ()=>{

    // render the counter component.
    render(<Counter />);

    // Select increament button and text box.
    const incButton = screen.getByTestId("btnInc");
    
    // Check if button exists.
    expect(incButton).toBeInTheDocument();
})