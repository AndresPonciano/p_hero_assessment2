export function saveToLocalStorage(state) {
    try {
        console.log('in save', state);
        const serializedState = JSON.stringify(state);
        console.log('in save', serializedState);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

export function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        console.log('in load', JSON.parse(serializedState).date.date);
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}
