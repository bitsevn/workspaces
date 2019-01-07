import { AfterViewInit, Component, NgZone, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit, AfterViewInit, OnChanges {
  containerHeight: number;
  containerWidth: number;
  widgets: any[] = [
    { widgetId: 1, widgetName: 'Widget 1', x: 10, y: 10, height: 40, width: 20 },
    { widgetId: 2, widgetName: 'Widget 2', x: 15, y: 15, height: 40, width: 20 },
    { widgetId: 2, widgetName: 'Widget 3', x: 20, y: 20, height: 40, width: 20 },
    { widgetId: 4, widgetName: 'Widget 4', x: 25, y: 25, height: 40, width: 20 },
    { widgetId: 5, widgetName: 'Widget 5', x: 30, y: 30, height: 40, width: 20 }
  ];

  constructor(private zone: NgZone) {}

  calcPixels(percentage, total) {
    const pxl = (percentage * total) / 100;
    //console.log('calcPxl', { percentage, total, pxl });
    return pxl;
  }

  ngOnChanges() {
    console.log('onChanges()', this.widgets);
  }

  ngOnInit() {
    const container = document.getElementById('container');
    this.containerHeight = container.offsetHeight;
    this.containerWidth = container.offsetWidth;
    console.log('container offset', { height: this.containerHeight, width: this.containerWidth });
    this.initDrag();
  }

  ngAfterViewInit() {
    const allWidgetHeaders = document.querySelectorAll('.widget-header');
    allWidgetHeaders.forEach(widgetHeader => {
      widgetHeader.addEventListener(
        'mousedown',
        e => {
          allWidgetHeaders.forEach(wh => {
            if (wh === e.target) {
              wh.parentElement.classList.add('widget-top');
            } else {
              wh.parentElement.classList.remove('widget-top');
            }
          });
        },
        false
      );
    });
  }

  initDrag() {
    const container = document.querySelector('#container');
    let activeItem = null;

    let active = false;

    container.addEventListener('touchstart', dragStart, false);
    container.addEventListener('touchend', dragEnd, false);
    container.addEventListener('touchmove', drag, false);

    container.addEventListener('mousedown', dragStart, false);
    container.addEventListener('mouseup', dragEnd.bind(this), false);
    container.addEventListener('mousemove', drag, false);

    function dragStart(e) {
      const isWidgetHeaderElement = e.target.classList.contains('widget-header');
      const parentWidgetToBeDragged = e.target.parentElement;
      if (e.target !== e.currentTarget && isWidgetHeaderElement && parentWidgetToBeDragged) {
        active = true;

        // this is the item we are interacting with
        //activeItem = e.target;

        activeItem = parentWidgetToBeDragged;
        //console.log('parent element', activeItem.parentElement);
        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === 'touchstart') {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            //console.log('doing something!');
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
            /* console.log('coords', {
              xOffset: activeItem.xOffset,
              yOffset: activeItem.yOffset,
              clientX: e.clientX,
              clientY: e.clientY,
              initialX: activeItem.initialX,
              initialY: activeItem.initialY
            }); */
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }

      /* if (this) {
        const that = this;
        console.log('activeItem.id', activeItem.id);
        console.log('current item bounds', activeItem.getBoundingClientRect());
        const currentWidget = that.widgets.find(wid => 'widget-' + wid.widgetId === activeItem.id);
        console.log(currentWidget);
        if (currentWidget) {
          const newBounds = activeItem.getBoundingClientRect();
          console.log('xy', {
            x: (newBounds.left * 100) / that.containerWidth,
            y: (newBounds.top * 100) / that.containerHeight
          });
        }
      } */

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        e.preventDefault();

        if (e.type === 'touchmove') {
          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }
  }
}
