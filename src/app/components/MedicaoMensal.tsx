import React from 'react'
import useStore from '@/store'

const items = [
      'pH',
      'Cloro',
      'Turbidez',
      'Cor',
      'Dureza Total',
      'Ferro Total',
      'Manganês Total',
      'Nitrogênio Nitrato',
      'Cobre',
      'Fluoreto',
      'Sílica',
]

function MedicaoMensal() {
      const { selectedItemsMensal, setSelectedItemsMensal } = useStore()

      const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, checked } = event.target

            setSelectedItemsMensal((prevState: string[]) => {
                  if (checked) {
                        return [...prevState, name]
                  } else {
                        return prevState.filter((item) => item !== name)
                  }
            })
      }

      return (
            <>
                  <h1 className="mx-8 text-2xl">Medições Mensais</h1>
                  <div className="my-8 flex flex-wrap gap-2 px-8">
                        {items.map((item) => (
                              <div
                                    className={`box-border flex flex-col rounded-lg bg-slate-100 p-2 shadow-md ${
                                          selectedItemsMensal.includes(item) ? 'selected' : ''
                                    }`}
                                    key={item}
                              >
                                    <label className="mb-2">
                                          <input
                                                className="mr-2 font-semibold"
                                                type="checkbox"
                                                name={item}
                                                checked={selectedItemsMensal.includes(item)}
                                                onChange={handleCheckboxChange}
                                          />
                                          {item}
                                    </label>

                                    <input
                                          title={item}
                                          placeholder="valor"
                                          className="mr-2 h-8 w-[150px] p-2"
                                          type="text"
                                          name={item}
                                          // Assuming these input fields should have their own change handlers, otherwise remove this line
                                          onChange={handleCheckboxChange}
                                    />
                              </div>
                        ))}
                  </div>
            </>
      )
}

export default MedicaoMensal
