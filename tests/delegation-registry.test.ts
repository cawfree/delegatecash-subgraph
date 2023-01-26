import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { DelegateForAll } from "../generated/DelegationRegistry/DelegationRegistry"
import { handleDelegateForAll } from "../src/delegation-registry"
import { createDelegateForAllEvent } from "./delegation-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let vault = Address.fromString("0x0000000000000000000000000000000000000001")
    let delegate = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let value = "boolean Not implemented"
    let newDelegateForAllEvent = createDelegateForAllEvent(
      vault,
      delegate,
      value
    )
    handleDelegateForAll(newDelegateForAllEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "vault",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "delegate",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "value",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
