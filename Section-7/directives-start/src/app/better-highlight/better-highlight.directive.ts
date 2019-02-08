import {
  Directive,
  OnInit,
  Renderer2,
  HostListener,
  ElementRef,
  HostBinding,
  Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'yellow';

  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.renderer.addClass(this.elRef.nativeElement, 'demoClass');

    const text = this.renderer.createText(' - text added');
    this.renderer.appendChild(this.elRef.nativeElement, text);
    // this.renderer.appendChild(this.elRef.nativeElement, this.renderer.createText( ' - another text added'));

    // method 3 - Input method - custom property binding
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // method 1 - renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'grey');
    // method 2 - HostBinding - simple
    // this.color = 'yellow';
    // method 3 - Input method - custom property binding
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // method 1 - renderer
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    // method 2 - HostBinding - simple
    // this.color = 'white';
    // method 3 - Input method - custom property binding
    this.color = this.defaultColor;

  }
}
