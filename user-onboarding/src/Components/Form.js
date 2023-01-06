import React from "react"


export default function Form(props) {
    const {values, errors, update, submit} = props

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target
        const newVal = type === "checkbox" ? checked : value;
        update(name, newVal)
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>My cool user app!</h1>
            <p>{errors.firstName}</p>
            <p>{errors.lastName}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.terms}</p>
            <label>First Name:
                <input
                    name="firstName"
                    type="text"
                    onChange={onChange}
                    value={values.firstName}
                    />
            </label>
            <label>
                Last Name:
                <input 
                    name="lastName"
                    type="text"
                    onChange={onChange}
                    value={values.lastName}
                />
            </label>
            <label>
                Email:
                <input 
                    name="email"
                    type="email"
                    onChange={onChange}
                    value={values.email}
                />
            </label>
            <label>
                Password:
                <input
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                />
            </label>
            <label>
                Accept Terms?
                <input 
                name="terms"
                type="checkbox"
                checked={values.terms}
                onChange={onChange}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}