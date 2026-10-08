import { businessData } from "@/lib/data";
import { StarIcon } from "@/components/Icons";

export default function RatingBadge({ className = "" }: { className?: string }) {
  const { score, totalReviews, platform } = businessData.rating;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-gym-border bg-gym-surface/80 px-4 py-2 ${className}`}
    >
      <span className="flex text-gym-accent" aria-hidden="true">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
      <span className="font-body text-sm font-medium text-gym-text">
        {score}/5 from {totalReviews} {platform} reviews
      </span>
    </div>
  );
}
