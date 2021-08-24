import React, { useState, useCallback } from 'react'
import Editor from './editor'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Hello, World!\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <header className="app-header">
        <Editor onChange={handleDocChange} initialDoc={doc} />
      </header>
    </div>
  )
}

export default App
