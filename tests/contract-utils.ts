import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AddedOrganisation,
  BeneficiaryChanged,
  DonationReceived,
  EmergencyStopSet,
  FundsWithdrawn,
  NsawaTransfer,
  WithdrawalRequested
} from "../generated/Contract/Contract"

export function createAddedOrganisationEvent(
  organnisationId: BigInt,
  name: string,
  description: string,
  website: string,
  logo: string
): AddedOrganisation {
  let addedOrganisationEvent = changetype<AddedOrganisation>(newMockEvent())

  addedOrganisationEvent.parameters = new Array()

  addedOrganisationEvent.parameters.push(
    new ethereum.EventParam(
      "organnisationId",
      ethereum.Value.fromUnsignedBigInt(organnisationId)
    )
  )
  addedOrganisationEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addedOrganisationEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  addedOrganisationEvent.parameters.push(
    new ethereum.EventParam("website", ethereum.Value.fromString(website))
  )
  addedOrganisationEvent.parameters.push(
    new ethereum.EventParam("logo", ethereum.Value.fromString(logo))
  )

  return addedOrganisationEvent
}

export function createBeneficiaryChangedEvent(
  newBeneficiary: Address
): BeneficiaryChanged {
  let beneficiaryChangedEvent = changetype<BeneficiaryChanged>(newMockEvent())

  beneficiaryChangedEvent.parameters = new Array()

  beneficiaryChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newBeneficiary",
      ethereum.Value.fromAddress(newBeneficiary)
    )
  )

  return beneficiaryChangedEvent
}

export function createDonationReceivedEvent(
  donationId: BigInt,
  organisationID: BigInt,
  donor: Address,
  amount: BigInt,
  message: string,
  timestamp: BigInt
): DonationReceived {
  let donationReceivedEvent = changetype<DonationReceived>(newMockEvent())

  donationReceivedEvent.parameters = new Array()

  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "donationId",
      ethereum.Value.fromUnsignedBigInt(donationId)
    )
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "organisationID",
      ethereum.Value.fromUnsignedBigInt(organisationID)
    )
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  donationReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return donationReceivedEvent
}

export function createEmergencyStopSetEvent(
  emergencyStop: boolean
): EmergencyStopSet {
  let emergencyStopSetEvent = changetype<EmergencyStopSet>(newMockEvent())

  emergencyStopSetEvent.parameters = new Array()

  emergencyStopSetEvent.parameters.push(
    new ethereum.EventParam(
      "emergencyStop",
      ethereum.Value.fromBoolean(emergencyStop)
    )
  )

  return emergencyStopSetEvent
}

export function createFundsWithdrawnEvent(
  beneficiary: Address,
  amount: BigInt,
  timestamp: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiary",
      ethereum.Value.fromAddress(beneficiary)
    )
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return fundsWithdrawnEvent
}

export function createNsawaTransferEvent(
  donationId: BigInt,
  donor: Address,
  amount: BigInt
): NsawaTransfer {
  let nsawaTransferEvent = changetype<NsawaTransfer>(newMockEvent())

  nsawaTransferEvent.parameters = new Array()

  nsawaTransferEvent.parameters.push(
    new ethereum.EventParam(
      "donationId",
      ethereum.Value.fromUnsignedBigInt(donationId)
    )
  )
  nsawaTransferEvent.parameters.push(
    new ethereum.EventParam("donor", ethereum.Value.fromAddress(donor))
  )
  nsawaTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return nsawaTransferEvent
}

export function createWithdrawalRequestedEvent(
  transactionId: BigInt,
  signer: Address,
  amount: BigInt,
  timestamp: BigInt
): WithdrawalRequested {
  let withdrawalRequestedEvent = changetype<WithdrawalRequested>(newMockEvent())

  withdrawalRequestedEvent.parameters = new Array()

  withdrawalRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "transactionId",
      ethereum.Value.fromUnsignedBigInt(transactionId)
    )
  )
  withdrawalRequestedEvent.parameters.push(
    new ethereum.EventParam("signer", ethereum.Value.fromAddress(signer))
  )
  withdrawalRequestedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawalRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return withdrawalRequestedEvent
}
