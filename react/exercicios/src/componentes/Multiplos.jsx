import React from 'react'

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

// eslint-disable-next-line import/no-anonymous-default-export
export default { BoaTarde, BoaNoite }