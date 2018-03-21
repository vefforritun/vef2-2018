export const PROFILE_UPDATE = 'PROFILE_UPDATE';

export function update(name, age) {
  return {
    type: PROFILE_UPDATE,
    name,
    age,
  }
}

export function updateName(name) {
  return {
    type: PROFILE_UPDATE,
    name,
  }
}
