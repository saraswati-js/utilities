console.clear()

// trampoline
const Bounce = (f, x) => ({ isBounce: true, f, x })
const Done = x => ({ isBounce: false, x })

const trampoline = ({ isBounce, f, x }) => {
  while (isBounce)
    ({ isBounce, f, x } = f(x))
  return x
}

// our revised repeat1 function, now stack-safe
const repeat1 = n => f => x => n === 0 ? Done(x) : Bounce(repeat1(n - 1)(f), f(x))
let result = trampoline(repeat1(1e6)(x => x + 1)(0))

console.time('trampoline')
console.log(result) // 1000000
console.timeEnd('trampoline')

// Trampoline
const recur = (...values) =>
  ({ recur, values })

const loop = run => {
  let r = run()
  while (r && r.recur === recur)
    r = run(...r.values)
  return r
}

const repeat = n => f => x =>
  loop((m = n, r = x) =>
      m === 0
        ? r
        : recur(m - 1, f(r))
    )

console.time('loop/recur')
console.log(repeat(1e6)(x => x + 1)(0)) // 1000000
console.timeEnd('loop/recur')              // 24 ms

const repeat3 = n => f => x => {
  let m = n
  while (true) {
    if (m === 0)
      return x
    else
      (m = m - 1, x = f(x))
  }
}

const gadzillionTimes = repeat3(1e6)

const add1 = x => x + 1

const result2 = gadzillionTimes(add1)(0)
console.time('repeat3')
console.log(result2) // 100000000
console.timeEnd('repeat3')  