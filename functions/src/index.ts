import { cloudFunction } from "narratory-cloud"

// The cloud function, defined here using a Narratory-cloud helper-method
export const regions = cloudFunction(async (req, res) => {
  res.send({
    set: {
      foo: "bar"
    }
  })
})
