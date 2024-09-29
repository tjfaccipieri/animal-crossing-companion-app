

interface FilterSelectProps {
  onChange: (value: string) => void;
}

export function SelectFilter({onChange}: FilterSelectProps){
  return (
    <select
      name="filter"
      id="filter"
      onChange={(event) => onChange(event.target.value)}
      className="px-2 py-1 h-full rounded-lg border-2 border-amber-950 font-medium text-amber-950"
    >
      <option value="" disabled hidden>
        Order by
      </option>
      <option value="asc">A - Z</option>
          <option value="desc">Z - A</option>
          <option value="high">Higher Price</option>
          <option value="low">Lower Price</option>
          <option value="donated">Donated</option>
          <option value="not-donated">Not Donated</option>
    </select>
  )
}