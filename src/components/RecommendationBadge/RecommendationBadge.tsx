import { FC, useMemo } from "react";
import { Badge } from "@/components/ui/badge";

type Recommendation =
  | "buy"
  | "outperform"
  | "hold"
  | "average"
  | "underperform"
  | "sell";

type RecommendationBadgeProps = {
  recommendation: Recommendation;
};

export const RecommendationBadge: FC<RecommendationBadgeProps> = ({
  recommendation,
}) => {
  const classes = useMemo(() => {
    switch (recommendation) {
      case "buy":
        return "recommendation-buy";
      case "outperform":
        return "recommendation-outperform";
      case "hold":
        return "recommendation-hold";
      case "average":
        return "recommendation-average";
      case "underperform":
        return "recommendation-underperform";
      case "sell":
        return "recommendation-sell";
      default:
        return "bg-[var(--muted)] text-foreground";
    }
  }, [recommendation]);

  return (
    <Badge
      className={`${classes} uppercase px-2 py-1 rounded-xl min-w-8 max-w-[180px] font-medium text-sm leading-4 whitespace-nowrap`}
    >
      {recommendation}
    </Badge>
  );
};
