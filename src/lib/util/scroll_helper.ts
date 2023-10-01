const s = () => {
  document
    .querySelector('[data-composer]')
    ?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToBottom = () => {
  setTimeout(s, 1);
  setTimeout(s, 100); // iOS needs a little more time…
};
