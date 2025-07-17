const posts = [
  {
    id: 1,
    title: 'My First Blog Post',
    author: 'Dejie Yang',
    date: '2024-07-20',
    tags: ['Vue', 'Development', 'Frontend'],
    excerpt: 'A brief introduction to my blog, covering thoughts on large models, multi-modal learning, and software development.',
    content: `
      <p>This is the content of my first blog post. It's a placeholder for now.</p>
      <p>I will be sharing my thoughts on various topics related to large models, multi-modal learning, and general software development.</p>
      <h3>Heading 3 Example</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    `
  },
  {
    id: 2,
    title: 'Exploring Multi-Modal Learning',
    author: 'Dejie Yang',
    date: '2024-07-15',
    tags: ['AI', 'Multi-Modal', 'Research'],
    excerpt: 'An in-depth look into multi-modal learning, discussing fusion techniques, challenges, and future directions in combining different data types.',
    content: `
      <p>In this post, I delve into the fascinating world of multi-modal learning, exploring how different data types (e.g., text, images, audio) can be combined for richer understanding.</p>
      <p>Key areas include fusion techniques, challenges, and future directions.</p>
      <h4>Another Subheading</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <pre><code>
function exampleCode() {
  console.log("Hello Multi-Modal!");
}
      </code></pre>
    `
  },
  {
    id: 3,
    title: 'Tips for Efficient Frontend Development',
    author: 'Dejie Yang',
    date: '2024-07-10',
    tags: ['Frontend', 'Productivity', 'Tips'],
    excerpt: 'Practical tips and tricks to optimize your frontend development workflow, covering IDE usage, automation, and component hierarchy.',
    content: `
      <p>Optimizing your frontend workflow can significantly boost productivity. Here are some tips I've found useful:</p>
      <ol>
        <li>Use a good IDE with smart autocompletion.</li>
        <li>Automate repetitive tasks with scripts.</li>
        <li>Keep your component hierarchy clean and modular.</li>
      </ol>
      <p>Remember, continuous learning and adaptation are key!</p>
    `
  }
];

export default posts; 