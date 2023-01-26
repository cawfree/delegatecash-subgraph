import { BigInt } from "@graphprotocol/graph-ts"
import {
  DelegationRegistry,
  DelegateForAll,
  DelegateForContract,
  DelegateForToken,
  RevokeAllDelegates,
  RevokeDelegate
} from "../generated/DelegationRegistry/DelegationRegistry"
import { ExampleEntity } from "../generated/schema"

export function handleDelegateForAll(event: DelegateForAll): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.vault = event.params.vault
  entity.delegate = event.params.delegate

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.checkDelegateForAll(...)
  // - contract.checkDelegateForContract(...)
  // - contract.checkDelegateForToken(...)
  // - contract.getContractLevelDelegations(...)
  // - contract.getDelegatesForAll(...)
  // - contract.getDelegatesForContract(...)
  // - contract.getDelegatesForToken(...)
  // - contract.getDelegationsByDelegate(...)
  // - contract.getTokenLevelDelegations(...)
  // - contract.supportsInterface(...)
}

export function handleDelegateForContract(event: DelegateForContract): void {}

export function handleDelegateForToken(event: DelegateForToken): void {}

export function handleRevokeAllDelegates(event: RevokeAllDelegates): void {}

export function handleRevokeDelegate(event: RevokeDelegate): void {}
