import React from 'react'

const ModalComponent:React.FC=()=> {
  return (
        <div className="hide" id="modal">
            <div className="modal-wrapper">
                <div className="table-container">
                    <table style={{border:1}}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ${this.peoples[0]?.name.length!=0 && this.peoples.map((people:{ name: string; email: string; phone: string }) => `
                                <tr>
                                    <td>${people.name}</td>
                                    <td>${people.email}</td>
                                    <td>${people.phone}</td>
                                </tr>
                            `).join('')} */}
                        </tbody>
                    </table>

                    <div id="modalButtons">
                        <button id="restore">Restore</button>
                        <button id="close">Close</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ModalComponent
