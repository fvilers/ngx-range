# ngx-range

An Angular structural directive to enumerate over a range of numbers

## Installation

Add the package to your application.

```
npm install --save ngx-range
```

## Versions

- Angular 11: 1.1.0
- Angular 15: 5.0.0

## Demo

https://stackblitz.com/edit/ngx-range-demo

## Getting started

Import the range module to your application module.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxRangeModule } from 'ngx-range';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxRangeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Using the directive

Add the directive to iterate over a set of numbers. There are 3 properties you can use to control the iteration:

- from: the starting number, inclusive
- to: the ending number, exclusive
- by: the incremental step value, defaults to 1

For example, the following template

```
<ul>
  <li *ngxRange="let value from 0 to 20 by 5">
    Item #{{value}}
  </li>
</ul>
```

will output

- Item #0
- Item #5
- Item #10
- Item #15
