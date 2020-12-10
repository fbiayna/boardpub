/* eslint-disable react/display-name */
/* eslint-disable no-use-before-define */
import React, { ReactElement } from 'react'
import { render } from '@testing-library/react-native'
import MapsNavigation from '../../../components/user/navigation/MapsNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { User } from 'utils/interfaces'
import { act } from 'react-test-renderer'

const buildStore = configureStore([thunk])

describe('User Navigation Component', () => {
  let user: User
  const wrapperFactory = (wrapperInitialState: any) => {
    const store = buildStore(wrapperInitialState)
    store.dispatch = jest.fn()

    return ({ children }:{children: ReactElement}): ReactElement => (
      <Provider store={store}>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </Provider>
    )
  }

  beforeEach(() => {
    user = {
      _id: 'Skylab',
      admin: false,
      name: 'Ferran',
      surname: 'Biayna',
      email: 'skylab@correo',
      photo: 'skylab.png',
      sub: '123'
    }
  })

  test('should be defined', async () => {
    const initialState = { loginReducer: { user } }
    const wrapper = wrapperFactory(initialState)
    const { getByTestId } = render(<MapsNavigation />, { wrapper })

    const view = getByTestId('list-profile')

    await act(async () => { expect(view).toBeDefined() })
  })
})
