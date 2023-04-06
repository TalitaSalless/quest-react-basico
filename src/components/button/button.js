const Button = ( props ) => {
   return (
      <button onClick={() => alert("A label desse botão é Baixar CV")}>
         {props.label}
      </button>
   );
};

Button.defaultProps = {
   label: "clique aqui",
};
export default Button;
