import Button from "react-bootstrap/Button";

export default function MyButton({
  title = "Button",
  onClickHandler = {onClickHandler},
}) {
  return (
    <Button variant="primary" onClick={onClickHandler}>
      {title}
    </Button>
  );
}
