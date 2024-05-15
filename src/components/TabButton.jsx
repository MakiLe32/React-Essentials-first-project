export default function TabButton({ children, isSelected, ...props }) {
  // destructuring
  // or => (props) .....   {props.children}

  console.log("test tsbbutton");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
