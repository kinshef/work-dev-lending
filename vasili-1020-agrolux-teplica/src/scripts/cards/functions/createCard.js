import { Price } from '../components/Price'
import { Delivery } from '../components/Delivery'
import { Body } from '../components/Body'
import { Wrapper } from '../components/Wrapper'
import { Button } from '../components/Button'
import { Description } from '../components/Description'
import { Title } from '../components/Title'
import { Image } from '../components/Image'
import { Sizes } from '../components/Sizes'

export const createCard = (data) =>
  $(
    Wrapper(
      Image(data.img) +
        Body(
          Title(data.name) +
            Sizes(data.prices) +
            Description(data.description) +
            Delivery() +
            Price(data.prices[0][1], data.onSale) +
            Button()
        )
    )
  )
