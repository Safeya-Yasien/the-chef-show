import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputField } from "@/components";
import EditableField from "@/components/editableField/EditableField";

const PersonalInfo = () => {
  return (
    <Card className="bg-transparent border-none rounded-none flex flex-col gap-8">
      <CardHeader className="p-0">
        <CardTitle className="font-extralight font-restora text-white text-lg md:text-[32px]">
          Personal Information
        </CardTitle>
        <div className="border-b border-b-[#ECCBA2] w-[248px]" />
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        <EditableField
          label="Your Name"
          initialValue="Pedro Duarte"
          title="Change Full Name"
          description="Update your full name."
          fields={(register, errors) => (
            <InputField
              label="First Name"
              type="text"
              placeholder="First name"
              register={register("value")}
              error={errors.value?.message}
            />
          )}
        />
        <EditableField
          label="Email"
          initialValue="pedro@example.com"
          title="Change Email"
          description="Change your email."
          fields={(register, errors) => (
            <>
              <InputField
                label="Email"
                type="email"
                placeholder="Email"
                register={register("value")}
                error={errors.value?.message}
              />
              <InputField
                label="Password"
                type="password"
                placeholder="Password"
                register={register("password")}
                error={errors.password?.message}
              />
            </>
          )}
        />
        <EditableField
          label="Phone"
          initialValue="+1 (738) 207-6325"
          title="Change Phone Number"
          description="Update your phone number."
          fields={(register, errors) => (
            <InputField
              label="Phone Number"
              type="text"
              placeholder="Phone Number"
              register={register("value")}
              error={errors.value?.message}
            />
          )}
        />
        <EditableField
          label="Password"
          initialValue="******"
          title="Change Password"
          description="Update your password."
          fields={(register, errors) => (
            <>
              <InputField
                label="Old Password"
                type="password"
                placeholder="Old Password"
                register={register("password")}
                error={errors.password?.message}
              />
              <InputField
                label="New Password"
                type="password"
                placeholder="New Password"
                register={register("value")}
                error={errors.value?.message}
              />
            </>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;
