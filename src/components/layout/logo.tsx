import logo from "../../assets/Logo-Jesus-Angels.jpg";

export function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img className="w-70 h-30 object-scale-down" src={logo} alt="Logo Jesus Angels" />
    </div>
  );
}
