"use client";

import Link from "next/link";
import Image from "next/image";

import { UseFormRegister } from "react-hook-form";
import { ITreePoint } from "../lib/models";
import { useState } from "react";

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
  const [imagePreview, setImagePreview] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full">
        <label htmlFor={name} className="form-label">
          {text}
        </label>
        {link && (
          <Link href={link.linkUrl}>
            <a className="form-link">{link.linkText}</a>
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-2 info-container">
        {type === "message" && (
          <textarea
            id={name}
            {...register(name)}
            placeholder={placeholder}
            className="form-textarea"
          />
        )}

        {type === "file" && (
          <input
            id={name}
            type={type}
            {...register(name, {
              onChange: (event) => {
                const file = event.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    if (typeof e.target?.result === "string") {
                      setImagePreview(e.target.result);
                    }
                  };
                  reader.readAsDataURL(file);
                }
              },
            })}
            placeholder={placeholder}
            className="form-input"
          />
        )}

        {type === "input" && (
          <input
            id={name}
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className="form-input"
            step="any"
          />
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="flex items-center justify-center">
          {imagePreview && (
            <Image
              src={imagePreview}
              alt="Preview"
              width={400}
              height={400}
              className="form-image-preview"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FormField;
