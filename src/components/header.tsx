import nlwUniteIcon from "../assets/nlw-unite-icon.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center py-2 gap-5">
      <img src={nlwUniteIcon} />

      <nav className="flex items-center  gap-5">
        <NavLink href="/eventos" title="Evento" />
        <NavLink href="/participantes" title="Participantes" />
      </nav>
    </div>
  );
}
