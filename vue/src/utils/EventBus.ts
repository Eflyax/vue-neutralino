export default class EventBus {
	bus;

	constructor() {
		this.bus = document.createElement('eventBus');
	}

	on(event, callback) {
		this.bus.addEventListener(event, callback);
	}

	removeEventListener(event, callback) {
		this.bus.removeEventListener(event, callback);
	}

	emit(event, detail) {
		this.bus.dispatchEvent(new CustomEvent(event, {
			detail
		}));
	}
}
