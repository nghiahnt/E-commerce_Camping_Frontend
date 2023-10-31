import { NavLink } from "react-router-dom";

function Button(children) {
  return (
    <>
      <NavLink
        to="/blog"
        className={"btn btn-outline-dark m-2"}
        style={{ "background-color": "#fff", color: "#000", }}
      >
        <i class="fa-solid fa-pen mr-1"></i>
        {children.content}
      </NavLink>
    </>
  );
}

export default Button;
