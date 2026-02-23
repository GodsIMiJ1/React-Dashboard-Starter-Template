import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too short!').required('Required'),
});

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'admin@example.com',
      password: 'password123',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      login({
        id: '1',
        name: 'Admin User',
        email: values.email,
        role: 'admin',
      });
      navigate('/');
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <Input
              id="email"
              name="email"
              type="email"
              label="Email Address"
              placeholder="admin@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : undefined
              }
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : undefined
              }
            />
            <Button
              type="submit"
              className="w-full"
              isLoading={formik.isSubmitting}
            >
              Sign In
            </Button>
            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>Demo Credentials:</p>
              <p>Email: admin@example.com</p>
              <p>Password: password123</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
