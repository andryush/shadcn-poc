import { cn } from "@/lib/utils.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { ReactNode } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

type PlaygroundLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export function PlaygroundLayout({
  children,
  title,
  description,
}: PlaygroundLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-balance text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <div className="grid gap-2 place-items-center">
                    {children}
                  </div>
                </div>
              </form>
              <div className="w-full h-full flex items-center justify-center">
                <ThemeSwitcher />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
