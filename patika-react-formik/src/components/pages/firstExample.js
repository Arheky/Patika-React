import { Field, Form, Formik } from "formik";

function First() {
  return (
    <div>
      <h1>First Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Oguzhan",
          lastName: "Tekcan",
          email: "oguzhantekcan06@gmail.com",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" placeholder="Jane" />
          <br />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" placeholder="Doe" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="jane@acme.com" type="email" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default First;