import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow({ ...rest }: TableRowProps) {
  return <tr className="border-b border-white/10 hover:bg-white/5" {...rest} />;
}
