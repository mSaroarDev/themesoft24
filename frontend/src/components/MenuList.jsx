import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MenuList() {
  return (
    <>
        <main className="flex items-center justify-center">
            <Link className="_cat-links">Home</Link>
            <Link className="_cat-links">Softwares</Link>
            <Link className="_cat-links">Themes</Link>
            <Link className="_cat-links">Plugins</Link>
            <Link className="_cat-links">Templates</Link>
            <Link className="_cat-links">Applications</Link>
            <Link className="_cat-links flex items-center gap-3">Otheres <IoMdArrowForward /></Link>
        </main>
    </>
  );
}