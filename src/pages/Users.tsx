import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Plus, Trash2, Edit2, X } from 'lucide-react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
];

const UserSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  role: Yup.string().required('Required'),
});

export const Users = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const formik = useFormik({
    initialValues: editingUser || {
      id: 0,
      name: '',
      email: '',
      role: 'User',
    },
    enableReinitialize: true,
    validationSchema: UserSchema,
    onSubmit: (values, { resetForm }) => {
      if (editingUser) {
        setUsers(users.map((u) => (u.id === editingUser.id ? { ...values, id: u.id } : u)));
      } else {
        setUsers([...users, { ...values, id: Date.now() }]);
      }
      setIsModalOpen(false);
      setEditingUser(null);
      resetForm();
    },
  });

  const openModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
    } else {
      setEditingUser(null);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
        <Button onClick={() => openModal()}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-muted text-muted-foreground">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-muted/50">
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openModal(user)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-muted-foreground">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <Card className="w-full max-w-md relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-4"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            <CardHeader>
              <CardTitle>{editingUser ? 'Edit User' : 'Add New User'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
                />
                <div className="space-y-1">
                  <label htmlFor="role" className="block text-sm font-medium">Role</label>
                  <select
                    id="role"
                    name="role"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.role}
                  >
                    <option value="User">User</option>
                    <option value="Editor">Editor</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingUser ? 'Save Changes' : 'Create User'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
