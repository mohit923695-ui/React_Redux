
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return 
  <div>
    <button type="button" class="btn-solid theme-primary">Primary</button>
    <button type="button" class="btn-outline theme-primary">Primary</button>
    <button type="button" class="btn-subtle theme-primary">Primary</button>
    <button type="button" class="btn-text theme-primary">Primary</button>
    <button type="button" class="btn-solid theme-accent">Accent</button>
    <button type="button" class="btn-outline theme-accent">Accent</button>

  </div>
}

export default App;
