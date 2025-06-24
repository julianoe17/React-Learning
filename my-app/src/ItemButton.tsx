const AddItemButton = ({
  buttonText,
  buttonClick,
}: {
  buttonText: string;
  buttonClick: () => void;
}) => {
  return (
    <div>
      <button onClick={buttonClick}>{buttonText}</button>
    </div>
  );
};

export default AddItemButton;
