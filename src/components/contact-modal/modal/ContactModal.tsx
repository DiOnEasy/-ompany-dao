import modalStore from "../../../store/modal/modal.store";
import s from "./ContactModal.module.css";

interface IInputs {
  placeholder: string;
  type: string;
  required: boolean;
}

const inputsData: IInputs[] = [
  { placeholder: "Full Name", type: "text", required: true },
  { placeholder: "Email", type: "email", required: true },
  { placeholder: "Phone", type: "tel", required: false },
  { placeholder: "Company Name", type: "text", required: false },
  {
    placeholder: "Estimated size/value of asset for tokenization",
    type: "text",
    required: false,
  },
  {
    placeholder: "Start date for legal and tokenization tasks",
    type: "text",
    required: false,
  },
  { placeholder: "Message", type: "text", required: false },
];

export const ContactModal = () => {
  const { setShown, setSubmitted } = modalStore;

  const submitForm = () => {
    setSubmitted(true);
  };
  return (
    <div className={s.modal}>
      <form
        action=""
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
          {inputsData.map((input) => (
            <div className={input.required === true ? s.modal__required : ""}>
              <input
                type={input.type}
                {...(input.required && { required: true })}
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
            <a href="">with Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  );
};
