
import React, { useState } from 'react'; // Import useState
import modalStore from "../../../store/modal/modal.store";
import s from "./ContactModal.module.css";
import axios from 'axios';


interface IInputs {
  placeholder: string;
  type: string;
  required: boolean;
  name: string; // Added 'name' to link each input with its value
}

const inputsData: IInputs[] = [
  // Include 'name' for each input
  { placeholder: "Full Name", type: "text", required: true, name: "fullName" },
  { placeholder: "Email", type: "email", required: true, name: "email" },
  { placeholder: "Phone", type: "tel", required: false, name: "phone" },
  { placeholder: "Company Name", type: "text", required: false, name: "companyName" },

  {
    placeholder: "Estimated size/value of asset for tokenization",
    type: "text",
    required: false,

    name: "assetSize"

  },
  {
    placeholder: "Start date for legal and tokenization tasks",
    type: "text",
    required: false,

    name: "startDate"
  },
  { placeholder: "Message", type: "text", required: false, name: "message" },

];

export const ContactModal = () => {
  const { setShown, setSubmitted } = modalStore;

  const [formData, setFormData] = useState({}); // State to store form data

  const handleInputChange = (e:any) => {
    // Function to update state with input values
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const submitForm = () => {
    setSubmitted(true);

    // Axios POST request
    axios.post('https://backend.dev.companydao.org/api/add_lead', formData)
      .then(response => {
        console.log(response.data);
        // Handle success
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
  };

  return (
    <div className={s.modal}>
      <form

        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
        className={s.modal__form}
      >
        <div className={s.modal__header}>
          <p>Contact Sales</p>
          <div>
            <span onClick={() => setShown(false)}>
              <img src="/img/x.svg" alt="" />
            </span>
          </div>
        </div>
        <div className={s.modal__inputs}>

          {inputsData.map((input, index) => (
            <div key={index} className={input.required === true ? s.modal__required : ""}>
              <input
                name={input.name} // Set name for each input
                type={input.type}
                onChange={handleInputChange} // Add onChange to update state
                required={input.required}

                placeholder={input.placeholder}
              />
            </div>
          ))}
          <div className={s.modal__button}>
            <button type="submit">
              <span>Submit</span>
              <span>
                <img src="/img/arrow-right.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className={s.modal__privacy}>
          <p>
            <span>By submitting request you agreed </span>

            <a target="_href" href="https://doc.companydao.org/company-as-a-service/legal-docs/privacy-policy">with Privacy Policy</a>

          </p>
        </div>
      </form>
    </div>
  );
};
