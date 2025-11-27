// src/app/auth/register/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Stethoscope className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>Contact admin for access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <p className="text-lg">Registration is by invitation only</p>
            <p className="mt-2">Please contact your hospital administrator to get access.</p>
          </div>
          <Button className="w-full" variant="outline" asChild>
            <a href="mailto:admin@stitchhealth.com">Contact Administrator</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}