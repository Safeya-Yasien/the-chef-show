import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const MyBooking = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Password</CardTitle>
      <CardDescription>Change your password here.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="current">Current password</Label>
        <Input id="current" type="password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="new">New password</Label>
        <Input id="new" type="password" />
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save password</Button>
    </CardFooter>
  </Card>  )
}
export default MyBooking