const DefaultCodes = {
  c: `#include <stdio.h>

int main() {
  printf("Hi, I'm Eessh :)");
  return 0;
}`,
  cpp: `#include <bits/stdc++.h>
#define ll long long
#define ull unsigned long long
using namespace std;

int main() {
  cout << "Hi, I'm Eessh :)" << endl;
  return 0;
}`,
  rust: `fn main() {
  println!("Hi, I'm Eessh :)");
}`,
  javascript: `console.log("Hi, I'm Eessh :));`,
  python: `print("Hi, I'm Eessh :)")`,
  go: `package main

import "fmt"

func main() {
  fmt.Println!("Hi, I'm Eessh :)")
}`
};

export default DefaultCodes;