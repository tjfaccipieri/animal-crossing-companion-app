import * as Switch from '@radix-ui/react-switch';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface switchProps {
  id: string;
  donated: boolean;
  route: string;
  type: string;
}

export function SwitchDonate({ donated, id, route, type }: switchProps) {
  const [checked, setChecked] = useState(donated);

  const queryClient = useQueryClient();

  async function donate() {

    if (checked) {
      await fetch('http://localhost:8080/users/undo-donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1,
          donateId: id,
          donateType: type,
        }),
      });
    } else {
      await fetch('http://localhost:8080/users/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: 1,
          donateId: id,
          donateType: type,
        }),
      });
    }
    setChecked(!checked)
    queryClient.invalidateQueries({ queryKey: [route] });
    queryClient.invalidateQueries({ queryKey: ['home'] });
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
          onClick={donate}
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
