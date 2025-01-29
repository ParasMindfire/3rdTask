import React from 'react'

const HistoryComponent:React.FC=()=>{
  return (
    <div id="top">
        <div className="topbar">
            <div className="topbar-left">
                <h2>Students Registration Form</h2>
            </div>

            <div className="topbar-right">
                <h2>History</h2>
                {/* <select id="historyDropdown">
                    ${this.history.map((_, index) => `<option value="${index}">State ${index+1}</option>`).join('')}
                </select> */}
            </div>
        </div>
    </div>
  )
}

export default HistoryComponent
