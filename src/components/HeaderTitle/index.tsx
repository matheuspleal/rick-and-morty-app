import React from 'react'

import { Title } from './styles'

interface Props {
  title: string
}

export function HeaderTitle({ title }: Props) {
  return (
    <Title>{title}</Title>
  )
}