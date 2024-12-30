// src/locomotive-scroll.d.ts
declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth?: boolean;
      multiplier?: number;
      smartphone?: { smooth: boolean };
    }
  
    export default class LocomotiveScroll {
      update(): void | null {
        throw new Error("Method not implemented.");
      }
      constructor(options: LocomotiveScrollOptions);
      scrollTo(value: number | string, offset?: number, duration?: number): void;
      scroll: {
        instance: {
          scroll: {
            y: number;
          };
        };
      };
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      on(event: string, callback: Function): void;
      destroy(): void;
    }
  }
  