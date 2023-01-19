export const getOffsetPage = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
};

export const getOffset = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top
  };
};

// to smoothly scroll to the element into view
export const smoothScroll = (): void => {
  if (typeof window !== 'undefined') {
    const hashId = window.location.hash;
    // console.log({ location: window.location, hashId })

    if (hashId) {
      const element = document.querySelector(hashId);
      // console.log({ element })
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }
};

// to smoothly scroll to the element into view by anchor
export const smoothScrollByAnchor = (hashId: string): void => {
  const element = document.getElementById(hashId);
  if (!element) {
    return;
  }
  if (typeof window !== 'undefined') {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  } else {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
