import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AddedOrganisation } from "../generated/schema"
import { AddedOrganisation as AddedOrganisationEvent } from "../generated/Contract/Contract"
import { handleAddedOrganisation } from "../src/contract"
import { createAddedOrganisationEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let organnisationId = BigInt.fromI32(234)
    let name = "Example string value"
    let description = "Example string value"
    let website = "Example string value"
    let logo = "Example string value"
    let newAddedOrganisationEvent = createAddedOrganisationEvent(
      organnisationId,
      name,
      description,
      website,
      logo
    )
    handleAddedOrganisation(newAddedOrganisationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddedOrganisation created and stored", () => {
    assert.entityCount("AddedOrganisation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddedOrganisation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "organnisationId",
      "234"
    )
    assert.fieldEquals(
      "AddedOrganisation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedOrganisation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedOrganisation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "website",
      "Example string value"
    )
    assert.fieldEquals(
      "AddedOrganisation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "logo",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
