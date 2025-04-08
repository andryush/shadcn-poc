import { RecommendationBadge } from "@/components/RecommendationBadge";
import { PlaygroundLayout } from "@/layouts/PlaygroundLayout";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <PlaygroundLayout
        title="Recommendation Badge Component"
        description="Recommendation Badge Component"
      >
        <RecommendationBadge recommendation="buy" />
        <RecommendationBadge recommendation="outperform" />
        <RecommendationBadge recommendation="hold" />
        <RecommendationBadge recommendation="average" />
        <RecommendationBadge recommendation="underperform" />
        <RecommendationBadge recommendation="sell" />
      </PlaygroundLayout>
    </ThemeProvider>
  );
}

export default App;
