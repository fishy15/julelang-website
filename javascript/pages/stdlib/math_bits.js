const stdlib_math_bits_globalsHTML = `
<div class="sub-sub-title"><x class="inline_code">const UINT_SIZE</x></div>
Is the size of a uint in bits.

`;

const stdlib_math_bits_functionsHTML = `
<div class="code">fn leading_zeros(x: uint): int</div>
Returns the number of leading zero bits in x; the result is UINT_SIZE for x == 0.

<div class="topic-separator"></div>
<div class="code">fn leading_zeros8(x: u8): int</div>
Returns the number of leading zero bits in x; the result is 8 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn leading_zeros16(x: u16): int</div>
Returns the number of leading zero bits in x; the result is 16 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn leading_zeros32(x: u32): int</div>
Returns the number of leading zero bits in x; the result is 32 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn leading_zeros64(x: u64): int</div>
Returns the number of leading zero bits in x; the result is 64 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn trailing_zeros(x: uint): int</div>
Returns the number of trailing zero bits in x; the result is UINT_SIZE for x == 0.

<div class="topic-separator"></div>
<div class="code">fn trailing_zeros8(x: u8): int</div>
Returns the number of trailing zero bits in x; the result is 8 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn trailing_zeros16(x: u16): int</div>
Returns the number of trailing zero bits in x; the result is 16 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn trailing_zeros32(x: u32): int</div>
Returns the number of trailing zero bits in x; the result is 32 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn trailing_zeros64(x: u64): int</div>
Returns the number of trailing zero bits in x; the result is 64 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn ones_count(x: uint): int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">fn ones_count8(x: u8): int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">fn ones_count16(x: u16): int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">fn ones_count32(x: u32): int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">fn ones_count64(mut x: u64): int</div>
Returns the number of one bits ("population count") in x.

<div class="topic-separator"></div>
<div class="code">fn rotate_left(x: uint, k: int): uint</div>
Returns the value of x rotated left by (k mod UINT_SIZE) bits.
To rotate x right by k bits, call rotate_left(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn rotate_left8(x: u8, k: int): u8</div>
Returns the value of x rotated left by (k mod 8) bits.
To rotate x right by k bits, call rotate_left8(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn rotate_left16(x: u16, k: int): u16</div>
Returns the value of x rotated left by (k mod 16) bits.
To rotate x right by k bits, call rotate_left16(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn rotate_left32(x: u32, k: int): u32</div>
Returns the value of x rotated left by (k mod 32) bits.
To rotate x right by k bits, call rotate_left32(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn rotate_left64(x: u64, k: int): u64</div>
Returns the value of x rotated left by (k mod 64) bits.
To rotate x right by k bits, call rotate_left64(x, -k).

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn reverse(x: uint): uint</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">fn reverse8(x: u8): u8</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">fn reverse16(x: u16): u16</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">fn reverse32(mut x: u32): u32</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">fn reverse64(mut x: u64): u64</div>
Returns the value of x with its bits in reversed order.

<div class="topic-separator"></div>
<div class="code">fn reverse_bytes(x: uint): uint</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn reverse_bytes16(x: u16): u16</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn reverse_bytes32(mut x: u32): u32</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn reverse_bytes64(mut x: u64): u64</div>
Returns the value of x with its bytes in reversed order.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn len(x: uint): int</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn len8(x: u8): int</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn len16(mut x: u16): (n: int)</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn len32(mut x: u32): (n: int)</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn len64(mut x: u64): (n: int)</div>
Returns the minimum number of bits required to represent x;
the result is 0 for x == 0.

<div class="topic-separator"></div>
<div class="code">fn add(x: uint, y: uint, carry: uint): (sum: uint, carry_out: uint)</div>
Returns the sum with carry of x, y and carry: sum = x + y + carry.
The carry input must be 0 or 1; otherwise the behavior is undefined.
The carryout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn add32(x: u32, y: u32, carry: u32): (sum: u32, carryout: u32)</div>
Returns the sum with carry of x, y and carry: sum = x + y + carry.
The carry input must be 0 or 1; otherwise the behavior is undefined.
The carryout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn add64(x: u64, y: u64, carry: u64): (sum: u64, carryout: u64)</div>
Returns the sum with carry of x, y and carry: sum = x + y + carry.
The carry input must be 0 or 1; otherwise the behavior is undefined.
The carryout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn sub(x: uint, y: uint, borrow: uint): (diff: uint, borrow_out: uint)</div>
Returns the difference of x, y and borrow, diff = x - y - borrow.
The borrow input must be 0 or 1; otherwise the behavior is undefined.
The borrowout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn sub32(x: u32, y: u32, borrow: u32): (diff: u32, borrowout: u32)</div>
Returns the difference of x, y and borrow, diff = x - y - borrow.
The borrow input must be 0 or 1; otherwise the behavior is undefined.
The borrowout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn sub64(x: u64, y: u64, borrow: u64): (diff: u64, borrowout: u64)</div>
Returns the difference of x, y and borrow: diff = x - y - borrow.
The borrow input must be 0 or 1; otherwise the behavior is undefined.
The borrowout output is guaranteed to be 0 or 1.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn mul(x: uint, y: uint): (hi: uint, lo: uint)</div>
Returns the 64-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn mul32(x: u32, y: u32): (hi: u32, lo: u32)</div>
Returns the 64-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn mul64(x: u64, y: u64): (hi: u64, lo: u64)</div>
Returns the 128-bit product of x and y: (hi, lo) = x * y
with the product bits' upper half returned in hi and the lower
half returned in lo.

<div class="info">This function's execution time does not depend on the inputs.</div>

<div class="topic-separator"></div>
<div class="code">fn div(hi: uint, lo: uint, y: uint): (quo: uint, rem: uint)</div>
Returns the quotient and remainder of (hi, lo) divided by y: <br>
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper
half in parameter hi and the lower half in parameter lo. <br>
div panics for y == 0 (division by zero) or y <= hi (quotient overflow).

<div class="topic-separator"></div>
<div class="code">fn div32(hi: u32, lo: u32, y: u32): (quo: u32, rem: u32)</div>
Returns the quotient and remainder of (hi, lo) divided by y: <br>
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper
half in parameter hi and the lower half in parameter lo. <br>
div32 panics for y == 0 (division by zero) or y <= hi (quotient overflow).

<div class="topic-separator"></div>
<div class="code">fn div64(hi: u64, lo: u64, mut y: u64): (quo: u64, rem: u64)</div>
Returns the quotient and remainder of (hi, lo) divided by y: <br>
quo = (hi, lo)/y, rem = (hi, lo)%y with the dividend bits' upper
half in parameter hi and the lower half in parameter lo. <br>
div64 panics for y == 0 (division by zero) or y <= hi (quotient overflow).

<div class="topic-separator"></div>
<div class="code">fn rem(hi: uint, lo: uint, y: uint): uint</div>
Returns the remainder of (hi, lo) divided by y. rem panics for
y == 0 (division by zero) but, unlike div, it doesn't panic on a quotient overflow.

<div class="topic-separator"></div>
<div class="code">fn rem32(hi: u32, lo: u32, y: u32): u32</div>
Returns the remainder of (hi, lo) divided by y. rem32 panics
for y == 0 (division by zero) but, unlike div32, it doesn't panic on a quotient overflow.

<div class="topic-separator"></div>
<div class="code">fn rem64(hi: u64, lo: u64, y: u64): u64</div>
Returns the remainder of (hi, lo) divided by y. rem64 panics
for y == 0 (division by zero) but, unlike div64, it doesn't panic on a quotient overflow.

`;

const NAV_stdlib_math_bits_globals = document.getElementById("globals");
const NAV_stdlib_math_bits_functions = document.getElementById("functions");

const stdlib_math_bits_nav = new SideNavigator();
stdlib_math_bits_nav.navigations = [
    [NAV_stdlib_math_bits_globals, stdlib_math_bits_globalsHTML],
    [NAV_stdlib_math_bits_functions, stdlib_math_bits_functionsHTML],
];

stdlib_math_bits_nav.set_events();
stdlib_math_bits_nav.set_content_url();
