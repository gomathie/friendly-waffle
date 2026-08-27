/**
 * Pointer-driven motion (hero parallax, card tilt) is an enhancement, not part
 * of the layout. It runs only where it makes sense: a real pointer to track,
 * and no stated preference against motion.
 */
export const pointerMotionAllowed = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Coalesce pointer events onto animation frames. Without this a fast mouse
 * fires far more often than the screen can repaint, and every one of those
 * events writes to style.
 */
export const rafThrottle = (fn) => {
  let frame = null
  let latest = null

  const wrapped = (...args) => {
    latest = args
    if (frame !== null) return
    frame = requestAnimationFrame(() => {
      frame = null
      fn(...latest)
    })
  }

  wrapped.cancel = () => {
    if (frame !== null) cancelAnimationFrame(frame)
    frame = null
  }

  return wrapped
}
