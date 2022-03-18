import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { SubscribeButton } from '.';

jest.mock('next-auth/react')
jest.mock('next/router')


describe('SubscribeButton Component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false] as any)

    render(<SubscribeButton />);

    expect(screen.getByText('Inscreva-se agora')).toBeInTheDocument()
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn)

    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false] as any)


    render(<SubscribeButton />);

    const subscribeButton = screen.getByText('Inscreva-se agora');

    fireEvent.click(subscribeButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription ')
  const useRouterMocked = mocked(useRouter)
  const useSessionMocked = mocked(useSession)
  const pushMock = jest.fn()

  useSessionMocked.mockReturnValueOnce([
    {
      user: {
        name: 'John Doe',
        email: 'john.doe@gmail.com'
      },
      activeSubscription: 'fake-active-subscription',
      expires: 'fake-expires'
    },
    false
  ] as any)

  useRouterMocked.mockReturnValueOnce({
    push: pushMock,
  } as any)

  render(<SubscribeButton />);

  const subscribeButton = screen.getByText('Inscreva-se agora');

  fireEvent.click(subscribeButton)

  expect(pushMock).toHaveBeenCalled()
})