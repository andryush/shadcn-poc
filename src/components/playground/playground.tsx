import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ComponentProps } from "react";
import { ThemeSwitcher } from "@/components/themeSwitcher/themeSwitcher.tsx";
import RecommendationBadge from "@/components/RecommendationBadge/RecommendationBadge.tsx";

export function Playground({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0">
              <form className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">
                      Recommendation Badge Component
                    </h1>
                    <p className="text-balance text-muted-foreground">
                      with light and dark modes
                    </p>
                  </div>
                  <div className="grid gap-2 place-items-center">
                    <RecommendationBadge recommendation="buy" />
                    <RecommendationBadge recommendation="outperform" />
                    <RecommendationBadge recommendation="hold" />
                    <RecommendationBadge recommendation="average" />
                    <RecommendationBadge recommendation="underperform" />
                    <RecommendationBadge recommendation="sell" />
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
