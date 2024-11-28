import { useRegisterMutation } from "@/redux/api/authApi";

const Register = () => {
  const [register, { data, isLoading, error }] = useRegisterMutation();
  return (
    <div>
      <h1>Hello, This is Register component</h1>
    </div>
  );
};

export default Register;
