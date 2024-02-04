import { FieldErrors, UseFormRegister } from "react-hook-form";

import { PopulateFormFields } from "@/src/06_entities/populate-form-fields/ui";
import { FormFieldInfoType } from "@/src/06_entities/populate-form-fields/lib/types";

import { Spinner } from "@/src/07_shared/ui";

type FormProps = {
  onSubmit: () => void;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  formFields: FormFieldInfoType[];
  buttonText: string;
  status?: string;
};

const Form = ({
  onSubmit,
  register,
  errors,
  status,
  formFields,
  buttonText,
}: FormProps) => {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <PopulateFormFields
        register={register}
        errors={errors}
        formFields={formFields}
      />

      <div>
        <button type="submit" className="form-button">
          {status === "pending" ? <Spinner /> : buttonText}
        </button>
      </div>
    </form>
  );
};

export default Form;
