// Copyright 2022 The Jule Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

const preview_code_helloworldHTML =
`fn main() {
    outln("Hello, world")
}`;

const preview_code_quicksortHTML =
`fn quicksort(mut s: []int) {
    if s.len <= 1 {
        ret
    }
    let mut i = 0
    for i < s.len-1; i++ {
        let (mut x, mut y) = &s[i], &s[i+1]
        unsafe {
            if *x > *y {
                *x, *y = *y, *x
            }
        }
    }
    quicksort(s[:i])
    quicksort(s[i+1:])
}

fn main() {
    let mut s = [1, 9, -2, 25, -24, 4623, 0, -1, 0xFD2]
    outln(s)
    quicksort(s)
    outln(s)
}`;

const preview_code_traitsHTML =
`use std::math::{PI}

trait Shape {
    fn area(self): int
}

struct Rectangle {
    width: int
    height: int
}

impl Shape for Rectangle {
    fn area(self): int {
        ret self.width * self.height
    }
}

struct Circle {
    r: f32
}

impl Shape for Circle {
    fn area(self): int {
        ret PI * self.r * self.r
    }
}

fn main() {
    let rect: Shape = Rectangle{90, 5}
    let circ: Shape = Circle{90.5}
    outln(rect.area())
    outln(circ.area())
}`;

//#region GET_ELEMENTS

const preview_code            = document.getElementById('preview-code')
const preview_dropdown_text   = document.getElementById('preview-dropdown-text');
const preview_code_helloworld = document.getElementById('preview-code-helloworld');
const preview_code_quicksort  = document.getElementById('preview-code-quicksort');
const preview_code_traits     = document.getElementById('preview-code-traits');

//#endregion GET_ELEMENTS

preview_code_helloworld.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_helloworld.innerHTML;
  preview_code.innerHTML = preview_code_helloworldHTML;
});

preview_code_quicksort.addEventListener("click", () => {
  preview_dropdown_text.innerHTML = preview_code_quicksort.innerHTML;
  preview_code.innerHTML = preview_code_quicksortHTML;
})

preview_code_traits.addEventListener('click', () => {
  preview_dropdown_text.innerHTML = preview_code_traits.innerHTML;
  preview_code.innerHTML = preview_code_traitsHTML;
})

preview_code_helloworld.click();
