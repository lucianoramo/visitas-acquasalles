'use client'
import React from 'react'
import Image from 'next/image'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const items = [
      {
            value: '7,6',
            visible: true,
      },
      {
            value: '1',
            visible: true,
      },
      {
            value: '4',
            visible: false,
      },
      {
            value: '7',
            visible: true,
      },
]

export default function Report() {
      const generatePDF = () => {
            const capture = document.getElementById('report')
            if (capture) {
                  html2canvas(capture, { scale: 2 }).then((canvas) => {
                        const imgData = canvas.toDataURL('img/png')
                        const doc = new jsPDF('p', 'mm', 'a4')
                        const componentWidth = doc.internal.pageSize.getWidth()
                        const componentHeight = doc.internal.pageSize.getHeight()
                        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
                        doc.save('report.pdf')
                  })
            }
      }
      return (
            <div id="report" className="container p-8">
                  <header className="flex flex-col">
                        <div className="flex items-center justify-start border-y-4">
                              <div className="w-1/3">
                                    <Image src="/logo.png" alt="Logo" width={120} height={72} />
                              </div>
                              <div className="w-1/3 text-xs">
                                    <ul>
                                          <li className="font-bold">
                                                Cliente:<span className="font-light">Endereço</span>
                                          </li>
                                          <li className="font-bold">
                                                Endereço:<span className="font-light">Endereço</span>
                                          </li>
                                    </ul>
                              </div>

                              <div className="w-1/3 text-xs">
                                    <ul>
                                          <li className="font-bold">
                                                Cnpj:<span className="font-light">Endereço</span>
                                          </li>
                                          <li className="font-bold">
                                                Tel.:<span className="font-light">Endereço</span>
                                          </li>
                                    </ul>
                                    <button onClick={generatePDF}>Download</button>
                              </div>
                        </div>
                        <p className="my-4 text-center text-lg">Relatório de monitoramento da água</p>
                  </header>

                  <section id="monthly-monitoring" className="flex flex-col ">
                        <h2 className="text-start text-lg">Monitoramento Mensal</h2>
                        <ul className="text-xs">
                              <li>
                                    Ponto de Coleta:<span className="font-bold">Copa dos funcionários</span>
                              </li>
                              <li>
                                    Hora:<span className="font-bold">18:37</span>
                              </li>
                        </ul>
                        <table className="table table-zebra table-sm table-fixed">
                              <tbody>
                                    {items[0].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                                    {items[1].visible && (
                                          <tr>
                                                <td>PH</td>
                                                <td>7,6</td>
                                                <td>
                                                      <ul>
                                                            <li>Limite aceitável(VMP*):</li>
                                                            <li> 6,0 a 9,5</li>
                                                      </ul>
                                                </td>
                                                <td>Unidade</td>
                                                <td>Método</td>
                                          </tr>
                                    )}
                              </tbody>
                        </table>
                        <ul className="text-xs">
                              <li>
                                    * Resultados dos parâmetros descritos acima:Controle de Qualidade da Acquasalles
                                    tratamento de Água LTDA.
                              </li>
                              <li>** Equipamento Utilizado Fotómetro Multiparâmetros HI83399.</li>
                              <li>Legenda - LQ: Limite de Quantificação.</li>
                              <li>
                                    (VMP*): Valor máximo permitido, conforme Ministério da Saúde da Portaria GM/MS
                                    Nº888/2021.
                              </li>
                        </ul>
                  </section>

                  <section id="inspection-visit" className="mt-8 flex flex-col">
                        <h2 className="my-4 text-center text-lg">Monitoramento das Visitas de Inspeção</h2>
                        <table className="table table-zebra table-sm table-auto">
                              <thead>
                                    <tr>
                                          <td>Local</td>
                                          <td>Data</td>
                                          <td>Hora</td>
                                          <td>Cloro Encontrado</td>
                                          <td>Cloro corrigido</td>
                                          <td>pH encontrado</td>
                                          <td>pH corrigido</td>
                                          <td>Turbidez encontrada</td>
                                          <td>Turbidez corrigida</td>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                          <td>valores</td>
                                    </tr>
                              </tbody>
                        </table>
                        <div id="observacao">
                              <p className="text-sm font-bold uppercase">Observações:</p>
                              <ul className="text-sm">
                                    <li>Obs1</li>
                                    <li>Obs2</li>
                                    <li>Obs3</li>
                                    <li>Obs4</li>
                              </ul>
                        </div>
                        <div id="conclusao" className="mt-4">
                              <p className="text-sm font-bold uppercase">
                                    Conclusão:
                                    <span className="font-normal lowercase">
                                          Os resultados dos parâmetros analisados no monitoramento das visitas de
                                          inspeção e no Laboratório Engequisa (Laudo anexo) , estão de acordo com os
                                          limites da Portaria GM/MS Nº888/2021 do Ministério da saúde.
                                    </span>
                              </p>
                        </div>
                  </section>
                  <section id="consideracoes" className="mt-8">
                        <p className="font-bold uppercase ">Considerações / Recomendações</p>
                        <p className="text-xs">
                              1. Manter monitoramento diário do tratamento, principalmente quanto aos residuais de cloro
                              e pH, sendo uma exigência do Ministério da Saúde para programa preventivo de qualidade. 2.
                              Solicitar reposição de produtos com antecedência de uma semana, evitando paradas do
                              tratamento. Nos clientes com contratos fixos este controle será feito pelos funcionários
                              da Acquasalles. 3.Manter os documentos (OUTORGAS) em dia e em locais de fácil acesso para
                              apresentar aos agentes de fiscalização em caso de visita. Atender a todas as
                              condicionantes do IGAM descritas no documento de outorga, dentro dos prazos solicitados,
                              cumprindo na íntegra a legislação e evitando sanções pelo órgão ambiental como autuações,
                              notificações, multas e indeferimento/cancelamento do direito de uso. Não exceder aos
                              volumes autorizados para captação, descritos na própria outorga e entrar com procedimento
                              de renovação antes do vencimento. 4.Atender as exigências descritas na Portaria GM/MS
                              Nº888/2021 do Ministério da Saúde (potabilidade) tais como ART’s (responsável técnico pelo
                              tratamento), planos de monitoramento do tratamento .; 5.Acionar imediatamente a
                              Acquasalles em caso de quaisquer irregularidades nos tratamentos para realização de
                              visitas extras, interrompendo, se necessário e dependendo da irregularidade constatada e
                              mantendo solução alternativa até que o tratamento seja inspecionado e regularizado.
                        </p>
                  </section>

                  <footer className="mt-8">
                        <div id="signature">
                              <Image src="/logo.png" alt="Logo" width={120} height={60} />
                              <p className="text-sm font-bold">João Bosco da Silva</p>
                              <p className="text-sm">CRQ 02406693- 2ª Região- MG</p>
                        </div>
                  </footer>
            </div>
      )
}
