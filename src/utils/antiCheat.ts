export const setupAntiCheat = (
  onInfraction: (reason: string) => void,
  onDisqualify: () => void
): (() => void) => {
  let infractionCount = 0;

  const handleVisibilityChange = () => {
    if (document.hidden) {
      infractionCount++;
      const reason = `Tab switch detected (${infractionCount}/2)`;
      onInfraction(reason);
      
      if (infractionCount >= 2) {
        onDisqualify();
      }
    }
  };

  const handleBlur = () => {
    infractionCount++;
    const reason = `Window focus lost (${infractionCount}/2)`;
    onInfraction(reason);
    
    if (infractionCount >= 2) {
      onDisqualify();
    }
  };

  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleCopy = (e: ClipboardEvent) => {
    e.preventDefault();
  };

  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('blur', handleBlur);
  document.addEventListener('contextmenu', handleContextMenu);
  document.addEventListener('copy', handleCopy);
  document.addEventListener('paste', handlePaste);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleBlur);
    document.removeEventListener('contextmenu', handleContextMenu);
    document.removeEventListener('copy', handleCopy);
    document.removeEventListener('paste', handlePaste);
  };
};