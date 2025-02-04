import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

const PersonalInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </div>
      </CardContent>
    </Card>
  );
};
export default PersonalInfo;
