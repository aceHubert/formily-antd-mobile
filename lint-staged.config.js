module.exports = {
  '*.{ts,tsx,js}': [
    'eslint --ext .ts,.tsx,.js',
    'pretty-quick --staged',
    'git add',
  ],
  '*.md': ['pretty-quick --staged', 'git add'],
}
