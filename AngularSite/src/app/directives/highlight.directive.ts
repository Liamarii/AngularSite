import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    setColor(textColor: string, backgroundColor: string) {
        this.renderer.addClass(this.elementRef.nativeElement, textColor);
        this.renderer.addClass(this.elementRef.nativeElement, backgroundColor);
        this.renderer.addClass(this.elementRef.nativeElement, 'w-fit');
        this.renderer.addClass(this.elementRef.nativeElement, 'p-2');
        this.renderer.addClass(this.elementRef.nativeElement, 'm-auto');
        this.renderer.addClass(this.elementRef.nativeElement, 'mt-2');
        this.renderer.addClass(this.elementRef.nativeElement, 'border');
        this.renderer.addClass(this.elementRef.nativeElement, 'border-black');
        this.renderer.addClass(this.elementRef.nativeElement, 'rounded-xl');
    }

    @Input() textColour: any;
    @Input() backgroundColour: any;

    ngOnInit() {
    this.setColor(this.textColour, this.backgroundColour);
    }
}