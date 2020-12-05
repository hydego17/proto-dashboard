import { Global, css } from "@emotion/core";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
          backface-visibility: hidden;

          font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif !important;
        }

        html,
        body {
          min-height: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ul {
          list-style: none;
        }

        img {
          object-fit: cover;
          width: 100%;
        }

        .apexcharts-legend-series {
          line-height: 0 !important;
        }
      `}
    />
  </>
);

export default GlobalStyles;
