import { render, fireEvent, waitFor } from "@testing-library/react"
import { screen } from '@testing-library/react'
import Login from "./Login"
import { __esModule } from "@testing-library/jest-dom/dist/matchers"

jest.mock("axios",()=>({
__esModule:true,
    default:{
        get:()=>({
            data:{id:1, name:"John"}
        })
    }
}))

describe("Login Rendering", () => {
    test("Username input should be rendered", () => {
        render(<Login />)
        const userInputEl = screen.getByPlaceholderText(/username/i)
        expect(userInputEl).toBeInTheDocument()
    })

    test("Password input should be rendered", () => {
        render(<Login />)
        const passwordInputEl = screen.getByPlaceholderText(/password/i)
        expect(passwordInputEl).toBeInTheDocument()
    })

    test("Button should be rendered", () => {
        render(<Login />)
        const buttonEl = screen.getByRole("button")
        expect(buttonEl).toBeInTheDocument()
    })

})

describe("Login Empty and error message", () => {
    test("Username input should be empty", () => {
        render(<Login />)
        const userInputEl = screen.getByPlaceholderText(/username/i)
        expect(userInputEl.value).toBe("")
    })

    test("Password input should be rendered", () => {
        render(<Login />)
        const passwordInputEl = screen.getByPlaceholderText(/password/i)
        expect(passwordInputEl.value).toBe("")
    })

    test("button should be disabled", () => {
        render(<Login />);
        const buttonEl = screen.getByRole("button");
        expect(buttonEl).toBeDisabled();
      });
    test("error message should not be visible", () => {
        render(<Login />);
        const errorEl = screen.getByTestId("error");
        expect(errorEl).not.toBeVisible();
    });

})

describe("Login Onchange event", () => {
    test("Username input should change", () => {
        render(<Login />)
        const usernameInputEl = screen.getByPlaceholderText(/username/i)
        const testValue = "  test"
        fireEvent.change(usernameInputEl, { target: { value: testValue } })
        expect(usernameInputEl.value).toBe(testValue)
    })

    test("Password input should  change", () => {
        render(<Login />)
        const passwordInputEl = screen.getByPlaceholderText(/password/i)
        const testValue = "  test"
        fireEvent.change(passwordInputEl, { target: { value: testValue } })
        expect(passwordInputEl.value).toBe(testValue)
    })

    test("Button should not be disabled, when the input exist", () => {
        render(<Login />)
        const buttonEl = screen.getByRole("button")
        const usernameInputEl = screen.getByPlaceholderText(/username/i)
        const passwordInputEl = screen.getByPlaceholderText(/password/i)

        const testValue = "  test"
        fireEvent.change(usernameInputEl, { target: { value: testValue } })
        fireEvent.change(passwordInputEl, { target: { value: testValue } })

        expect(buttonEl).not.toBeDisabled()
    })

})

describe("Login ",()=>{
    test("loading should be rendered when click", () => {
        render(<Login />);
        const buttonEl = screen.getByRole("button");
        const usernameInputEl = screen.getByPlaceholderText(/username/i);
        const passwordInputEl = screen.getByPlaceholderText(/password/i);
      
        const testValue = "test";
      
        fireEvent.change(usernameInputEl, { target: { value: testValue } });
        fireEvent.change(passwordInputEl, { target: { value: testValue } });
        fireEvent.click(buttonEl);
      
        expect(buttonEl).toHaveTextContent(/please wait/i);
      });

      test("loading should not be rendered after fetching", async () => {
        render(<Login />);
        const buttonEl = screen.getByRole("button");
        const usernameInputEl = screen.getByPlaceholderText(/username/i);
        const passwordInputEl = screen.getByPlaceholderText(/password/i);
      
        const testValue = "test";
      
        fireEvent.change(usernameInputEl, { target: { value: testValue } });
        fireEvent.change(passwordInputEl, { target: { value: testValue } });
        fireEvent.click(buttonEl);
      
        await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
      });


      test("user should be rendered after fetching", async () => {
        render(<Login />);
        const buttonEl = screen.getByRole("button");
        const usernameInputEl = screen.getByPlaceholderText(/username/i);
        const passwordInputEl = screen.getByPlaceholderText(/password/i);
      
        const testValue = "test";
      
        fireEvent.change(usernameInputEl, { target: { value: testValue } });
        fireEvent.change(passwordInputEl, { target: { value: testValue } });
        fireEvent.click(buttonEl);
      
        const userItem = await screen.findByText("John");
      
        expect(userItem).toBeInTheDocument();
      });
})  