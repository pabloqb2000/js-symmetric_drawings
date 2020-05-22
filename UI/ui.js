/**
 * Class to control all the ui elements
 */
class UI{
    static elements = [];
    static distributed = 0;
    static tableWidth = 0;
    static tableHeight = 0;
    static widthMargin = 20;
    static heightMargin = 20;

    /**
     * Adds the element to the UI 
     * 
     * @param element New element to be added
     */
    static addElement(element){
        this.elements.push(element);
    }

    /**
     * Distributes the elemets of the UI
     * changing their coordinates
     */
    static distrubute() {
        this.distributed = 0;
        let colWidth = this.getColWidth();
        let rowHeight = this.getRowHeight();
        for(let e of this.elements){
            if(e.visible) {
                let col = this.distributed % this.tableWidth;
                let row = floor(this.distributed / this.tableWidth);
                e.x = colWidth*col + this.widthMargin;
                e.y = rowHeight*row + this.heightMargin;
                this.distributed += 1;
            }
        }    
    }

    /**
     * @return The width of the widest element + the width margin
     */
    static getColWidth() {
        let maxWidth = 0;
        for (let e of this.elements)
            if(e.getWidth() > maxWidth)
                maxWidth = e.getWidth();
        return maxWidth + this.widthMargin;
    }

    /**
     * @return The height of the highest element + the height margin
     */
    static getRowHeight() {
        let maxHeight = 0;
        for(let e of this.elements)
            if(e.getHeight() > maxHeight)
                maxHeight = e.getHeight();
        return maxHeight + this.heightMargin;
    }

    /**
     * Update all the elemets in the ui
     */
    static update() {
        for (let e of this.elements){
            if(e.visible)
                e.update();
        }
    }

    /**
     * Draw all the elements
     */
    static draw() {
        for (let e of this.elements){
            if(e.visible)
                e.draw();
        }
    }

    /**
     * Update all draggable the elements
     */
    static mouseDragged() {
        for(let e of this.elements) {
            if(e.draggable)
                e.dragged();
        }
    }

    /**
     * Update all the clickable elements
     */
    static mouseClicked() {
        for(let e of this.elements) {
            if(e.clickable)
                e.clicked();
        }
    }
}