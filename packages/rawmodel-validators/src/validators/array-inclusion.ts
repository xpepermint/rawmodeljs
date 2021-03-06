import { isArray } from '@rawmodel/utils/dist/helpers/is-array';
import { isPresent } from '@rawmodel/utils';

/**
 * Returns a function for detecting values that exist in the array.
 */
export function arrayInclusionValidator(options: {
  values?: any[];
} = {}) {
  return (value?: any[]) => {
    const { values } = { ...options };

    if (
      !isPresent(value)
      || !isArray(value)
      || !isArray(values)
    ) {
      return true;
    }

    return values.filter((e) => value.indexOf(e) !== -1).length === value.length;
  };
}
