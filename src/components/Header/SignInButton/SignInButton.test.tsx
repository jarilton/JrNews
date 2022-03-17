import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/react'
import { SignInButton } from '.';

jest.mock('next-auth/react')

describe('SignInButton Component', () => {
  it('renders correctly when is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false])

    render(<SignInButton />);

    expect(screen.getByText('Acessar com o github')).toBeInTheDocument()
  })

  it('renders correctly when is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'John Doe', email: 'john.doe@gmail.com' }, expires: 'fake-expires' },
      false
    ])
    render(<SignInButton />);

    expect(screen.getByText('Acessar com o github')).toBeInTheDocument()
  })
})

