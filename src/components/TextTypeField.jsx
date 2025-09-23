import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TextTypeField = ({data}) => {
    const {field,fieldName,register,errors}=data
  return (
    <>
      <Label>{field.label}</Label>
      <Input
        type={field.type}
        className="mt-2"
        placeholder={field.placeholder}
        {...register(fieldName)}
      />
      {errors[fieldName] && (
        <p className="text-red-500 mt-1">
          {errors[fieldName]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default TextTypeField;
