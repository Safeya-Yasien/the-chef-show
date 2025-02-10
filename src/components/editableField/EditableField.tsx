import { useState } from "react";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

type FormValues = {
  value: string;
  password?: string;
};

type EditableFieldProps = {
  label: string;
  initialValue: string;
  title: string;
  description: string;
  fields: (
    register: UseFormRegister<FormValues>,
    errors: FieldErrors<FormValues>
  ) => JSX.Element;
};

const EditableField = ({
  label,
  initialValue,
  title,
  description,
  fields,
}: EditableFieldProps) => {
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(
      z.object({
        value: z.string().min(2, "Input must be at least 2 characters"),
        password: z
          .string()
          .min(6, "Password must be at least 6 characters")
          .optional(),
      })
    ),
    defaultValues: { value: initialValue },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(`${title} Form Submitted:`, data);
    setValue(data.value);
    setIsOpen(false);
  };

  return (
    <div className="space-y-1">
      <Label className="text-white font-light text-[16px]">{label}</Label>
      <div className="relative flex items-center">
        <Input
          value={value}
          className="bg-transparent border-[#C19F74] rounded-none h-[54px] text-white font-light !text-[16px] outline-none ring-offset-transparent"
          readOnly
        />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 font-restora text-white hover:bg-[#C19F74] w-[102px] h-[42px] font-normal text-[20px] flex items-center justify-center bg-[#C19F74] rounded-none">
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] border-[#ECCBA2] !rounded-none bg-black p-20 flex flex-col">
            <DialogHeader className="!text-center font-restora mb-5">
              <DialogTitle className="text-white uppercase font-normal text-[40px]">
                {title}
              </DialogTitle>
              <DialogDescription className="capitalize font-normal text-[16px] text-white">
                {description}
              </DialogDescription>
            </DialogHeader>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              {fields(register, errors)}
              <DialogFooter className="flex !flex-col mt-5">
                <Button
                  type="submit"
                  className="uppercase bg-[#C19F74] hover:bg-[#C19F74] text-white font-medium text-[20px] rounded-none h-[58px] flex items-center justify-center w-full"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </form>
            <Button
              type="button"
              onClick={() => {
                reset();
                setIsOpen(false);
              }}
              className="uppercase bg-transparent text-white hover:bg-[#C19F74] font-medium text-[16px] rounded-none h-[58px] flex items-center justify-center w-full"
            >
              CANCEL
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EditableField;
