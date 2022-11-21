export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearImmediate(timer);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
