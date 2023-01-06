import * as yup from "yup"


const schemaForm = yup.object().shape({
    firstName: yup.string().trim().required("First Name is required!"),
    lastName: yup.string().trim().required("Last Name is required!"),
    email: yup.string().email("Must be valid eamil!").trim().required("Must enter email address!"),
    password: yup.string().trim().min(6, "Password must be at least 6 characters long!").required("must enter password"),
    terms: yup.boolean().required("Must Accept Terms!").oneOf([true], "Must Accept Terms!")
})

export default schemaForm