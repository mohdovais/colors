import { h, Component } from 'preact';
import YIQ from './YIQ.jsx';
import RandomColors from './RandomColors.jsx';

export default class Application extends Component {
    render(props) {
        return (
            <div>
                <h2>YIQ</h2>
                <YIQ />
                <hr />
                <h2>Random Light Colors</h2>
                <RandomColors min={125} />
                <hr />
                <h2>Random Dark Colors</h2>
                <RandomColors max={125} />
                <hr />
                <h2>Random Colors</h2>
                <RandomColors />
            </div>
        );
    }
}
