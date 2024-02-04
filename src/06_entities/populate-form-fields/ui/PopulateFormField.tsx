import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  FieldValues,
} from "react-hook-form";

import { FormField } from "@/src/07_shared/ui";
import { FormFieldInfoType } from "../lib/types";

type PopulateFormProps = {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  formFields: FormFieldInfoType[];
};

const PopulateFormFields = ({
  register,
  errors,
  formFields,
}: PopulateFormProps) => {
  return (
    <>
      {formFields.map((ff) => {
        return (
          <FormField
            key={ff.name}
            name={ff.name}
            type={ff.type}
            text={ff.text}
            errorMessage={errors?.[ff.name]?.message}
            link={ff.link}
            register={register}
          />
        );
      })}
    </>
  );
};

export default PopulateFormFields;
