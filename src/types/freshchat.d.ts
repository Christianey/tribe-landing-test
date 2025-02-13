declare global {
    interface Window {
      fcWidget: {
        open(): unknown;
        init: (config: { token: string; host: string }) => void;
      };
    }
  }
  
  export {};
  