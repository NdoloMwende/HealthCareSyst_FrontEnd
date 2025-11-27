// src/app/admin/users/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState  from "@/components/common/EmptyState";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Users Management</h1>
        <Button>Add New User</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState
            title="No users found"
            description="Start by adding your first user"
            actionLabel="Add User"
            onAction={() => {}}
          />
        </CardContent>
      </Card>
    </div>
  );
}