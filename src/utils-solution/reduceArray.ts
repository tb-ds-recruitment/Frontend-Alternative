export type ReducerCallback<TItem, TAccumulator> = (
  accumulator: TAccumulator,
  currentValue: TItem,
  currentIndex: number,
  array: TItem[],
) => TAccumulator

export type ReduceArray = <TItem, TAccumulator>(
  array: TItem[],
  callback: ReducerCallback<TItem, TAccumulator>,
  initialValue: TAccumulator,
) => TAccumulator

export const reduceArray: ReduceArray = (array, callback, initialValue) => {
  let accumulator = initialValue

  for (let index = 0; index < array.length; index += 1) {
    accumulator = callback(accumulator, array[index], index, array)
  }

  return accumulator
}
