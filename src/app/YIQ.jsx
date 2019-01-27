import { h, Component } from 'preact';
import { parseColor } from './../color/parse.js';
import { rgb2hex } from './../color/rgb-to-hex.js';
import { toYIQ } from './../color/yiq.js';

export default class YIQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: null,
            rgba: null,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState(function() {
            return {
                color: event.target.value,
                rgba: parseColor(event.target.value),
            };
        });
    }

    render(props, state) {
        const bgColor = state.rgba && rgb2hex(state.rgba);
        const color = bgColor && toYIQ(bgColor) > 128 ? '#000' : '#fff';

        return (
            <form class="manual" onSubmit={event => event.preventDefault()}>
                <label for="input-color">Input Color:</label>
                <input
                    id="input-color"
                    type="text"
                    value={state.color}
                    onInput={this.onChange}
                />
                <span
                    style={{
                        backgroundColor: bgColor,
                        color: color,
                    }}
                >
                    {bgColor}
                </span>
            </form>
        );
    }
}
