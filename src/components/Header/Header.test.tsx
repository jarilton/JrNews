import { render, screen } from '@testing-library/react'
import { Header } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/react', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe('ActiveLink Component', () => {
  it('renders correctly', () => {
    render(
      <Header />
    );

    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByText('Postagens')).toBeInTheDocument()
  })
})

