import ExtendableError from 'es6-error'

export const SEVERITY = {
	ERROR: 'error',
	WARNING: 'warning',
}

// Base error handling
export class BaseError extends ExtendableError {
	severity = SEVERITY.ERROR

	constructor(options) {
		super()
		Object.keys(options || {}).forEach(key => {
			this[key] = options[key]
		})
	}
}

// Module broken due to a dependency being broken
export class DependencyCascadeError extends BaseError {
	message = 'Dependency error cascade.'
	constructor(options) {
		super(Object.assign({
			dependency: '[Not Specified]',
		}, options))
	}
	get detail() {
		return `The ${this.dependency} module, which this module depends on, has failed.`
	}
}

// Global Errors
export class GlobalError extends BaseError {}

// TODO: Should I care about not being able to override the message?
export class ReportNotFoundError extends GlobalError {
	severity = SEVERITY.WARNING
	message = 'Report not found.'
	detail = 'The report specified either does not exist, or is private. Make sure you pasted the correct URL, and your log is either public or unlisted.'
}

// TODO: Bit of repetition. Should these be combined, or...?
export class NotFoundError extends GlobalError {
	severity = SEVERITY.WARNING
	message = 'Not found.'
	constructor(options) {
		super(Object.assign({
			type: '[Not Specified]',
			id: 0,
		}, options))
	}
	get detail() {
		return `No ${this.type} was found with ID ${this.id}.`
	}
}

export class DidNotParticipateError extends GlobalError {
	severity = SEVERITY.WARNING
	message = 'Didn\'t participate.'
	constructor(options) {
		super(Object.assign({
			combatant: '[Not Found]',
			fight: 0,
		}, options))
	}
	get detail() {
		return `Combatant ${this.combatant} did not take part in fight ${this.fight}.`
	}
}

export class UnknownApiError extends GlobalError {
	detail = 'An error occured while requesting data from FFLogs. If this issue persists, let us know on Discord.'
}