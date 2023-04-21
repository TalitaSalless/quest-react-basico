const AlertButton = (props) => {
   return (
      <button onClick={() => alert("A label desse botão é Baixar CV")}>
         {props.label}
      </button>
   );
};

AlertButton.defaultProps = {
   label: "clique aqui",
};

export default AlertButton;
