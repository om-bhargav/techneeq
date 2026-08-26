import { memo, useEffect, useRef } from "react";

declare global {
  interface Window {
    AIFX?: {
      rescan: () => void;
    };
  }
}

interface AIDesignerEffectProps {
  effect?: string;
  className?: string;
}

const AIDesignerEffect = memo(function AIDesignerEffect({
  effect = "fluted-glass",
  className = "",
}: AIDesignerEffectProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;

    const SCRIPT_ID = "aidesigner-runtime";

    const initialize = () => {
      window.AIFX?.rescan();
    };

    const existingScript =
      document.getElementById(SCRIPT_ID);

    if (existingScript) {
      if (window.AIFX) {
        initialize();
      } else {
        existingScript.addEventListener(
          "load",
          initialize,
          { once: true }
        );
      }

      return;
    }

    const script = document.createElement("script");

    script.id = SCRIPT_ID;
    script.src =
      "https://cdn.aidesigner.ai/effects/runtime/v1.js";

    script.async = true;

    script.onload = initialize;

    document.head.appendChild(script);
  }, []);

  return (
    <div
      data-aifx={effect}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
});

export default AIDesignerEffect;