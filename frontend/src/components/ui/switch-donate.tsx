import * as Switch from '@radix-ui/react-switch';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface switchProps {
  id: string;
  donated: boolean;
  route: string
}

export function SwitchDonate({donated, id, route}: switchProps) {
  const [checked, setChecked] = useState(donated);

  const queryClient = useQueryClient()

  async function donateBug() {
    await fetch(`http://localhost:8080/${route}/donate`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        donated: !checked,
      }),
    });
    setChecked(!checked)
    queryClient.invalidateQueries({queryKey: [route]})
  }

  return (
    <form>
      <div className="flex items-center">
        <label className="pr-4 cursor-pointer" htmlFor="donate-switch">
          No
        </label>
        <Switch.Root
          className="w-11 h-6 bg-black rounded-full relative data-[state=checked]:bg-amber-500 outline-none"
          id="donate-switch"
          checked={checked}
          onClick={donateBug}
        >
          <Switch.Thumb className="block w-4 h-4 bg-amber-100 rounded-full transition-transform duration-100 translate-x-1.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
        </Switch.Root>
        <label className="pl-4 cursor-pointer" htmlFor="donate-switch">
          Yes
        </label>
      </div>
    </form>
  );
}
