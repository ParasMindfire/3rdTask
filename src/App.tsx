import React from 'react'
import FormComponent from './components/FormComponent.tsx'
import TableComponet from './components/TableComponent.tsx'
import ModalComponent from './components/ModalComponent.tsx'
import HistoryComponent from './components/HistoryComponent.tsx'
import { UserProvider } from './context/userContext.tsx'
import { ValidationProvider } from './context/validationContext.tsx'
import { ToastProvider } from './context/toastContext.tsx'
import { WeatherProvider } from './context/weatherContext.tsx'

const App:React.FC=()=> {
  return (
    <ToastProvider>
      <UserProvider>
        <ValidationProvider>
          <WeatherProvider>
            <div>
              <ModalComponent/>
              <HistoryComponent/>
              <div id="mainComponent">
                <div className="left">
                  <FormComponent/>
                </div>
                
                <div className="right">
                  <TableComponet/>
                </div>
              </div>
            </div>
          </WeatherProvider>
        </ValidationProvider>
      </UserProvider>
    </ToastProvider>
  )
}

export default App
