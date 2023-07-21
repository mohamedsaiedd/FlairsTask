import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

export const ProgressB = () => {
    const step1Content = <h1>Step 1 Content</h1>;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;
    const step4Content = <h1>Step 4 Content</h1>;
    function step2Validator() {
        // return a boolean
    }

    function step3Validator() {
        // return a boolean
    }

    function onFormSubmit() {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
    }

    return (
        <StepProgressBar
            className="marginTop"
            startingStep={2}
            onSubmit={onFormSubmit}
            steps={[
                {
                    label: "Phone Screening ",
                    name: "step 2",
                    content: step1Content,
                    validator: step2Validator

                },
                {
                    label: "HR Interview",
                    name: "step 2",
                    content: step2Content,
                    validator: step2Validator
                },
                {
                    label: "Tech Task",
                    name: "step 3",
                    content: step3Content,
                    validator: step3Validator
                },
                {
                    label: "Tech Interview",
                    name: "Step 4",
                    content: step4Content,
                    validator: step3Validator
                },
                {
                    label: "Client Interview",
                    name: "Step 4",
                    content: step4Content,
                    validator: step3Validator
                }
            ]}
        />
    );
};
