'use client';

import { useEffect } from 'react';

const blockedSelector =
  'a[href], button, input[type="button"], input[type="submit"], input[type="reset"], [role="button"]';

function findBlockedElement(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest<HTMLElement>(blockedSelector);
}

export default function DisableInteractions() {
  useEffect(() => {
    const markElements = () => {
      document.querySelectorAll<HTMLElement>(blockedSelector).forEach((element) => {
        element.setAttribute('aria-disabled', 'true');
        element.setAttribute('data-interaction-disabled', 'true');
        element.tabIndex = -1;
      });
    };

    const blockActivation = (event: Event) => {
      if (!findBlockedElement(event.target)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
    };

    const blockKeyboardActivation = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      blockActivation(event);
    };

    markElements();

    const observer = new MutationObserver(markElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.addEventListener('click', blockActivation, true);
    document.addEventListener('auxclick', blockActivation, true);
    document.addEventListener('submit', blockActivation, true);
    document.addEventListener('keydown', blockKeyboardActivation, true);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', blockActivation, true);
      document.removeEventListener('auxclick', blockActivation, true);
      document.removeEventListener('submit', blockActivation, true);
      document.removeEventListener('keydown', blockKeyboardActivation, true);
    };
  }, []);

  return null;
}
