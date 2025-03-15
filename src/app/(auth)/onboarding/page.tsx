"use client"

import { Navbar } from "@/app/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { useState } from "react";
import { onboardingSchemaValidation } from "@/lib/zodSchemas";
import { isUsernameUnique, setOnboardingUsername } from "@/lib/prisma";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function Onboarding() {


  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  
  
  const clientSchema = onboardingSchemaValidation();
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [form, fields] = useForm({
    id: "onboarding-form",
    constraint: getZodConstraint(clientSchema),
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: clientSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      
      // Use parseAsync for the server-side validation that includes async checks
      const submission = await parseWithZod(formData, {
        schema: onboardingSchemaValidation({ isUsernameUnique }),
        async: true, // This is crucial! Enable async parsing
      });

      if (submission.status !== "success") {
        // Handle validation errors
        return;
      }
      
      await setOnboardingUsername(submission.value.userName);
      router.push("/dashboard");
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-lg mx-auto space-y-8">
          <Card className="cn-glass">
            <CardHeader>
              <CardTitle className="text-xl">Profile Setup</CardTitle>
              <CardDescription>Let&apos;s create your personal space</CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit} noValidate>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={fields.userName.id}>Username</Label>
                    <Input
                      id={fields.userName.id}
                      name={fields.userName.name}
                      placeholder="johndoe"
                      className="focus:ring-2 focus:ring-primary/40"
                      autoComplete="off"
                      required
                    />
                    {fields.userName.errors && (
                      <p className="text-sm text-red-500">{fields.userName.errors}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      Choose a unique username (3-20 characters)
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user?.primaryEmailAddress?.emailAddress || ""}
                      className="focus:ring-2 focus:ring-primary/40"
                      disabled
                    />
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center">
                <Button 
                  type="submit" 
                  className="cn-primary-btn px-8 w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Profile..." : "Submit"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}