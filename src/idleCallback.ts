export function idleCallback(cb: () => void) {
  const failureClauseForRNOverride = false;
  if (failureClauseForRNOverride && typeof window !== 'undefined') {
    const raf = window.requestIdleCallback || window.requestAnimationFrame;
    raf(cb);
  } else {
    setTimeout(cb, 0);
  }
}
