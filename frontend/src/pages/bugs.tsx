import { useQuery } from '@tanstack/react-query';
import { type ChangeEvent, useMemo, useState } from 'react';
import { BugCard } from '../components/bugs/bug-card';
import { EmptyList } from '../components/ui/empty-list';
import { LoadingScreen } from '../components/ui/loading-screen';
import { ProgressDonate } from '../components/ui/progress-donate';
import { SelectFilter } from '../components/ui/select-filter';
import type { Bug } from '../models/Bug';

export function BugsPage() {
  const { data, isLoading } = useQuery<Bug[]>({
    queryKey: ['bugs'],
    queryFn: async () => {
      const resp = await fetch('http://localhost:8080/bugs');
      const data = resp.json();
      return data;
    },
    staleTime: 1000 * 60 * 60 * 24, // 1 dia completo, em milissegundos
  });

  const [orderBy, setOrderBy] = useState<string>('asc');
  const [name, setName] = useState<string>('');

  let count = 0;
  data?.map((item) => {
    if (item.donated) {
      count += 1;
    }
  });
  const percentage = (count * 100) / data?.length!;

  const useSortedAndFilteredData = (data: Bug[], orderBy: string) => {
    return useMemo(() => {
      if (!data) return [];

      switch (orderBy) {
        case 'asc':
          return [...data].sort((a, b) => a.name.localeCompare(b.name));

        case 'desc':
          return [...data].sort((a, b) => b.name.localeCompare(a.name));

        case 'low':
          return [...data].sort((a, b) => a.sellPrice - b.sellPrice);

        case 'high':
          return [...data].sort((a, b) => b.sellPrice - a.sellPrice);

        case 'donated':
          return data.filter((bug) => bug.donated);

        case 'not-donated':
          return data.filter((bug) => !bug.donated);

        default:
          return [...data].sort((a, b) => a.name.localeCompare(b.name));
      }
    }, [data, orderBy]);
  };

  const sortedItems = useSortedAndFilteredData(data!, orderBy);

  const filtered = sortedItems?.filter((data) => {
    return data.name.toLowerCase().includes(name);
  });

  if (isLoading) return <LoadingScreen />;

  const handleFilterChange = (value: string) => {
    setOrderBy(value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center mt-4 gap-8 justify-center w-[80%] mx-auto h-10">
        <SelectFilter onChange={handleFilterChange} />
        <input
          type="text"
          placeholder="Search for a name..."
          className="px-4 py-1 h-full rounded-lg border-2 border-amber-950 flex-1 font-medium placeholder:text-amber-800 text-amber-950"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value.toLowerCase())
          }
        />
        <ProgressDonate
          count={count}
          percentage={percentage}
          total={data?.length!}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto py-6 px-2">
        {name !== ''
          ? filtered?.map((item) => <BugCard key={item.id} item={item} />)
          : sortedItems?.map((item) => <BugCard key={item.id} item={item} />)}
      </div>
      {filtered.length === 0 && <EmptyList />}
    </div>
  );
}
