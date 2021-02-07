import { css } from 'styled-components';

export default {
  flex: (dir = row, content, items, wrap) => css`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${content};
    align-items: ${items};
    flex-wrap: ${wrap};
  `,
};
