import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';
import { List } from 'immutable';
import { PartialRecord } from './Partial';

export interface AppState {
  playing: boolean,
  fundamentalFrequency: number,
  partials: List<PartialRecord>,
  masterGain: number,
  totalCurve?: List<number>
}

export interface AppStateRecord extends TypedRecord<AppStateRecord>, AppState { }

export const appStateFactory = makeTypedFactory<AppState, AppStateRecord>({
  playing: false,
  fundamentalFrequency: 440,
  partials: <List<PartialRecord>>List.of(),
  masterGain: 1,
  totalCurve: <List<number>>List.of()
});
