// Pointer tilt for anything marked data-tilt (the value is the maximum angle in degrees).
// Only for a mouse or trackpad, and never with reduced motion. Styles live in global.css.
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (finePointer && !reduceMotion) {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt) || 8;
    let frame = 0;

    el.addEventListener(
      'pointermove',
      (event) => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          el.style.setProperty('--tilt-x', `${(-y * max).toFixed(2)}deg`);
          el.style.setProperty('--tilt-y', `${(x * max).toFixed(2)}deg`);
          el.style.setProperty('--glare-x', `${((x + 0.5) * 100).toFixed(1)}%`);
          el.style.setProperty('--glare-y', `${((y + 0.5) * 100).toFixed(1)}%`);
          el.dataset.tilting = '';
        });
      },
      { passive: true },
    );

    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
      delete el.dataset.tilting;
    });
  });
}
