import { Transform } from 'class-transformer';

export function SanitizeCpf() {
  return Transform(({ value }) =>
    typeof value === 'string' ? value.replace(/\D/g, '') : value,
  );
}
