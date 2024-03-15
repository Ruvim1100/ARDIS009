import "./ActionButton.css";

type Props = {};

const ActionButton = (props: Props) => {
  return (
    <button className="button">
      <img src="./src/assets/wrench.svg" alt="Wrench" />
      <span>Сделать Заявку</span>
    </button>
  );
};

export default ActionButton;
