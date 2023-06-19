import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[resizeColumn]',
})
export class ResizeColumnDirective implements OnInit {
  @Input('resizeColumn') resizable: boolean = false;

  @Input() index: number = 0;

  private startX: number = 0;

  private startWidth: number = 0;

  private column: HTMLElement;

  private table: HTMLElement = {} as HTMLElement;

  private pressed?: boolean;
  private isResized: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.column = this.el.nativeElement;
  }

  ngOnInit() {
    if (this.resizable) {
      const row = this.renderer.parentNode(this.column);
      const thead = this.renderer.parentNode(row);
      this.table = this.renderer.parentNode(thead);

      const resizer = this.renderer.createElement('span');
      this.renderer.addClass(resizer, 'resize-holder');
      this.renderer.appendChild(this.column, resizer);
      this.renderer.listen(resizer, 'mousedown', this.onMouseDown);
      this.renderer.listen(this.table, 'mousemove', this.onMouseMove);
      this.renderer.listen('document', 'mouseup', this.onMouseUp);
      this.renderer.listen(this.column, 'dblclick', this.onDoubleClick);
    }
  }

  onMouseDown = (event: MouseEvent) => {
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = this.column.offsetWidth;
  };

  onMouseMove = (event: MouseEvent) => {
    const offset = 0;
    if (this.pressed && event?.buttons == 1) {
      this.renderer.addClass(this.table, 'resizing');
      let width = this.startWidth + (event.pageX - this.startX - offset);

      const tableCells = Array.from(
        this.table.querySelectorAll('.mat-mdc-row')
      ).map((row: Element) =>
        row.querySelectorAll('.mat-mdc-cell').item(this.index)
      );

      requestAnimationFrame(() => {
        this.renderer.setStyle(this.column, 'max-width', `${width}px`);
        this.renderer.setStyle(this.column, 'width', `${width}px`);

        for (const cell of tableCells) {
          this.renderer.setStyle(cell, 'max-width', `${width}px`);
          this.renderer.setStyle(cell, 'width', `${width}px`);
        }
      });
    }
  };

  onMouseUp = (event: MouseEvent) => {
    if (this.pressed) {
      this.pressed = false;
      this.renderer.removeClass(this.table, 'resizing');
    }
  };

  onDoubleClick = (event: MouseEvent) => {
    const tableCells = Array.from(
      this.table.querySelectorAll('.mat-mdc-row')
    ).map((row: Element) =>
      row.querySelectorAll('.mat-mdc-cell').item(this.index)
    );

    requestAnimationFrame(() => {
      let columnHeaderWidth = 0;
      if (!this.isResized) {
        const columnHeader = this.column as any;
        columnHeaderWidth = columnHeader.children[0].offsetWidth;

        const currentWidth = columnHeader.offsetWidth;

        for (const cell of tableCells) {
          const cellElement = cell as any;
          const cellWidth = cellElement.children[0].offsetWidth;

          columnHeaderWidth = Math.max(columnHeaderWidth, cellWidth);
        }
      } else {
        columnHeaderWidth = 30;
      }

      const offsetWidth = 40;
      this.renderer.setStyle(
        this.column,
        'max-width',
        `${columnHeaderWidth + offsetWidth}px`
      );
      this.renderer.setStyle(
        this.column,
        'width',
        `${columnHeaderWidth + offsetWidth}px`
      );

      for (const cell of tableCells) {
        this.renderer.setStyle(
          cell,
          'max-width',
          `${columnHeaderWidth + offsetWidth}px`
        );
        this.renderer.setStyle(
          cell,
          'width',
          `${columnHeaderWidth + offsetWidth}px`
        );
      }

      this.isResized = !this.isResized;
    });
  };
}
