const TransformerText = ({ color }) => {
   return (
      <div 
      className="text"
      style={{ color: color, textTransform: 'uppercase' }}>
         <p>React é uma biblioteca JavaScript de código aberto criada pelo Facebook que permite a construção de interfaces de usuário (UI) escaláveis e reativas. Com o React, os desenvolvedores podem criar componentes reutilizáveis e declarativos que são facilmente gerenciados e atualizados. Ele usa uma abordagem baseada em componentes para construir aplicativos da web, o que torna mais fácil a manutenção e a reutilização de código. Além disso, o React é altamente compatível com outras bibliotecas e frameworks, o que o torna uma escolha popular para desenvolvedores de front-end.
         </p>
      </div>
   )
}

TransformerText.defaultProps = {
   color: 'black'
}

export default TransformerText;