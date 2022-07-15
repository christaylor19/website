const GlobalStyle = () => (
  <style jsx global>
    {`
      * {
        box-sizing: border-box;
      }
      body {
        font-family: Rubik, Roboto, sans-serif, 'Arial';
        margin: 0;
      }
      @font-face {
        font-family: Varela;
        src: url('fonts/Varela/Varela-Regular.ttf');
        font-display: swap;
      }
      @font-face {
        font-family: Rubik;
        src: url('fonts/Rubik/Rubik-VariableFont_wght.ttf');
      }
    `}
  </style>
);

export default GlobalStyle;
