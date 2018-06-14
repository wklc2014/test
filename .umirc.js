export default {
  hashHistory: true,
  plugins: [
    ['umi-plugin-dva', { immer: true }],
  ],
  exportStatic: true,
  context: {
    title: 'Unnamed Page',
  }
}