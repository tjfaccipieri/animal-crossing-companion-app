
interface ProgressDonateHomeProps {
  count: number
  total: number
  title: string
}

export function ProgressDonateHome({count, total, title}: ProgressDonateHomeProps) {

  const percentage = (count*100) / total
  return (
    <div className="overflow-hidden bg-amber-800  shadow-md shadow-amber-950/60 text-amber-50 w-48 rounded-xl border-2 border-amber-950 h-full text-sm relative">
        <p className='sticky px-3 flex justify-between font-bold flex-1 bg-transparent z-10'>
          <span>{title}</span>
          <span>{count}/{total}</span>
        </p>
      <div
        className="h-full bg-emerald-600 flex items-center absolute top-0 z-0"
        style={{ width: `${percentage}%` }}
      >
      </div>
    </div>
  )
}