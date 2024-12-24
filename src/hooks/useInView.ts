import { ShallowReactive, shallowReactive, ShallowRef } from 'vue';

interface InViewParams {
   [key: string]: ShallowRef<HTMLElement | undefined, HTMLElement | undefined>;
}

export interface InViewResult {
   [key: string]: boolean;
}

export function useInView (elements: InViewParams, rootElement: ShallowRef<HTMLElement | undefined, HTMLElement | undefined>, options?: IntersectionObserverInit): [ShallowReactive<InViewResult>, () => void, () => void] {
   const inView = shallowReactive<InViewResult>({});

   const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         const key = Object.keys(elements).find((key) => elements[key].value === entry.target);
         if (key) {
            inView[key] = entry.isIntersecting;
         }
      });
   }, {
      root: rootElement.value || document.body,
      threshold: 0.8,
      rootMargin: '0px',
      ...options
   });

   
   const observe = () => {
      Object.values(elements).forEach((element) => {
         if (element.value)
            observer.observe(element.value);
      });
   }

   const disconnect = () => {
      observer.disconnect()
   }

   return [inView, observe, disconnect];
}