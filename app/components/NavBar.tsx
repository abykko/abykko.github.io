export default function NavBar() {
  function NavBtn({ text }: { text: string }) {
    return (
      <button className=
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
        {text}
      </button>
    );
  }
  return (
    <nav>
      <div className="flex flex-row items-center justify-between p-4">
        <ul className="flex flex-row space-x-4">
          <NavBtn text="About" />
          <NavBtn text="Blog" />
          <NavBtn text="Contact" />
        </ul>
      </div>
    </nav>
  );
}