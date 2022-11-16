import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Link = styled.a.attrs({ target: '_blank' })`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  svg {
    width: 2rem;
    height: 2rem;
  }
`