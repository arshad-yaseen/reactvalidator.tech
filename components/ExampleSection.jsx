import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ValidateForm from "form-validation-react";

function ExampleSection() {
  const code = `
  import React from "react";
  import ValidateForm from "form-validation-react";
  
  const App = () => {
    return (
      <ValidateForm
        rules={{
          ValidateEmail: {
            type: "yahoo",
            emailInput: "email-input",
            message: "Please enter a valid yahoo email",
            when: "typing",
          }
        }}
      >
        <form>
          <input type="email" required name="email-input" />
        </form>
      </ValidateForm>
    );
  };
  `;

  const codeStyles = {
    fontSize: "16px",
    lineHeight: "1.5",
    overflowY: "scroll",
    width: "600px",
    marginBottom: "20px",
    borderRadius: "10px"
  };

  return (
    <div className="w-full h-[100vh] relative   bg-slate-50 flex">
      <div className="w-[50%] fles flex-col">
        <div className="w-full h-24  flex items-end pl-32">
          <h1 className="text-3xl font-bold">Email validation example</h1>
        </div>
        <div className="w-full h-full py-6 px-32 ">
          <SyntaxHighlighter
            language="jsx"
            style={nightOwl}
            customStyle={codeStyles}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="w-[50%] relative    pl-32 ">
        <div className="w-full h-24  flex items-end ">
          <h1 className="text-3xl font-bold"></h1>
        </div>
        <div className="w-full justify-start py-6 ">
          <ValidateForm
            errorElement="#signup_error_element"
            rules={{
              ValidateEmail: {
                type: "yahoo",
                emailInput: "email",
                message: "Please enter a valid yahoo email",
                when: "typing",
              },
            }}
          >
            <form className="sm:w-[500px] w-full  flex flex-col ">
              <p
                id="signup_error_element"
                className=" mb-8 h-6 font-[500] text-sm text-red-500"
              >
                
              </p>

              <div className="w-full   flex flex-col items-center">
                <div className="w-full  font-bold flex flex-col">
                  <label className="text-sm" htmlFor="email">
                    Enter your yahoo email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your yahoo email."
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <div className="w-full mt-8 font-bold flex flex-col">
                  <label className="text-sm" htmlFor="confirm_email">
                    Confirm your email
                  </label>
                  <input
                    disabled
                    type="email"
                    name="confirm_email"
                    id="confirm_email"
                    placeholder="Enter your email again."
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 opacity-70 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <div className="w-full mt-8 font-bold flex flex-col">
                  <label className="text-sm" htmlFor="password">
                    Create a password
                  </label>
                  <input
                    disabled
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create a password."
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 opacity-70 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>

                <div className="w-full mt-8 font-bold flex flex-col">
                  <label className="text-sm" htmlFor="password">
                    What should we call you?
                  </label>
                  <input
                    disabled
                    type="text"
                    name="profile_name"
                    id="profile_name"
                    placeholder="Enter a profile name."
                    className="font-[500] outline-none rounded-lg border pl-4 py-3 border-slate-200 opacity-70 placeholder:text-slate-500  transition-all mt-2  "
                  />
                </div>
              </div>
            </form>
          </ValidateForm>
        </div>
      </div>
    </div>
  );
}

export default ExampleSection;
