export default function Tabs({ children, buttons, ButtonsConteiner = "menu" }) {
  /* const ButtonsConteiner = buttonsContainer; */
  return (
    <>
      <ButtonsConteiner>{buttons}</ButtonsConteiner>
      {children}
    </>
  );
}
