
interface ProgressDonateProps {
  percentage: number
  count: number
  total: number
}

export function ProgressDonate({percentage, count, total}: ProgressDonateProps) {
  return (
    <div className="bg-amber-50 w-48 rounded-lg border-2 border-amber-950 h-full">
      <div
        className="h-full bg-amber-950 flex items-center"
        style={{ width: `${percentage}%` }}
      >
        <span className={`pl-3 ${percentage < 25 ? 'text-amber-600' : 'text-amber-100'} font-medium`}>
          {count}/{total}
        </span>
      </div>
    </div>
  );
}
