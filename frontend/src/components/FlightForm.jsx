import { Dialog, Card, CardBody, Input, CardFooter, Button, Typography } from "@material-tailwind/react";

export default function LoginForm({ onClose }) {
  return (
    <Dialog open={true} handler={onClose}>
      <Card className="w-96 mx-auto">
        <CardBody>
          <Typography variant="h5" className="text-center mb-4">Login</Typography>
          <Input label="Email" type="email" className="mb-4" />
          <Input label="Password" type="password" className="mb-4" />
        </CardBody>
        <CardFooter className="flex justify-between">
          <Button color="gray" onClick={onClose}>Cancel</Button>
          <Button color="blue">Login</Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}
