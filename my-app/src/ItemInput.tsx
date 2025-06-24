import { forwardRef } from "react";

const ItemInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <div className="rounded border px-2 py-1 shadow-sm">
    <input
      ref={ref}
      {...props}
      className="w-full border-none focus:outline-none"
      placeholder="Add item..."
    />
  </div>
));

export default ItemInput;
