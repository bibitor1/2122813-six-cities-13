import { SlicesName } from '../../const';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[SlicesName.User].authorizationStatus;
