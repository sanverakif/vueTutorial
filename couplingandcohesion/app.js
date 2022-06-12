export default class Shape {
    constructor(props) {
        this._type = props.type;
        this._text = props.text || '';
        this._transform = props.transform || { x: 0, y: 0 };
        this._radius = props.radius || 20;
        this._width = props.width || 0;
        this._height = props.height || 0;
    }
    update({ context }) {
        context.beginPath();
        switch (this._type) {
            case 'circle':
                context.arc(
                    this._transform.x,
                    this._transform.y,
                    this._radius,
                    0,
                    2 * Math.PI
                );
                context.fill();
                context.stroke();
                break;
            case 'square':
                context.fillRect(
                    this._transform.x,
                    this._transform.y,
                    this._width,
                    this._height
                );
                break;
            default:
                break;
        }
    }
}