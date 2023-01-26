import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DelegateForAll,
  DelegateForContract,
  DelegateForToken,
  RevokeAllDelegates,
  RevokeDelegate
} from "../generated/DelegationRegistry/DelegationRegistry"

export function createDelegateForAllEvent(
  vault: Address,
  delegate: Address,
  value: boolean
): DelegateForAll {
  let delegateForAllEvent = changetype<DelegateForAll>(newMockEvent())

  delegateForAllEvent.parameters = new Array()

  delegateForAllEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  delegateForAllEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  delegateForAllEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBoolean(value))
  )

  return delegateForAllEvent
}

export function createDelegateForContractEvent(
  vault: Address,
  delegate: Address,
  contract_: Address,
  value: boolean
): DelegateForContract {
  let delegateForContractEvent = changetype<DelegateForContract>(newMockEvent())

  delegateForContractEvent.parameters = new Array()

  delegateForContractEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  delegateForContractEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  delegateForContractEvent.parameters.push(
    new ethereum.EventParam("contract_", ethereum.Value.fromAddress(contract_))
  )
  delegateForContractEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBoolean(value))
  )

  return delegateForContractEvent
}

export function createDelegateForTokenEvent(
  vault: Address,
  delegate: Address,
  contract_: Address,
  tokenId: BigInt,
  value: boolean
): DelegateForToken {
  let delegateForTokenEvent = changetype<DelegateForToken>(newMockEvent())

  delegateForTokenEvent.parameters = new Array()

  delegateForTokenEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  delegateForTokenEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )
  delegateForTokenEvent.parameters.push(
    new ethereum.EventParam("contract_", ethereum.Value.fromAddress(contract_))
  )
  delegateForTokenEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  delegateForTokenEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromBoolean(value))
  )

  return delegateForTokenEvent
}

export function createRevokeAllDelegatesEvent(
  vault: Address
): RevokeAllDelegates {
  let revokeAllDelegatesEvent = changetype<RevokeAllDelegates>(newMockEvent())

  revokeAllDelegatesEvent.parameters = new Array()

  revokeAllDelegatesEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )

  return revokeAllDelegatesEvent
}

export function createRevokeDelegateEvent(
  vault: Address,
  delegate: Address
): RevokeDelegate {
  let revokeDelegateEvent = changetype<RevokeDelegate>(newMockEvent())

  revokeDelegateEvent.parameters = new Array()

  revokeDelegateEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  revokeDelegateEvent.parameters.push(
    new ethereum.EventParam("delegate", ethereum.Value.fromAddress(delegate))
  )

  return revokeDelegateEvent
}
