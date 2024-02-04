import { useForm } from "react-hook-form";

import { Form } from "@/src/04_widgets/form/Form";

import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTreePointSchema } from "../lib/schemas";
import { CREATE_TREE_POINT_FIELD_INFO } from "@/src/07_shared/lib/constants";

const TreeInfo = ({ point }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createTreePointSchema),
  });

  const onSubmit = () => {
    toast.success("Поздравляю! Вы посадили дерево!");
  };

  const onInvalid = () => console.error(errors);

  return (
    <div className="info-window">
      <h3 className="info-title">Tree Info</h3>
      <Form
        onSubmit={handleSubmit(onSubmit, onInvalid)}
        register={register}
        errors={errors}
        formFields={CREATE_TREE_POINT_FIELD_INFO}
        buttonText={"Create"}
      />
    </div>
  );
};

export default TreeInfo;
