import { h, Component } from 'preact';
import { randomHex } from './../color/random.js';
import { toYIQ } from './../color/yiq.js';

export default class RandomColors extends Component {
    render(props) {
        return (
            <div class="random-colors">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    const bgColor = randomHex(props.min || 0, props.max || 255);
                    const yiq = toYIQ(bgColor);
                    return (
                        <div
                            style={{
                                backgroundColor: bgColor,
                                color: yiq > 128 ? 'black' : 'white',
                            }}
                        >
                            {bgColor}
                        </div>
                    );
                })}
            </div>
        );
    }
}
