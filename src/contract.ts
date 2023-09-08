import {
  AddedOrganisation as AddedOrganisationEvent,
  BeneficiaryChanged as BeneficiaryChangedEvent,
  DonationReceived as DonationReceivedEvent,
  EmergencyStopSet as EmergencyStopSetEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  NsawaTransfer as NsawaTransferEvent,
  WithdrawalRequested as WithdrawalRequestedEvent
} from "../generated/Contract/Contract"
import {
  AddedOrganisation,
  BeneficiaryChanged,
  DonationReceived,
  EmergencyStopSet,
  FundsWithdrawn,
  NsawaTransfer,
  WithdrawalRequested
} from "../generated/schema"

export function handleAddedOrganisation(event: AddedOrganisationEvent): void {
  let entity = new AddedOrganisation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.organnisationId = event.params.organnisationId
  entity.name = event.params.name
  entity.description = event.params.description
  entity.website = event.params.website
  entity.logo = event.params.logo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeneficiaryChanged(event: BeneficiaryChangedEvent): void {
  let entity = new BeneficiaryChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newBeneficiary = event.params.newBeneficiary

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDonationReceived(event: DonationReceivedEvent): void {
  let entity = new DonationReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donationId = event.params.donationId
  entity.organisationID = event.params.organisationID
  entity.donor = event.params.donor
  entity.amount = event.params.amount
  entity.message = event.params.message
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEmergencyStopSet(event: EmergencyStopSetEvent): void {
  let entity = new EmergencyStopSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.emergencyStop = event.params.emergencyStop

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beneficiary = event.params.beneficiary
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNsawaTransfer(event: NsawaTransferEvent): void {
  let entity = new NsawaTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.donationId = event.params.donationId
  entity.donor = event.params.donor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawalRequested(
  event: WithdrawalRequestedEvent
): void {
  let entity = new WithdrawalRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.transactionId = event.params.transactionId
  entity.signer = event.params.signer
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
