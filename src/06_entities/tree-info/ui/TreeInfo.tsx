import { FieldValues, useForm } from "react-hook-form";

import { Form } from "@/src/05_features/create-point-tree/ui";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";

import { ITree } from "@/src/07_shared/lib/models";

import { createTreePointSchema } from "../../../07_shared/lib/schemas";
import { CREATE_TREE_POINT_FIELD_INFO } from "@/src/07_shared/lib/constants";

interface TreeInfoProps {
  point: ITree; // Use the appropriate type here
}

const TreeInfo = ({ point }: TreeInfoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTreePointSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    toast.success("Congratulations! You've planted a tree!");
  };

  const onInvalid = (error: unknown) => {
    console.log(error);
    toast.error("Please check the form for errors.");
  };

  return (
    <div className="info-window">
      <h3 className="info-title">Tree Info</h3>
      <h6 className="info-description">{point.name}</h6>
      <p className="info-description">
        Brief description of the tree or any interesting details that visitors
        might want to know.
      </p>

      {/* Import and use the Form component */}
      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CREATE_TREE_POINT_FIELD_INFO}
        buttonText="Create Tree Point"
      />
    </div>
  );
};

export default TreeInfo;
