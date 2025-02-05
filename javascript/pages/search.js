// Copyright 2022 The Jule Programming Language.
// Use of this source code is governed by a BSD 3-Clause
// license that can be found in the LICENSE file.

// Search engine.

const root_path = location.href.substr(0,
  location.href.indexOf('website')+'website'.length);

const url = new URL(window.location.href);
let searched = url.searchParams.get('searched');

const body_div = document.getElementById('body-div');

const searchbox_html =
`
<div class="searchbox-page">
  <img
    class="searchbox-icon"
    src="./resources/magnifying_glass.png">
  <input id="searchbox-input" class="searchbox-input" type="text" placeholder="Type to Search"/>
</div>
`;

if (searched == null) {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
    ${searchbox_html}
</center>
`;
} else {
  searched = searched.toLowerCase();
body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title">Searching contents...</div>
</center>
`;

const contents = [
  // [[Keyword(s)], "Result Title", "Description Text", "URL"]
  [["home", "main"],                                                                                          "Home Page",                                                       "Go to home page.",                                                           `${root_path}/index.html`],
  [["search", "filter", "find", "found"],                                                                     "Search Page",                                                     "Go to search page.",                                                         `${root_path}/search.html`],
  [["license", "copyright"],                                                                                  "License",                                                         "Open source license text of project.",                                       `${root_path}/pages/license.html`],
  [["code", "conduct", "rule", "community", "git"],                                                           "Code of Conduct",                                                 "Code of conduct for contributors and community.",                            `${root_path}/pages/code_of_conduct.html`],
  [["git", "community", "stack overflow", "stackoverflow"],                                                   "Community",                                                       "Community, help, report and more.",                                          `${root_path}/pages/community.html`],
  [["contribute", "contributing", "guide", "fork"],                                                           "Contributing",                                                    "Contribution guidelines for contributing to the Jule programming language.", `${root_path}/pages/contributing.html`],
  [["guide", "doc", "info", "learn"],                                                                         "Documentations",                                                  "Documentations of the Jule programming language for every developer.",       `${root_path}/pages/docs.html`],
  [["doc", "info", "guide", "learn", "lang", "programming"],                                                  "Documentations - The Jule Programming Language",                  "About of the Jule programming language.",                                    `${root_path}/pages/docs.html?page=jule-lang`],
  [["doc", "info", "guide", "learn", "foreword"],                                                             "Documentations - Foreword",                                       "Foreword of documentations.",                                                `${root_path}/pages/docs.html?page=foreword`],
  [["doc", "info", "guide", "learn", "intro"],                                                                "Documentations - Introduction",                                   "Introduction of documentations.",                                            `${root_path}/pages/docs.html?page=introduction`],
  [["doc", "info", "guide", "learn", "getting", "start"],                                                     "Documentations - <strong>1.</strong> Getting Started",            "Getting Started topic of documentations.",                                   `${root_path}/pages/docs.html?page=getting-started`],
  [["doc", "info", "guide", "learn", "download", "get", "install"],                                           "Documentations - <strong>1.1.</strong> Downloads",                "Downloads sub-topic of Getting Started topic of documentations.",            `${root_path}/pages/docs.html?page=getting-started-downloads`],
  [["doc", "info", "guide", "learn", "get", "install"],                                                       "Documentations - <strong>1.2.</strong> Install from Source",      "Install from Source sub-topic of Getting Started topic of documentations.",  `${root_path}/pages/docs.html?page=getting-started-install-from-source`],
  [["doc", "info", "guide", "learn", "compile", "transpile"],                                                 "Documentations - <strong>2.</strong> Compiler",                   "Compiler topic of documentations.",                                          `${root_path}/pages/docs.html?page=compiler`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "platform", "support", "os", "sys", "arch"],     "Documentations - <strong>2.1.</strong> Platform Support",         "Platform Support sub-topic of Compiler topic of documentations.",            `${root_path}/pages/docs.html?page=compiler-platform-support`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "basic", "command"],                             "Documentations - <strong>2.2.</strong> Basic Commands",           "Basic Commands sub-topic of Compiler topic of documentations.",              `${root_path}/pages/docs.html?page=compiler-basic-commands`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "arg", "list", "cfg", "config", "option"],       "Documentations - <strong>2.3.</strong> Compiler Options",         "Compiler Options sub-topic of Compiler topic of documentations.",            `${root_path}/pages/docs.html?page=compiler-compiler-options`],
  [["doc", "info", "guide", "learn", "compile", "transpile", "compiling"],                                    "Documentations - <strong>2.4.</strong> Compiling",                "Compiling sub-topic of Compiler topic of documentations.",                   `${root_path}/pages/docs.html?page=compiler-compiling`],
  [["doc", "info", "guide", "learn", "project", "work"],                                                      "Documentations - <strong>3.</strong> Project",                    "Project topic of documentations.",                                           `${root_path}/pages/docs.html?page=project`],
  [["doc", "info", "guide", "learn", "project", "work", "order", "dir"],                                      "Documentations - <strong>3.1.</strong> Directory Order",          "Directory Order sub-topic of Project topic of documentations.",              `${root_path}/pages/docs.html?page=project-directory-order`],
  [["doc", "info", "guide", "learn", "project", "work", "naming"],                                            "Documentations - <strong>3.2.</strong> Naming",                   "Naming sub-topic of Project topic of documentations.",                       `${root_path}/pages/docs.html?page=project-naming`],
  [["doc", "info", "guide", "learn", "project", "work", "define", "declare"],                                 "Documentations - <strong>3.3.</strong> Declarations",             "Declarations sub-topic of Project topic of documentations.",                 `${root_path}/pages/docs.html?page=project-declarations`],
  [["doc", "info", "guide", "learn", "project", "work", "define"],                                            "Documentations - <strong>3.4.</strong> Defines",                  "Defines sub-topic of Project topic of documentations.",                      `${root_path}/pages/docs.html?page=project-defines`],
  [["doc", "info", "guide", "learn", "basic"],                                                                "Documentations - <strong>4.</strong> Basics",                     "Basics topic of documentations.",                                            `${root_path}/pages/docs.html?page=basics`],
  [["doc", "info", "guide", "learn", "basic", "comment"],                                                     "Documentations - <strong>4.1.</strong> Comments",                 "Comments sub-topic of Basics topic of documentations.",                      `${root_path}/pages/docs.html?page=basics-comments`],
  [["doc", "info", "guide", "learn", "basic", "reserved", "func", "entry", "point", "main", "init"],          "Documentations - <strong>4.2.</strong> Reserved Functions",       "Reserved Functions sub-topic of Basics topic of documentations.",            `${root_path}/pages/docs.html?page=basics-reserved-functions`],
  [["doc", "info", "guide", "learn", "basic", "data", "type"],                                                "Documentations - <strong>4.3.</strong> Data Types",               "Data Types sub-topic of Basics topic of documentations.",                    `${root_path}/pages/docs.html?page=basics-data-types`],
  [["doc", "info", "guide", "learn", "basic", "operator"],                                                    "Documentations - <strong>4.4.</strong> Operators",                "Operators sub-topic of Basics topic of documentations.",                     `${root_path}/pages/docs.html?page=basics-operators`],
  [["doc", "info", "guide", "learn", "basic", "attribute"],                                                   "Documentations - <strong>4.5.</strong> Attributes",               "Attributes sub-topic of Basics topic of documentations.",                    `${root_path}/pages/docs.html?page=basics-attributes`],
  [["doc", "info", "guide", "learn", "basic", "statatement"],                                                 "Documentations - <strong>4.6.</strong> Statements",               "Statements sub-topic of Basics topic of documentations.",                    `${root_path}/pages/docs.html?page=basics-statements`],
  [["doc", "info", "guide", "learn", "block", "scope"],                                                       "Documentations - <strong>4.7</strong> Blocks",                    "Blocks sub-topic of Basics topic of documentations.",                        `${root_path}/pages/docs.html?page=basics-blocks`],
  [["doc", "info", "guide", "learn", "common", "concept"],                                                    "Documentations - <strong>5.</strong> Common Concepts",            "Common Concepts topic of documentations.",                                   `${root_path}/pages/docs.html?page=common-concepts`],
  [["doc", "info", "guide", "learn", "common", "concept", "var", "const", "expr", "assign"],                  "Documentations - <strong>5.1.</strong> Variables",                "Variables sub-topic of Common Concepts topic of documentations.",            `${root_path}/pages/docs.html?page=common-concepts-variables`],
  [["doc", "info", "guide", "learn", "common", "concept", "func", "const", "defer", "scope"],                 "Documentations - <strong>5.2.</strong> Functions",                "Functions sub-topic of Common Concepts topic of documentations.",            `${root_path}/pages/docs.html?page=common-concepts-functions`],
  [["doc", "info", "guide", "learn", "common", "concept", "array"],                                           "Documentations - <strong>5.3.</strong> Arrays",                   "Arrays sub-topic of Common Concepts topic of documentations.",               `${root_path}/pages/docs.html?page=common-concepts-arrays`],
  [["doc", "info", "guide", "learn", "common", "concept", "slice"],                                           "Documentations - <strong>5.4.</strong> Slices",                   "Slices sub-topic of Common Concepts topic of documentations.",               `${root_path}/pages/docs.html?page=common-concepts-slices`],
  [["doc", "info", "guide", "learn", "common", "concept", "map", "hash", "key", "value"],                     "Documentations - <strong>5.5.</strong> Maps",                     "Maps sub-topic of Common Concepts topic of documentations.",                 `${root_path}/pages/docs.html?page=common-concepts-maps`],
  [["doc", "info", "guide", "learn", "common", "concept", "control", "loop", "flow", "if", "else", "iter"],   "Documentations - <strong>5.6.</strong> Control Flow",             "Control Flow sub-topic of Common Concepts topic of documentations.",         `${root_path}/pages/docs.html?page=common-concepts-control-flow`],
  [["doc", "info", "guide", "learn", "common", "concept", "enum", "const"],                                   "Documentations - <strong>5.7.</strong> Enums",                    "Enums sub-topic of Common Concepts topic of documentations.",                `${root_path}/pages/docs.html?page=common-concepts-enums`],
  [["doc", "info", "guide", "learn", "common", "concept", "struct", "field", "group", "stack", "oop", "obj"], "Documentations - <strong>5.8.</strong> Structures",               "Structures sub-topic of Common Concepts topic of documentations.",           `${root_path}/pages/docs.html?page=common-concepts-structures`],
  [["doc", "info", "guide", "learn", "trait", "interface", "shared", "behavior"],                             "Documentations - <strong>6.</strong> Traits",                     "Traits topic of documentations.",                                            `${root_path}/pages/docs.html?page=traits`],
  [["doc", "info", "guide", "learn", "trait", "interface", "shared", "behavior", "impl"],                     "Documentations - <strong>6.1.</strong> Implementing",             "Implementing sub-topic of Traits topic of documentations.",                  `${root_path}/pages/docs.html?page=traits-implementing`],
  [["doc", "info", "guide", "learn", "mem", "new", "alloc", "heap", "manage", "point", "ptr"],                "Documentations - <strong>7.</strong> Memory",                     "Memory topic of documentations.",                                            `${root_path}/pages/docs.html?page=memory`],
  [["doc", "info", "guide", "learn", "mem", "mut"],                                                           "Documentations - <strong>7.1.</strong> Immutability",             "Immutability sub-topic of Memory topic of documentations.",                  `${root_path}/pages/docs.html?page=memory-immutability`],
  [["doc", "info", "guide", "learn", "mem", "point", "ptr", "alloc", "heap", "stack"],                        "Documentations - <strong>7.2.</strong> Pointers",                 "Pointers sub-topic of Memory topic of documentations.",                      `${root_path}/pages/docs.html?page=memory-pointers`],
  [["doc", "info", "guide", "learn", "mem", "manage", "new", "alloc", "heap", "point", "free", "ptr"],        "Documentations - <strong>7.3.</strong> Memory Management",        "Memory Management sub-topic of Memory topic of documentations.",             `${root_path}/pages/docs.html?page=memory-memory-management`],
  [["doc", "info", "guide", "learn", "mem", "unsafe", "jule"],                                                "Documentations - <strong>8.</strong> Unsafe Jule",                "Unsafe Jule topic of documentations.",                                       `${root_path}/pages/docs.html?page=unsafe-jule`],
  [["doc", "info", "guide", "learn", "err", "panic", "abort", "hand", "exception", "throw"],                  "Documentations - <strong>9.</strong> Error Handling",             "Error Handling topic of documentations.",                                    `${root_path}/pages/docs.html?page=error-handling`],
  [["doc", "info", "guide", "learn", "err", "coding", "hand", "catch", "code", "enum", "const"],              "Documentations - <strong>9.1.</strong> Error Coding",             "Error Coding sub-topic of Error Handling topic of documentations.",          `${root_path}/pages/docs.html?page=error-handling-error-coding`],
  [["doc", "info", "guide", "learn", "err", "panic", "hand", "catch", "trait", "custom"],                     "Documentations - <strong>9.2.</strong> Error Trait",              "Error Trait sub-topic of Error Handling topic of documentations.",           `${root_path}/pages/docs.html?page=error-handling-error-trait`],
  [["doc", "info", "guide", "learn", "err", "panic", "abort", "exception", "throw"],                          "Documentations - <strong>9.3.</strong> Panics",                   "Panics sub-topic of Error Handling topic of documentations.",                `${root_path}/pages/docs.html?page=error-handling-panics`],
  [["doc", "info", "guide", "learn", "err", "panic", "hand", "exception", "throw", "recover"],                "Documentations - <strong>9.4.</strong> Handling Panics",          "Handling Panics sub-topic of Error Handling topic of documentations.",       `${root_path}/pages/docs.html?page=error-handling-handling-panics`],
  [["doc", "info", "guide", "learn", "type"],                                                                 "Documentations - <strong>10.</strong> Types",                     "Types topic of documentations.",                                             `${root_path}/pages/docs.html?page=types`],
  [["doc", "info", "guide", "learn", "type", "alias"],                                                        "Documentations - <strong>10.1.</strong> Aliasing",                "Aliasing sub-topic of Types topic of documentations.",                       `${root_path}/pages/docs.html?page=types-aliasing`],
  [["doc", "info", "guide", "learn", "type", "cast"],                                                         "Documentations - <strong>10.2.</strong> Casting",                 "Casting sub-topic of Types topic of documentations.",                        `${root_path}/pages/docs.html?page=types-casting`],
  [["doc", "info", "guide", "learn", "type", "generic"],                                                      "Documentations - <strong>10.3.</strong> Generics",                "Generics sub-topic of Types topic of documentations.",                       `${root_path}/pages/docs.html?page=types-generics`],
  [["doc", "info", "guide", "learn", "type", "str"],                                                          "Documentations - <strong>10.4.</strong> str",                     "str sub-topic of Types topic of documentations.",                            `${root_path}/pages/docs.html?page=types-str`],
  [["doc", "info", "guide", "learn", "type", "array"],                                                        "Documentations - <strong>10.5.</strong> Arrays",                  "Arrays sub-topic of Types topic of documentations.",                         `${root_path}/pages/docs.html?page=types-arrays`],
  [["doc", "info", "guide", "learn", "type", "slice"],                                                        "Documentations - <strong>10.6.</strong> Slices",                  "Slices sub-topic of Types topic of documentations.",                         `${root_path}/pages/docs.html?page=types-slices`],
  [["doc", "info", "guide", "learn", "type", "map", "hash"],                                                  "Documentations - <strong>10.7.</strong> Maps",                    "Maps sub-topic of Types topic of documentations.",                           `${root_path}/pages/docs.html?page=types-maps`],
  [["doc", "info", "guide", "learn", "type", "static", "global", "built"],                                    "Documentations - <strong>11.</strong> Type Statics",              "Type Statics topic of documentations.",                                      `${root_path}/pages/docs.html?page=type-statics`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "i8"],                                        "Documentations - <strong>11.1.</strong> i8",                      "i8 sub-topic of Type Statics topic of documentations.",                      `${root_path}/pages/docs.html?page=type-statics-i8`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "i16"],                                       "Documentations - <strong>11.2.</strong> i16",                     "i16 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-i16`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "i32"],                                       "Documentations - <strong>11.3.</strong> i32",                     "i32 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-i32`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "i64"],                                       "Documentations - <strong>11.4.</strong> i64",                     "i64 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-i64`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "u8"],                                        "Documentations - <strong>11.5.</strong> u8",                      "u8 sub-topic of Type Statics topic of documentations.",                      `${root_path}/pages/docs.html?page=type-statics-u8`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "u16"],                                       "Documentations - <strong>11.6.</strong> u16",                     "u16 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-u16`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "u32"],                                       "Documentations - <strong>11.7.</strong> u32",                     "u32 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-u32`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "u64"],                                       "Documentations - <strong>11.8.</strong> u64",                     "u64 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-u64`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "f32"],                                       "Documentations - <strong>11.9.</strong> f32",                     "f32 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-f32`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "f64"],                                       "Documentations - <strong>11.10.</strong> f64",                    "f64 sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-f64`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "int"],                                       "Documentations - <strong>11.11.</strong> int",                    "int sub-topic of Type Statics topic of documentations.",                     `${root_path}/pages/docs.html?page=type-statics-int`],
  [["doc", "info", "guide", "learn", "type", "static", "built", "uint"],                                      "Documentations - <strong>11.11.</strong> int",                    "uint sub-topic of Type Statics topic of documentations.",                    `${root_path}/pages/docs.html?page=type-statics-uint`],
  [["doc", "info", "guide", "learn", "cpp", "api", "embed"],                                                  "Documentations - <strong>12.</strong> Cpp",                       "Cpp topic of documentations.",                                               `${root_path}/pages/docs.html?page=cpp`],
  [["doc", "info", "guide", "learn", "cpp", "api", "embed"],                                                  "Documentations - <strong>12.1.</strong> API",                     "API sub-topic of Cpp topic of documentations.",                              `${root_path}/pages/docs.html?page=cpp-api`],
  [["doc", "info", "guide", "learn", "cpp", "api", "embed"],                                                  "Documentations - <strong>12.2.</strong> Interoperability",        "Interoperability sub-topic of Cpp topic of documentations.",                 `${root_path}/pages/docs.html?page=cpp-interoperability`],
  [["doc", "info", "guide", "learn", "use", "decl", "pkg", "pack"],                                           "Documentations - <strong>13</strong> Use Declarations",           "Use Declarations topic of documentations.",                                  `${root_path}/pages/docs.html?page=use-declarations`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib"],                                               "Documentations - <strong>14</strong> Standard Library",           "Standard Library topic of documentations.",                                  `${root_path}/pages/docs.html?page=stdlib`],
  [["doc", "info", "guide", "end"],                                                                           "Documentations - End",                                            "End of documentations.",                                                     `${root_path}/pages/docs.html?page=end`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "built"],                                      "Documentations - <strong>stdlib:</strong> builtin",               "The builtin library documentations.",                                        `${root_path}/pages/stdlib/builtin.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "conv", "parse", "str", "fmt", "format"],      "Documentations - <strong>stdlib:</strong> std::conv",             "The std::conv stdlib documentations.",                                       `${root_path}/pages/stdlib/conv.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "debug", "assert"],                            "Documentations - <strong>stdlib:</strong> std::debug",            "The std::debug stdlib documentations.",                                      `${root_path}/pages/stdlib/debug.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "debug", "assert"],                            "Documentations - <strong>stdlib:</strong> std::debug::assert",    "The std::debug::assert stdlib documentations.",                              `${root_path}/pages/stdlib/debug_assert.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "err"],                                        "Documentations - <strong>stdlib:</strong> std::errors",           "The std::errors stdlib documentations.",                                     `${root_path}/pages/stdlib/errors.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "fs", "file", "dir", "sys"],                   "Documentations - <strong>stdlib:</strong> std::fs",               "The std::fs stdlib documentations.",                                         `${root_path}/pages/stdlib/fs.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "io"],                                         "Documentations - <strong>stdlib:</strong> std::io",               "The std::io stdlib documentations.",                                         `${root_path}/pages/stdlib/io.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "math"],                                       "Documentations - <strong>stdlib:</strong> std::math",             "The std::math stdlib documentations.",                                       `${root_path}/pages/stdlib/math.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "math", "bits"],                               "Documentations - <strong>stdlib:</strong> std::math::bits",       "The std::math::bits stdlib documentations.",                                 `${root_path}/pages/stdlib/math_bits.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "mem"],                                        "Documentations - <strong>stdlib:</strong> std::mem",              "The std::mem stdlib documentations.",                                        `${root_path}/pages/stdlib/mem.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "mem", "c", "man"],                            "Documentations - <strong>stdlib:</strong> std::mem::c",           "The std::mem::c stdlib documentations.",                                     `${root_path}/pages/stdlib/mem_c.html`],  
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "os"],                                         "Documentations - <strong>stdlib:</strong> std::os",               "The std::os stdlib documentations.",                                         `${root_path}/pages/stdlib/os.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "reflect"],                                    "Documentations - <strong>stdlib:</strong> std::reflect",          "The std::reflect stdlib documentations.",                                    `${root_path}/pages/stdlib/reflect.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "run", "time"],                                "Documentations - <strong>stdlib:</strong> std::runtime",          "The std::runtime stdlib documentations.",                                    `${root_path}/pages/stdlib/runtime.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "sync"],                                       "Documentations - <strong>stdlib:</strong> std::sync",             "The std::sync stdlib documentations.",                                       `${root_path}/pages/stdlib/sync.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "sync", "atomic"],                             "Documentations - <strong>stdlib:</strong> std::sync::atomic",     "The std::sync::atomic stdlib documentations.",                               `${root_path}/pages/stdlib/sync_atomic.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "sys", "api", "kernel"],                       "Documentations - <strong>stdlib:</strong> std::sys",              "The std::sys stdlib documentations.",                                        `${root_path}/pages/stdlib/sys.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "unicode", "utf", "str"],                      "Documentations - <strong>stdlib:</strong> std::unicode",          "The std::unicode stdlib documentations.",                                    `${root_path}/pages/stdlib/unicode.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "unicode", "utf", "str"],                      "Documentations - <strong>stdlib:</strong> std::unicode::utf16",   "The std::unicode::utf16 stdlib documentations.",                             `${root_path}/pages/stdlib/unicode_utf16.html`],
  [["doc", "info", "guide", "learn", "std", "standard", "lib", "unicode", "utf", "str"],                      "Documentations - <strong>stdlib:</strong> std::unicode::utf8",    "The std::unicode::utf8 stdlib documentations.",                              `${root_path}/pages/stdlib/unicode_utf8.html`],

  /* [["doc", "info", "guide", "learn"],                       "Documentations - <strong></strong> ", "",                                    `${root_path}/pages/docs.html?page=`], */
];

function string_diff(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) {
        costs[j] = j;
      } else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      costs[s2.length] = lastValue;
    }
  }
  return costs[s2.length];
}

let results      = "";
let result_count = 0;
let predictions  = [];

searched = searched
          .replace('\t', ' ')
          .replace('\v', ' ')
          .replace('\n', '')
          .replace('\r', '');
const words = searched.split(' ');

contents.forEach((value) => {
  const keywords = value[0];
  for (let index = 0; index < keywords.length; index++) {
    const keyword = keywords[index];
    if (words.filter(word => word.startsWith(keyword)).length > 0) {
      results +=
      `
      <div class="search-result">
      <a href="${value[3]}">${value[1]}</a>
      <div style="margin-top: 5px;">${value[2]}</div>
      <div>`;
      result_count++;
      break;
    }
    if (words.filter(word => string_diff(word, keyword) >= 0.5 ||
        word.includes(keyword)).length > 0) {
      if (!predictions.includes(keyword)) {
        predictions.push(keyword);
      }
    }
  }
});

let prediction_links = "";
predictions.forEach((value) => {
  prediction_links += `<a href="${root_path}/search.html?searched=${value}">"${value}"</a>,`;
});
if (prediction_links != "") {
  prediction_links = prediction_links.substring(0, prediction_links.length-1);
}

let predictionsHTML =
`
<div class="search-predictions">
  <div class="sub-title">May helpful:</div>
  <div>${prediction_links}</div>
</div>
`;

if (results == "") {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title" style="word-wrap: break-word;">No result for: "${searched}"</div>
  ${prediction_links == "" ? "" : predictionsHTML}
  <div style="margin-bottom: 50px;"></div>
  ${searchbox_html}
</center>
`;
} else {
  body_div.innerHTML =
`
<center>
  <img
    width="200px"
    height="200px"
    src="./resources/magnifying_glass.png"
    style="margin-top: 100px; margin-bottom: 50px">
  <div class="title" style="word-wrap: break-word; margin-bottom: 50px;">${result_count} matched results for: "${searched}"</div>
  ${searchbox_html}
</center>
<div style="margin-left: 20%; margin-right: 20%;">
${results}
</div>
`;
}
}
