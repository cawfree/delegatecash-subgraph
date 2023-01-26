import {
  ethereum,
  crypto,
  ByteArray,
} from "@graphprotocol/graph-ts"
import {
  DelegateForAll,
  DelegateForContract,
  DelegateForToken,
  RevokeAllDelegates,
  RevokeDelegate,
} from "../generated/DelegationRegistry/DelegationRegistry"
import {
  DelegateForAllEvent,
  DelegateForContractEvent,
  DelegateForTokenEvent, RevokeAllDelegatesEvent, RevokeDelegateEvent,
} from "../generated/schema"

function keccakString(value: string): string {
  return crypto.keccak256(ByteArray.fromUTF8(value)).toHexString();
}

function createEventId(eventName: string, event: ethereum.Event): string {
  return keccakString(`${eventName}:${event.transaction.from.toHex()}:${event.logIndex}`);
}

export function handleDelegateForAll(event: DelegateForAll): void {
  const entity = new DelegateForAllEvent(
    createEventId('DelegateForAll', event)
  );

  entity.vault = event.params.vault;
  entity.delegate = event.params.delegate;
  entity.value = event.params.value;

  entity.save();
}

export function handleDelegateForContract(event: DelegateForContract): void {
  const entity = new DelegateForContractEvent(
    createEventId('DelegateForContract', event)
  );

  entity.vault = event.params.vault;
  entity.delegate = event.params.delegate;
  entity.contract = event.params.contract_;
  entity.value = event.params.value;

  entity.save();
}

export function handleDelegateForToken(event: DelegateForToken): void {
  const entity = new DelegateForTokenEvent(
    createEventId('DelegateForToken', event)
  );

  entity.vault = event.params.vault;
  entity.delegate = event.params.delegate;
  entity.contract = event.params.contract_;
  entity.token = event.params.tokenId;
  entity.value = event.params.value;

  entity.save();
}

export function handleRevokeAllDelegates(event: RevokeAllDelegates): void {
  const entity = new RevokeAllDelegatesEvent(
    createEventId('RevokeAllDelegates', event)
  );
  entity.vault = event.params.vault;

  entity.save();
}

export function handleRevokeDelegate(event: RevokeDelegate): void {
  const entity = new RevokeDelegateEvent(
    createEventId('RevokeDelegate', event)
  );

  entity.vault = event.params.vault;
  entity.delegate = event.params.delegate;

  entity.save();
}
