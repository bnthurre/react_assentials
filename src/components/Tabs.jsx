export default function Tabs({ childaren, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {childaren}
    </>
  );
}
