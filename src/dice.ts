export type D6Value = 1 | 2 | 3 | 4 | 5 | 6;

export function rollD6(): D6Value {
  return rollDie(6) as D6Value;
}

export function rollD6x2(): [D6Value, D6Value] {
  return [rollD6(), rollD6()];
}

export function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}
