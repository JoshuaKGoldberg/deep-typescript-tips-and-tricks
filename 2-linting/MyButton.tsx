import { useState } from "react";

export interface MyButtonProps {
  onClick: () => void;
}

export function MyButton({ onClick }: MyButtonProps) {
  const [running, setRunning] = useState(false);

  async function onClickAndDisable() {
    setRunning(true);
    await onClick();
    setRunning(false);
  }

  return (
    <button disabled={running} onClick={onClickAndDisable} type="button">
      click me 😏
    </button>
  );
}
