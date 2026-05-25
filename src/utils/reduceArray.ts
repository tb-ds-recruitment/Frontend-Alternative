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

export declare const reduceArray: ReduceArray
