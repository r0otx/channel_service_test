import {watcherGetItems} from "./items";

export function* rootSaga () {
    yield watcherGetItems();
}