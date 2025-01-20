import React from "react";
import { questions } from "../utills/data";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Question = () => {
    console.log(questions.questions)
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };
  return (
    <Formik
      initialValues={questions.questions.reduce(
        (acc, _, index) => ({ ...acc, [`question-${index}`]: "" }),
        {}
      )}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <div className="container">
          <h1>MCQ Quiz</h1>
          <Form>
            {questions.questions.map((ques, qIndex) => (
              <div key={qIndex}>
                <h5>{ques.question}</h5>
                {ques.options.map((option, oIndex) => (
                  <div className="form-check" key={oIndex}>
                    <Field
                      className="form-check-input"
                      type="radio"
                      name={`question-${qIndex}`}
                      value={option}
                      id={`question-${qIndex}-option-${oIndex}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`question-${qIndex}-option-${oIndex}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Question;
