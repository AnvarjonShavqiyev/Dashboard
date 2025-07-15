import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './features/Dashboard'
import Stats from './features/Stats'
import Charts from './features/Charts'
import RecentActivity from './features/RecentActivity'

import './styles/theme.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/stats' index element={<Stats />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/recentActivity' element={<RecentActivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
