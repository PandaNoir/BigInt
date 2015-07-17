VERSION = 6
PLUS = 0
MINUS = 1
GT = 1
EQ = 0
LT = -1
CHUNK_SIZE = 10000
console.log '[ver]'+VERSION
class BigInt
  constructor: (n)->
    if n instanceof BigInt
      @sign = n.sign
      @chunks = n.chunks.concat()
      return
    if typeof n != 'number'
      @chunks = n.concat()
      @sign = PLUS
      return
    @chunks = []
    @sign = PLUS
    m = n
    if n < 0
      @sign = MINUS
      m *= -1
    if m is 0
      @chunks = [0]
    else
      while m>0
        @chunks.push m % CHUNK_SIZE
        m = 0 | ( m / CHUNK_SIZE )
        @chunks.reverse()
  toString: ()->
    if @chunks.length is 1
      return (if @sign == MINUS then '-' else '')+@chunks[0]
    return (if @sign == MINUS then '-' else '') + @chunks[0] + @chunks.slice(1).map((s)-> ('0000'+s).slice(-4) ).join('')
  abs: ()->
    res = new BigInt(@)
    res.sign = PLUS
    return res
  add: (_a)->
    if _a.abs().compare(@.abs()) is LT
      a = new BigInt(@)
      b = new BigInt(_a)
    else
      a = new BigInt(_a)
      b = new BigInt(@)
    # |a| >= |b|

    res = []
    carry = 0
    while a.chunks.length > 0
      _res = a.chunks.pop()
      _res += carry
      carry = 0
      if b.chunks.length != 0
        if a.sign != b.sign
          _res -= b.chunks.pop()
        else
          _res += b.chunks.pop()
      res.push (if _res < 0 then CHUNK_SIZE + _res else _res) % CHUNK_SIZE
      if _res >= CHUNK_SIZE
        carry = 1
      else if _res < 0
        carry = -1
    if carry != 0
      res.push carry
    res.reverse()
    i = 0
    while res[i] == 0
      i++
    if i == res.length
      i -= 1
    res = res.slice(i)
    res = new BigInt(res)
    res.sign = a.sign
    if res.abs().compare(new BigInt(0)) is EQ
      res.sign = PLUS
    return res
  compare: (_a)->
    # if this > _a then return GT. if this == _a then return EQ. else return LT.
    a = _a
    b = @
    if a.sign != b.sign
      # a < 0 && b > 0 || a > 0 && b < 0
      return if b.sign is PLUS then GT else LT
    if a.chunks.length != b.chunks.length
      return if b.chunks.length > a.chunks.length then GT else LT
    for _,i in a.chunks
      if b.chunks[i] > a.chunks[i]
        return GT
      if b.chunks[i] < a.chunks[i]
        return LT
    return EQ
  minus: (_a)->
    a = new BigInt(_a)
    return @.add(a.mult(-1))
  mult: (_a)->
    a = new BigInt(_a)
    b = new BigInt(@)
    carry = 0
    res_chunks = new Array(a.chunks.length+b.chunks.length-1)
    for _, i in res_chunks
      res_chunks[i] = 0
    if a.abs().compare(b.abs()) is LT
      a = new BigInt(@)
      b = new BigInt(_a)
    for a_chunk, i in a.chunks
      for b_chunk, j in b.chunks
        if !res_chunks[i+j+1]
          res_chunks[i+j+1] = 0
        res_chunks[i+j+1] += a_chunk*b_chunk

    for res_chunk,i in res_chunks by -1
      if res_chunk >= CHUNK_SIZE
        res_chunks[i] = res_chunk % CHUNK_SIZE
        res_chunks[i-1] += 0 | res_chunk / CHUNK_SIZE
    if !res_chunks[0]
      res_chunks.shift()
    res = new BigInt(res_chunks)
    if a.sign != b.sign
      res.sign = MINUS
    return res
  pow: (n)->
    if n is 0
      return new BigInt(1)
    if n is 1
      return @
    return if n % 2 is 0 then @.mult(@).pow(n / 2) else @.mult(@).pow((n - 1) /2).mult(@)

module.exports = {
  BigInt: BigInt
  VERSION: VERSION
  PLUS: PLUS
  MINUS: MINUS
  GT: GT
  EQ: EQ
  LT: LT
  CHUNK_SIZE: CHUNK_SIZE
}

