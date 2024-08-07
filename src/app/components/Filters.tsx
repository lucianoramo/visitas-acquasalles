import React, { useEffect } from 'react'
import DatePicker from 'react-datepicker'
import useStore from '../store'
import Select from 'react-select'
import { ClientType } from '../../../types'

import 'react-datepicker/dist/react-datepicker.css'

interface Option {
      value: string
      label: string
}

const Filters: React.FC = () => {
      const { startDate, endDate, setStartDate, setEndDate, selectedClient, setSelectedClient, clients, setClients } =
            useStore()

      useEffect(() => {
            fetch('/api/clients')
                  .then((response) => {
                        if (!response.ok) {
                              throw new Error(`HTTP error! status: ${response}`)
                        }
                        return response.json()
                  })
                  .then((clientes: ClientType[]) =>
                        setClients(clientes.map((client) => ({ value: client.id, label: client.nome, ...client }))),
                  )
                  .catch((error) => {
                        console.error('Error fetching clients:', error)
                  })
      }, [])

      const handleChange = (selectedOption: Option | null) => {
            setSelectedClient(selectedOption)
      }

      return (
            <div className="bg-blue-gray-50 flex w-full items-center justify-around p-4">
                  <label className="p-2">
                        Data Inicial:
                        <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date as Date)}
                              className="rounded border p-1"
                              shouldCloseOnSelect={true}
                        />
                  </label>
                  <label className="p-2">
                        Data Final:
                        <DatePicker
                              selected={endDate}
                              onChange={(date) => setEndDate(date as Date)}
                              className="rounded border p-1"
                              shouldCloseOnSelect={true}
                        />
                  </label>
                  <label className="p-2">
                        Cliente:
                        <Select
                              value={selectedClient}
                              onChange={handleChange}
                              options={clients}
                              placeholder="Selecione um cliente"
                              className="w-96 p-1"
                        />
                  </label>
            </div>
      )
}

export default Filters
