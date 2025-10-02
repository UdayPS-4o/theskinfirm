import * as migration_20251002_030928 from './20251002_030928';

export const migrations = [
  {
    up: migration_20251002_030928.up,
    down: migration_20251002_030928.down,
    name: '20251002_030928'
  },
];
