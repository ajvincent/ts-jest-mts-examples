import { getWelcomeMessage } from './welcome-message.mjs'

test('should show welcome message', () => {
  expect(getWelcomeMessage()).toMatchInlineSnapshot(`"Welcome to ts-jest!!!"`)
})
