import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const Logout = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Logout</CardTitle>
        <CardDescription>Are you sure you want to log out?</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Confirm Logout</Button>
      </CardFooter>
    </Card>
  );
};
export default Logout;
