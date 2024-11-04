import { eslint } from '@siberiacancode/eslint';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default eslint(
  {
    typescript: true,
    jsx: true,
    jsxA11y: true,
    react: true,
    stylistic: true,
    plugins: {
      '@tanstack/query': pluginQuery
    }
  },

  {
    rules: {
      'node/prefer-global/process': ['error', 'always'],
      'siberiacancode-react/prop-types': 'off',
      'style/linebreak-style': 'off',
      'react/no-duplicate-key': 'off',
      'siberiacancode-react/display-name': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      '@tanstack/query/exhaustive-deps': 'error'
    }
  }
);
