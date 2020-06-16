
/**
 * Represents a Part object. Will contain a name, an amount and a referece to a block 
 */
class Part {

    /**
     * Constructor for the Part object
     * @param {String} name 
     * @param {Block} block 
     * @param {int} amount 
     */
    constructor(name, block, amount) {
        this.name = name;
        this.block = block;
        this.amount = amount;

        // For the usecase of Engineering processes part references is also used
        this.part_references = Array();
    }

    /**
     * Add a position in the graphical view
     * @param {int} x 
     * @param {int} y 
     * @param {int} width
     * @param {int} height
     */
    set_position_size(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * Gets the position that is set using set_position_size() method
     */
    get_position_size() {
        return [this.x, this.y, this.width, this.height];
    }
}