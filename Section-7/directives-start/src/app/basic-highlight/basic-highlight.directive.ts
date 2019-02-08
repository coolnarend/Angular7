import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elmentRef: ElementRef) {}

    ngOnInit() {
        this.elmentRef.nativeElement.style.border = '1px solid #ccc';
        this.elmentRef.nativeElement.style.padding = '10px';
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.elmentRef.nativeElement.style.backgroundColor = 'skyblue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.elmentRef.nativeElement.style.backgroundColor = 'white';
    }
}
