import { fireEvent, render } from "@testing-library/react"
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import { screen } from "@testing-library/react"
import "@testing-library/jest-dom"

it("Should render Header Component with a login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" })
    expect(loginButton).toBeInTheDocument();
})


it("Should render Header Component with Cart items 0", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItem = screen.getByText("Cart - (0 items)")
    expect(cartItem).toBeInTheDocument();
})


it("Should render Header Component with a Cart item", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItem = screen.getByText(/Cart/)
    expect(cartItem).toBeInTheDocument();
})


it("Should change Login button Logout on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" })

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" })
    
    expect(logoutButton).toBeInTheDocument();
})