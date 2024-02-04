import Link from "next/link";
import cn from "classnames";

import { UseFormRegister } from "react-hook-form";
import { ITreePoint } from "./lib/models";

type FormFieldProps = {
  name: any;
  text: string;
  type: string;
  errorMessage: any;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  placeholder?: string;
  register: UseFormRegister<ITreePoint>;
};

const FormField = ({
  name,
  type,
  text,
  errorMessage,
  link,
  placeholder,
  register,
}: FormFieldProps) => {
  const classnames = cn(
    "block rounded-md border-0 px-2 py-1.5 shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-950",
    {
      "ring-1 w-full": type !== "checkbox",
    },
    {
      "w-full h-[200px] sm:text-sm sm:leading-6": type === "message",
    }
  );

  return (
    <div>
      <div className="flex flex-row items-center justfiy-between">
        <label
          htmlFor={name}
          className="flex-1 block text-sm font-medium leading-6"
        >
          {text}
        </label>
        {link && (
          <div className="block text-sm font-medium leading-6">
            <Link
              className="font-semibold text-indigo-600 dark:text-indigo-300 hover:text-indigo-500"
              href={link.linkUrl}
            >
              {link.linkText}
            </Link>
          </div>
        )}
      </div>

      <div className="mt-2">
        {type === "message" ? (
          <textarea
            id={name}
            {...register(name)}
            placeholder={placeholder}
            className={classnames}
          />
        ) : (
          <input
            id={name}
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className={classnames}
            step="any"
          />
        )}
        {errorMessage && (
          <p className="mt-1 text-xs text-red-400">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;
