import './styles/App.css'
import LinkCard from './features/linkCard/LinkCard'
import LinkFormCreate from './features/forms/LinkFormCreate'

function App() {
  return (
    <div className="page">
      <h1>Funny Links</h1>
      <LinkFormCreate />
      <LinkCard />
    </div>
  )
}

export default App
