import { createConsumer } from '@rails/actioncable'

const consumer = createConsumer("ws://localhost:3000/cable")

export default consumer
