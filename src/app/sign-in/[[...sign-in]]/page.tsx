import { Card } from "@/components/ui/card";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-10 space-y-6">
      <h1 className="text-2xl font-semibold text-center">
        To view my experience, please log in to my website
      </h1>
      <Card className="w-full max-w-md p-6">
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none",
              headerTitle: "text-2xl font-semibold text-var(--color-text-primary)",
              headerSubtitle: "text-var(--color-text-secondary)",
              socialButtonsBlockButton: "border border-var(--color-border) hover:bg-var(--color-bg-hover) text-var(--color-text-primary) font-medium",
              formButtonPrimary: "bg-var(--color-primary) hover:bg-var(--color-primary-hover) text-var(--color-text-on-primary)",
              footerActionLink: "text-var(--color-link) hover:text-var(--color-link-hover)",
              formFieldInput: "rounded-lg border-var(--color-border) focus:border-var(--color-primary) focus:ring-var(--color-primary)",
              dividerLine: "bg-var(--color-divider)",
              dividerText: "text-var(--color-text-secondary)",
              formFieldLabel: "text-var(--color-text-label)",
              identityPreviewEditButton: "text-var(--color-link) hover:text-var(--color-link-hover)",
              formResendCodeLink: "text-var(--color-link) hover:text-var(--color-link-hover)"
            },
            layout: {
              socialButtonsPlacement: "bottom",
              showOptionalFields: false
            }
          }}
        />
      </Card>
    </div>
  );
}