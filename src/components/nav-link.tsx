import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  title: string;
}

export function NavLink({ title, ...rest }: NavLinkProps) {
  return (
    <a className="font-medium text-sm" {...rest}>
      {title}
    </a>
  );
}
