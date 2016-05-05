/**
 * @Author: SplendourHui
 * @Date:   2016-05-05 20:06
* @Last modified by:   SplendourHui
* @Last modified time: 2016-05-05 20:20
 */



/* 有状态遍历，从左到右
 * accumulator是累加器，存储状态
 */
const foldl = f => accumulator => ([x, ...xs]) =>
  x === undefined ? accumulator : foldl(f)(f(accumulator)(x))(xs);

/* 有状态遍历，从右到左
 * accumulator是累加器，存储状态
 * 相当于 reduce 函数
 */
const foldr = f => accumulator => ([x, ...xs]) =>
  x === undefined ? accumulator : f(x)(foldr(f)(accumulator)(xs));


const loopOnArray = f => foldl(_ => x => f(x))(undefined);
exports.loopOnArray = loopOnArray;

const map = f => foldr(x => acc => [f(x), ...acc])([]);
exports.map = map;

const sum = foldr(x => acc => x + acc)(0);
exports.sum = sum;

const twoSteps = step1 => step2 => param =>
  step2(step1(param));
exports.twoSteps = twoSteps;

const local = value => step2 => twoSteps(_ => value)(step2)();
exports.local = local;

/*
step1 :: State -> [Value, State]
step2 :: Value -> (State -> [Value, State])
param :: State
bind :: (State -> [Value, State]) -> (Value -> (State -> [Value, State])) -> State -> [Value, State]
*/
const bind = step1 => buildStep2 => state =>
  local(step1(state))(([value1, state1]) =>
    local(buildStep2(value1))(step2 =>
      step2(state1)
    )
  );
exports.bind = bind;

/*
step1 :: State -> [Value, State]
step2 :: State -> [Value, State]
param :: State
begin :: (State -> [Value, State]) -> (State -> [Value, State]) -> State -> [Value, State]
*/
const begin = step1 => step2 => bind(step1)(_ => step2);
exports.begin = begin;
